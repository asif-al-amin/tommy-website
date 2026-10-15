const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  page.on('console', msg => console.log('BROWSER_CONSOLE:', msg.type(), msg.text()));
  page.on('pageerror', err => {
    console.log('PAGE_ERROR_NAME:', err.name);
    console.log('PAGE_ERROR_MESSAGE:', err.message);
    console.log('PAGE_ERROR_STACK:', err.stack);
  });
  page.on('requestfailed', req => {
    const fail = req.failure();
    console.log('REQUEST_FAILED:', req.url(), fail ? fail.errorText() : '');
  });

  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);

  console.log('TITLE:', await page.title());
  console.log('URL:', page.url());
  console.log('BODY_TEXT_START');
  console.log((await page.locator('body').innerText()).slice(0, 2000));
  console.log('BODY_TEXT_END');

  await browser.close();
})();
