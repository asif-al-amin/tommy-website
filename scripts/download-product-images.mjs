import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataFilePath = path.join(projectRoot, 'src', 'data', 'products.js');
const downloadDir = path.join(projectRoot, 'public', 'images', 'products');

const args = process.argv.slice(2);
const limitArg = args.find((arg) => arg.startsWith('--limit='));
const limit = limitArg ? Number.parseInt(limitArg.split('=')[1], 10) : Number.POSITIVE_INFINITY;

if (!fs.existsSync(dataFilePath)) {
  console.error(`Data file not found: ${dataFilePath}`);
  process.exit(1);
}

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const decodeProxyUrl = (value) => {
  if (!value || typeof value !== 'string') return null;

  try {
    const url = new URL(value);
    const target = url.searchParams.get('url');
    if (target) return decodeURIComponent(target);
  } catch {
    // ignore
  }

  return null;
};

const getDownloadTarget = (value) => {
  const decoded = decodeProxyUrl(value);
  if (decoded) return decoded;
  return value;
};

const fetchWithProxy = async (sourceUrl) => {
  const targetUrl = getDownloadTarget(sourceUrl);
  const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(targetUrl)}`;

  const response = await fetch(proxyUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    },
  });

  if (!response.ok) {
    throw new Error(`Proxy fetch failed: ${response.status} ${response.statusText}`);
  }

  return response.arrayBuffer();
};

const safeSlug = (value) => String(value || 'product')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')
  .slice(0, 80) || 'product';

const buildFilename = (url, index) => {
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname || '/';
    const ext = path.extname(pathname) || '.jpg';
    const basename = path.basename(pathname, ext);
    return `${index + 1}-${safeSlug(basename)}${ext}`;
  } catch {
    return `${index + 1}-product-${Date.now()}.jpg`;
  }
};

const extractImageUrls = (content) => {
  const regex = /https?:\/\/[^\s"'`<>]+\.(?:jpg|jpeg|png|webp|avif|gif)(?:\?[^\s"'`<>]*)?/gi;
  const rawMatches = content.match(regex) || [];

  const proxyMatches = content.match(/https?:\/\/wsrv\.nl\/\?url=[^\s"'`<>]+/gi) || [];
  const urls = [...rawMatches.map((value) => value.trim())];

  for (const match of proxyMatches) {
    const decoded = decodeProxyUrl(match);
    if (decoded) urls.push(decoded.trim());
  }

  return [...new Set(urls)];
};

const replaceAll = (source, searchValue, replaceValue) => source.split(searchValue).join(replaceValue);

const processImages = async () => {
  const source = fs.readFileSync(dataFilePath, 'utf8');
  const urls = extractImageUrls(source)
    .filter((url) => /frontiercoop\.com|frontiercoop\.widen\.net|wsrv\.nl/i.test(url))
    .slice(0, Number.isFinite(limit) ? limit : Infinity);

  if (!urls.length) {
    console.log('No remote product images found for conversion.');
    return;
  }

  const replacements = new Map();

  for (let i = 0; i < urls.length; i += 1) {
    const originalUrl = urls[i];
    const targetUrl = getDownloadTarget(originalUrl);
    if (!targetUrl || replacements.has(originalUrl)) continue;

    const filename = buildFilename(targetUrl, i);
    const targetPath = path.join(downloadDir, filename);
    const publicPath = `/images/products/${filename}`;

    try {
      const arrayBuffer = await fetchWithProxy(originalUrl);
      fs.writeFileSync(targetPath, Buffer.from(arrayBuffer));
      replacements.set(originalUrl, publicPath);
      console.log(`Downloaded ${targetUrl} -> ${publicPath}`);
    } catch (error) {
      console.warn(`Skipped ${targetUrl}: ${error.message}`);
    }
  }

  if (!replacements.size) {
    console.log('No image downloads succeeded.');
    return;
  }

  let updated = source;
  for (const [originalUrl, publicPath] of replacements.entries()) {
    updated = replaceAll(updated, originalUrl, publicPath);
    const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(getDownloadTarget(originalUrl))}`;
    updated = replaceAll(updated, proxyUrl, publicPath);
  }

  fs.writeFileSync(dataFilePath, updated, 'utf8');
  console.log(`Updated ${dataFilePath} for ${replacements.size} successful image downloads.`);
};

processImages().catch((error) => {
  console.error('Image migration failed:', error);
  process.exit(1);
});
