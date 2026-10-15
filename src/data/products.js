import { categories } from './categories';

const toProxyImageUrl = (url) => {
  if (!url || typeof url !== 'string') return url;

  const isFrontierHosted = /frontiercoop\.com|frontiercoop\.widen\.net/i.test(url);

  if (!isFrontierHosted) {
    return url;
  }

  return `https://wsrv.nl/?url=${encodeURIComponent(url)}`;
};

const organicSpicesProducts = [
  {
    name: 'Wedderspoon Organic Eucalyptus with Bee Propolis Manuka Honey Drops 4 oz.',
    slug: 'wedderspoon-organic-eucalyptus-with-bee-propolis-manuka-honey-drops-4-oz',
    price: 8.09,
    originalPrice: 8.09,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/W/e/Wedderspoon-Organic-Eucalyptus-Bee-Propolis-Manuka-Honey-Drops-4oz-Front-233525.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/W/e/Wedderspoon-Organic-Eucalyptus-Bee-Propolis-Manuka-Honey-Drops-4oz-Front-233525.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/W/e/Wedderspoon-Organic-Eucalyptus-Bee-Propolis-Manuka-Honey-Drops-4oz-Lifestyle-PDP-233525.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/W/e/Wedderspoon-Organic-Eucalyptus-Bee-Propolis-Manuka-Honey-Drops-4oz-Back-233525.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Wedderspoon Organic Eucalyptus with Bee Propolis Manuka Honey Drops 4 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Frontier Co-op Ground Ginger Root, Organic 4.09 oz.',
    slug: 'frontier-co-op-ground-ginger-root-organic-4-09-oz',
    price: 8.00,
    originalPrice: 8.00,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836310798-frontier-coop-organic-ginger-M308663B-FRONT.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836310798-frontier-coop-organic-ginger-M308663B-FRONT.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836310798-frontier-coop-organic-ginger-M308663B-TOP.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836310798-frontier-coop-organic-ginger-M308663B-RIGHT.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Frontier Co-op Ground Ginger Root, Organic 4.09 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Black Pepper',
    slug: 'simply-organic-black-pepper',
    price: 8.27,
    originalPrice: 8.27,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836194954-simply-organic-black-pepper-4oz-angle.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836194954-simply-organic-black-pepper-4oz-angle.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836194954-simply-organic-black-pepper-4oz-back_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836194954-simply-organic-black-pepper-4oz-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Simply Organic Black Pepper 4.00 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Black Garlic Finishing Salt',
    slug: 'simply-organic-black-garlic-finishing-salt',
    price: 7.00,
    originalPrice: 7.00,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836221087-simply-organic-finishing-salts-black-garlic-M308963-front-detailed-updated.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836221087-simply-organic-finishing-salts-black-garlic-M308963-front-detailed-updated.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836221087-simply-organic-finishing-salts-black-garlic-M308963-PDP-2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836221087-simply-organic-finishing-salts-black-garlic-M308963-front-updated.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Simply Organic Black Garlic Finishing Salt 2.19 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic White Chicken Chili Seasoning Mix 1.00 oz.',
    slug: 'simply-organic-white-chicken-chili-seasoning-mix-1-00-oz',
    price: 1.22,
    originalPrice: 1.22,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836157065-simply-organic-white-chicken-chili-M504689-back.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836157065-simply-organic-white-chicken-chili-M504689-back.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836157065-simply-organic-white-chicken-chili-M504689-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836157065-simply-organic-white-chicken-chili-M504689-PDP-recipe.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Simply Organic White Chicken Chili Seasoning Mix 1.00 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: "MaryRuth's Maple Spice Organic Cordyceps Mushroom Sugar-Free Liposomal 7.6 fl. oz.",
    slug: 'maryruth-s-maple-spice-organic-cordyceps-mushroom-sugar-free-liposomal-7-6-fl-oz',
    price: 8.52,
    originalPrice: 8.52,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/M/a/MaryRuths-Cordyceps-Mushroom-Liposomal-7-6floz-Front-241895.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/M/a/MaryRuths-Cordyceps-Mushroom-Liposomal-7-6floz-Front-241895.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/M/a/MaryRuths-Cordyceps-Mushroom-Liposomal-7-6floz-SF-241895.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/M/a/MaryRuths-Cordyceps-Mushroom-Liposomal-7-6floz-Side-241895.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: "MaryRuth's Maple Spice Organic Cordyceps Mushroom Sugar-Free Liposomal 7.6 fl. oz. • Premium quality and aroma.",
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Spiced Blackberry Focus Tea 16 tea bags',
    slug: 'yogi-tea-organic-spiced-blackberry-focus-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 4.15,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Spiced-Blackberry-Focus-Tea-16-tea-bags-238770-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Spiced-Blackberry-Focus-Tea-16-tea-bags-238770-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Bedtime-16-tea-bags-1796-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Stomach-Ease-Certified-Organic-16-tea-bags-1797-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Yogi Tea Organic Spiced Blackberry Focus Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Reishi Warming Spice Stress Ease Immune Tea 16 count',
    slug: 'traditional-medicinals-organic-reishi-warming-spice-stress-ease-immune-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Stress-Ease-Immune-Tea-16count-Front-240491.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Stress-Ease-Immune-Tea-16count-Front-240491.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Stress-Ease-Immune-Tea-16count-Side1-240491.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Stress-Ease-Immune-Tea-16count-SF-240491_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Organic Reishi Warming Spice Stress Ease Immune Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Roasted Dandelion Spice DeTox Tea 16 tea bags',
    slug: 'yogi-tea-organic-roasted-dandelion-spice-detox-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 4.15,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Roasted-Dandelion-Spice-DeTox-16-tea-bags-228852-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Roasted-Dandelion-Spice-DeTox-16-tea-bags-228852-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Bedtime-16-tea-bags-1796-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Stomach-Ease-Certified-Organic-16-tea-bags-1797-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Yogi Tea Organic Roasted Dandelion Spice DeTox Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Herbal Cold Care Elderflower Spice Tea 16 count',
    slug: 'traditional-medicinals-organic-herbal-cold-care-elderflower-spice-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Gypsy-Cold-Care-16-tea-bags-1703-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Gypsy-Cold-Care-16-tea-bags-1703-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Herbal-Cold-Care-Elderflower-Spice-Tea-Label-1703.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Gypsy-Cold-Care-16-tea-bags-1703-Right_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Organic Herbal Cold Care Elderflower Spice Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Pumpkin Spice',
    slug: 'simply-organic-pumpkin-spice',
    price: 3.80,
    originalPrice: 3.80,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836195357-simply-organic-pumpkin-spice-MF70003B_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836195357-simply-organic-pumpkin-spice-MF70003B_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836195357-simply-organic-pumpkin-spice-MF70003B-PDP-5.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836195357-simply-organic-pumpkin-spice-side_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Simply Organic Pumpkin Spice 1.94 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
];

const healthySnacksProducts = [
  {
    name: 'Prince of Peace Pineapple Coconut Ginger Chews 4 oz. bag',
    slug: 'prince-of-peace-pineapple-coconut-ginger-chews-4-oz-bag',
    price: 2.65,
    originalPrice: 2.65,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/1/_/1_Prince-of-Peace-Pineapple-Coconut-Ginger-Chews-4oz-bag-Front-239545.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/1/_/1_Prince-of-Peace-Pineapple-Coconut-Ginger-Chews-4oz-bag-Front-239545.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/2/_/2_Prince-of-Peace-Pineapple-Coconut-Ginger-Chews-4oz-bag-Back-239545.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/1/_/1_Prince-of-Peace-Pineapple-Coconut-Ginger-Chews-4oz-bag-Front-239545.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Prince of Peace Pineapple Coconut Ginger Chews 4 oz. bag • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Annie's Organic Cheddar Snack Mix 2.5 oz.",
    slug: 'annies-organic-cheddar-snack-mix-2-5-oz',
    price: 2.65,
    originalPrice: 2.65,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/A/n/Annies-Organic-Cheddar-Snack-Mix-2-5oz-Front-241182.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/A/n/Annies-Organic-Cheddar-Snack-Mix-2-5oz-Front-241182.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/n/Annies-Organic-Cheddar-Snack-Mix-2-5oz-Lifestyle-241182_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/n/Annies-Organic-Cheddar-Snack-Mix-2-5oz-Back-241182.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: "Annie's Organic Cheddar Snack Mix 2.5 oz. • Premium quality and aroma.",
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Karmalize.Me Heart Healthy Trail Mix 1 oz.',
    slug: 'karmalize-me-heart-healthy-trail-mix-1-oz',
    price: 1.07,
    originalPrice: 1.07,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/K/a/KarmalizeMe-Heart-Healthy-Trail-Mix-1oz-Front-240932.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/K/a/KarmalizeMe-Heart-Healthy-Trail-Mix-1oz-Front-240932.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/K/a/KarmalizeMe-Heart-Healthy-Trail-Mix-1oz-Back-240932_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/K/a/KarmalizeMe-Heart-Healthy-Trail-Mix-1oz-Front-240932.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Karmalize.Me Heart Healthy Trail Mix 1 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Trophy Farms Nuts-N-Chocolate Snack Mix 12 (2 oz.) packs',
    slug: 'trophy-farms-nuts-n-chocolate-snack-mix-12-2-oz-packs',
    price: 16.28,
    originalPrice: 16.28,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Trophy-Farms-Nuts-n-Chocolate-Snack-Mix-12-pack-Front-Display-228341.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Trophy-Farms-Nuts-n-Chocolate-Snack-Mix-12-pack-Front-Display-228341.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Trophy-Farms-Nuts-n-Chocolate-Snack-Mix-12-pack-NF-228341_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Trophy-Farms-Nuts-n-Chocolate-Snack-Mix-12-pack-Front-228341_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Trophy Farms Nuts-N-Chocolate Snack Mix 12 (2 oz.) packs • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Bobo's Raspberry PB & J Oat Snacks 5 count",
    slug: 'bobo-s-raspberry-pb-j-oat-snacks-5-count',
    price: 5.45,
    originalPrice: 5.45,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/-/C/-C2-A0-C2-A0-C2-A0829262006632-Bobos-Raspberry-PBJ-5count-243192-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/-/C/-C2-A0-C2-A0-C2-A0829262006632-Bobos-Raspberry-PBJ-5count-243192-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/-/C/-C2-A0-C2-A0-C2-A0829262006632-Bobos-Raspberry-PBJ-5count-243192-Side2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/-/C/-C2-A0-C2-A0-C2-A0829262006632-Bobos-Raspberry-PBJ-5count-243192-Back.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: "Bobo's Raspberry PB & J Oat Snacks 5 count • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Sea Salt Caramel Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-sea-salt-caramel-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.09,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/8/5/850037405084-Element-Snacks-Sea-Salt-Caramel-Rice-Minis-3oz-239279-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/850037405084-Element-Snacks-Sea-Salt-Caramel-Rice-Minis-3oz-239279-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/850037405084-Element-Snacks-Sea-Salt-Caramel-Rice-Minis-3oz-239279-NF-PDP.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/850037405084-Element-Snacks-Sea-Salt-Caramel-Rice-Minis-3oz-239279-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Element Snacks Sea Salt Caramel Crispy Rice Minis 3 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-chocolate-peanut-butter-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.09,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-NF-PDP.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-chocolate-peanut-butter-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.09,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-NF-PDP.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/5/857360004960-Element-Snacks-Chocolate-PB-Rice-Minis-3oz-239278-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
];

const teaAndBeveragesProducts = [
  {
    name: 'Numi Tea Organic Golden Chai Black Tea 18 tea bags',
    slug: 'numi-tea-organic-golden-chai-black-tea-18-tea-bags',
    price: 5.27,
    originalPrice: 5.27,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/N/u/Numi-Tea-Organic-Teas-Golden-Chai-Black-Teas-18-tea-bags-221611-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/N/u/Numi-Tea-Organic-Teas-Golden-Chai-Black-Teas-18-tea-bags-221611-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/u/Numi-Tea-Organic-Golden-Chai-Black-Tea-18count-Lifestyle-PDP-221611.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/u/Numi-Tea-Organic-Golden-Chai-Black-Tea-18count-Lifestyle2-PDP-221611.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Numi Tea Organic Golden Chai Black Tea 18 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Ginger & Chamomile Tea 16 count',
    slug: 'traditional-medicinals-organic-ginger-chamomile-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Ginger-with-Chamomille-16-tea-bags-208853-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Ginger-with-Chamomille-16-tea-bags-208853-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Ginger-Chamomile-Tea-Label-208853.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Ginger-with-Chamomille-16-tea-bags-208853-Right.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Organic Ginger & Chamomile Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Chai Rooibos Tea 16 tea bags',
    slug: 'yogi-tea-organic-chai-rooibos-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 4.15,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Chai-Rooibos-Certified-Organic-16-tea-bags-213208-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Chai-Rooibos-Certified-Organic-16-tea-bags-213208-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Bedtime-16-tea-bags-1796-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Yogi-Tea-Herbal-Teas-Stomach-Ease-Certified-Organic-16-tea-bags-1797-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Yogi Tea Organic Chai Rooibos Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Stash Tea Double Spice Chai Tea Bags 18 tea bags',
    slug: 'stash-tea-double-spice-chai-tea-bags-18-tea-bags',
    price: 3.65,
    originalPrice: 3.65,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/S/t/Stash-Tea-Double-Spice-Chai-front-219627.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/S/t/Stash-Tea-Double-Spice-Chai-front-219627.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/t/Stash-Tea-Double-Spice-Chai-backteabag-219627.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/t/Stash-Tea-Double-Spice-Chai-teabag-219627.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Stash Tea Double Spice Chai Tea Bags 18 tea bags • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Breathe Easy Eucalyptus Mint Tea 16 count',
    slug: 'traditional-medicinals-breathe-easy-eucalyptus-mint-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Breathe-Easy-16-tea-bags-1702-Front_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Breathe-Easy-16-tea-bags-1702-Front_2.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Cold-Flu-Tea-Breathe-Easy-16-tea-bags-1702-Right_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Breathe-Easy-Eucalyptus-Mint-Tea-Label-1702.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Breathe Easy Eucalyptus Mint Tea 16 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Peppermint Tea 16 count',
    slug: 'traditional-medicinals-organic-peppermint-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Peppermint-16-tea-bags-1735-Front_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Peppermint-16-tea-bags-1735-Front_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://frontiercoop.widen.net/content/7yszsybspx/jpeg/Traditional-Medicinals-Organic-Tea-Peppermint-16-tea-bags-1735-Right.jpeg?w=900&h=900&position=c&color=ffffffff&quality=80&u=cgiwxt',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Tea-Peppermint-16-tea-bags-1735-Right.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Organic Peppermint Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Nighty Night Extra Lemon Balm & Valerian Tea 16 count',
    slug: 'traditional-medicinals-organic-nighty-night-extra-lemon-balm-valerian-tea-16-count',
    price: 4.67,
    originalPrice: 4.67,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Nighty-Night-Tea.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Nighty-Night-Tea.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Nighty-Night-Tea-Supplement-Facts.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/T/r/Traditional-Medicinals-Organic-Nighty-Night-Tea-Side_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Traditional Medicinals Organic Nighty Night Extra Lemon Balm & Valerian Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Smith Tea Organic Soothe Sayer Blend 15 count',
    slug: 'smith-tea-organic-soothe-sayer-blend-15-count',
    price: 8.5,
    originalPrice: 8.5,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/S/m/Smith-Tea-Soothe-Sayer-Box-237784.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/S/m/Smith-Tea-Soothe-Sayer-Box-237784.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/m/Smith-Tea-Soothe-Sayer-Cup-237784.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/m/Smith-Tea-Soothe-Sayer-Blend-237784.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Smith Tea Organic Soothe Sayer Blend 15 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Frontier Co-op Jasmine Pearls Green Tea, Organic 1 lb',
    slug: 'frontier-co-op-jasmine-pearls-green-tea-organic-1-lb',
    price: 67.4,
    originalPrice: 67.4,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836029867-Frontier-Jasmine-Pearls-Tea-Organic-2986-bowl.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836029867-Frontier-Jasmine-Pearls-Tea-Organic-2986-bowl.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836029867-frontier-coop-jasmine-pearls-green-tea-organic-PDP-1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/0/8/089836029867-frontier-coop-jasmine-pearls-green-tea-organic-PDP-3.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Frontier Co-op Jasmine Pearls Green Tea, Organic 1 lb • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
];

const healthBeautyProducts = [
  {
    name: 'Youtheory Advanced Collagen 290 tablets',
    slug: 'youtheory-advanced-collagen-290-tablets',
    price: 13.39,
    originalPrice: 13.39,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Collagen-Advanced-290count-Front-233354_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Collagen-Advanced-290count-Front-233354_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Collagen-Advanced-290-tablets-SF-233354.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Collagen-Advanced-290count-Side2-233354_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Youtheory Advanced Collagen 290 tablets • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Ricola Berry Medley Cough Drops 19 count',
    slug: 'ricola-berry-medley-cough-drops-19-count',
    price: 4.55,
    originalPrice: 4.55,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/R/i/Ricola-Berry-Medley-Throat-Drops-19count-Front-239034_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/R/i/Ricola-Berry-Medley-Throat-Drops-19count-Front-239034_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/R/i/Ricola-Berry-Medley-Throat-Drops-19count-NF-239034.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/R/i/Ricola-Berry-Medley-Throat-Drops-19count-Back-239034.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Ricola Berry Medley Cough Drops 19 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Derma E Eczema Relief Cream 4 oz.',
    slug: 'derma-e-eczema-relief-cream-4-oz',
    price: 13.55,
    originalPrice: 13.55,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Psorzema-Creme-Natural-Relief-for-Scaling-Flaking-Itching-211041-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Psorzema-Creme-Natural-Relief-for-Scaling-Flaking-Itching-211041-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/DermaE-Eczema-Relief-Cream-Front-4oz-Front-Box-211041.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/DermaE-Eczema-Relief-Cream-Front-4oz-Back-Jar-211041_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Derma E Eczema Relief Cream 4 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Youtheory Unflavored Collagen Powder 10 oz.',
    slug: 'youtheory-unflavored-collagen-powder-10-oz',
    price: 12.88,
    originalPrice: 12.88,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/YouTheory-Collagen-Powder-Unflavored-236833-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/YouTheory-Collagen-Powder-Unflavored-236833-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/YouTheory-Collagen-Powder-Unflavored-236833-right_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/YouTheory-Collagen-Powder-Unflavored-236833-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Youtheory Unflavored Collagen Powder 10 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Derma E Itch Relief Lotion 8 oz.',
    slug: 'derma-e-itch-relief-lotion-8-oz',
    price: 10.79,
    originalPrice: 10.79,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Itch-Relief-Lotion-with-Chamomile-Tea-Tree-E-211040-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Itch-Relief-Lotion-with-Chamomile-Tea-Tree-E-211040-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Itch-Relief-Lotion-8oz-Back-211040_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/e/Derma-E-Itch-Relief-Lotion-with-Chamomile-Tea-Tree-E-211040-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Derma E Itch Relief Lotion 8 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Quantum Super Lysine + Cream for Cold Sores 0.25 oz.',
    slug: 'quantum-super-lysine-cream-for-cold-sores-0-25-oz',
    price: 7.33,
    originalPrice: 7.33,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Q/u/Quantum-Super-Lysine-Cream-Cold-Sores-0-25oz-front-201707.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Q/u/Quantum-Super-Lysine-Cream-Cold-Sores-0-25oz-front-201707.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Q/u/Quantum-Super-Lysine-Cream-Cold-Sores-0-25oz-angled-201707.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Q/u/Quantum-Super-Lysine-Cream-Cold-Sores-0-25oz-tube-201707.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Quantum Super Lysine + Cream for Cold Sores 0.25 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'NeemAura Naturals Concentrated Neem Cream 2 oz.',
    slug: 'neemaura-naturals-concentrated-neem-cream-2-oz',
    price: 11.39,
    originalPrice: 11.39,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/N/e/NeemAura-Naturals-Body-Care-Neem-Cream-with-Aloe-Vera-Neem-Oil-2-29060-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/N/e/NeemAura-Naturals-Body-Care-Neem-Cream-with-Aloe-Vera-Neem-Oil-2-29060-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/e/NeemAura-Naturals-Body-Care-Neem-Cream-with-Aloe-Vera-Neem-Oil-2-29060-Left.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/e/NeemAura-Naturals-Concentrated-Neem-Cream-2oz-Right-29060.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'NeemAura Naturals Concentrated Neem Cream 2 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Youtheory Complete Beauty Zero Sugar Watermelon Gummies 60 count',
    slug: 'youtheory-complete-beauty-zero-sugar-watermelon-gummies-60-count',
    price: 21.59,
    originalPrice: 21.59,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Complete-Beauty-Watermelon-Zero-Sugar-Gummies-60count-Front-242519.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Complete-Beauty-Watermelon-Zero-Sugar-Gummies-60count-Front-242519.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Complete-Beauty-Watermelon-Zero-Sugar-Gummies-60count-Back-242519.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/Y/o/Youtheory-Complete-Beauty-Watermelon-Zero-Sugar-Gummies-60count-Right-242519.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Youtheory Complete Beauty Zero Sugar Watermelon Gummies 60 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Natrol Biotin Beauty Tablets 10,000 mcg 100 count',
    slug: 'natrol-biotin-beauty-tablets-10-000-mcg-100-count',
    price: 10.79,
    originalPrice: 10.79,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/2/2/224183-5396-931-Biotin-10000mcg-100ct-150cc-Label-Front-No-DS.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/2/2/224183-5396-931-Biotin-10000mcg-100ct-150cc-Label-Front-No-DS.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/2/2/224183-5396-931-Biotin-10000mcg-100ct-150cc-Label-SFP_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/a/Natrol-General-Health-Biotin-10000-mcg-100-tablets-224183-Right_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Natrol Biotin Beauty Tablets 10,000 mcg 100 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Nature\'s Answer Liquid Beauty Collagen 8 fl. oz.',
    slug: 'nature-s-answer-liquid-beauty-collagen-8-fl-oz',
    price: 23.99,
    originalPrice: 23.99,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/N/a/Natures-Answer-Liquid-Beauty-Collagen-8floz-Front-Bottle-240239.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/N/a/Natures-Answer-Liquid-Beauty-Collagen-8floz-Front-Bottle-240239.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/a/Natures-Answer-Liquid-Beauty-Collagen-8floz-Supplement-Facts-240239_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/N/a/Natures-Answer-Liquid-Beauty-Collagen-8floz-Front-Box-240239.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Nature\'s Answer Liquid Beauty Collagen 8 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
];

const householdNeedsProducts = [
  {
    name: 'Moso Natural Air Purifying Blue Moso Bag for Refrigerator 75 grams',
    slug: 'moso-natural-air-purifying-blue-moso-bag-for-refrigerator-75-grams',
    price: 5,
    originalPrice: 5,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/M/o/Moso-Natural-Air-Purifying-Blue-Moso-Bag-75-grams-228689-front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/M/o/Moso-Natural-Air-Purifying-Blue-Moso-Bag-75-grams-228689-front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/M/o/Moso-Natural-Air-Purifying-Blue-Moso-Bag-75-grams-228689-lifestyle.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/M/o/Moso-Natural-Air-Purifying-Blue-Moso-Bag-75-grams-228689-front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Moso Natural Air Purifying Blue Moso Bag for Refrigerator 75 grams • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Attitude Nature+ Technology Green Apple & Basil Bulk Dishwashing Liquid 67.6 fl. oz.',
    slug: 'attitude-nature-technology-green-apple-basil-bulk-dishwashing-liquid-67-6-fl-oz',
    price: 10.65,
    originalPrice: 10.65,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-BULK-Dishwashing-Liquid-green-apple-basil-236730-front_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-BULK-Dishwashing-Liquid-green-apple-basil-236730-front_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-Leaves-Pear-Amber-Aluminum-Free-Deodorant-2-64oz-Front-242245.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-Leaves-Mens-Deodorant-Amber-Citrus-2-64oz-Front-242239.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Attitude Nature+ Technology Green Apple & Basil Bulk Dishwashing Liquid 67.6 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Dr. Bronner's Sal Suds All Purpose Cleaner 16 fl. oz.",
    slug: 'dr-bronner-s-sal-suds-all-purpose-cleaner-16-fl-oz',
    price: 7.59,
    originalPrice: 7.59,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronner-Sal-Suds-222906-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronner-Sal-Suds-222906-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronner-Castille-Bar-Soap-Eucalyptus-216569-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronner-Toothpaste-Cinnamon-229400-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: "Dr. Bronner's Sal Suds All Purpose Cleaner 16 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Seventh Generation Lemongrass Citrus Disinfecting Wipes 70 count',
    slug: 'seventh-generation-lemongrass-citrus-disinfecting-wipes-70-count',
    price: 7.09,
    originalPrice: 7.09,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/S/e/Seventh-Generation-Household-Cleaners-Disinfecting-Wipes-Lemongrass-Citrus-70-count-223114-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/S/e/Seventh-Generation-Household-Cleaners-Disinfecting-Wipes-Lemongrass-Citrus-70-count-223114-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/e/Seventh-Generation-Lemongrass-Citrus-Disinfecting-Wipes-70count-Back-223114_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/S/e/Seventh-Generation-Household-Cleaners-Disinfecting-Wipes-Lemongrass-Citrus-70-count-223114-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Seventh Generation Lemongrass Citrus Disinfecting Wipes 70 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Dr. Bronner's 18-in-1 Pure Castile Baby Unscented Magic Soap 3.4 fl. oz.",
    slug: 'dr-bronner-s-18-in-1-pure-castile-baby-unscented-magic-soap-3-4-fl-oz',
    price: 2.99,
    originalPrice: 2.99,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronners-18-in-1-Pure-Castile-Soaps-3-4floz-Baby-Unscented-Front-241738.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronners-18-in-1-Pure-Castile-Soaps-3-4floz-Baby-Unscented-Front-241738.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronners-18-in-1-Pure-Castile-Soaps-3-4floz-Baby-Unscented-Back-241738.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/D/r/Dr-Bronners-18-in-1-Pure-Castile-Soaps-3-4floz-Baby-Unscented-Front-241738.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: "Dr. Bronner's 18-in-1 Pure Castile Baby Unscented Magic Soap 3.4 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Mrs. Meyer's Clean Day Acorn Spice Multi-Surface Cleaner Spray 16 fl. oz.",
    slug: 'mrs-meyer-s-clean-day-acorn-spice-multi-surface-cleaner-spray-16-fl-oz',
    price: 4.29,
    originalPrice: 4.29,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/8/0/808124113619-Mrs-Meyers-Acorn-Spice-Multi-Surface-Cleaner-Spray-16floz-Front-241836.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/8/0/808124113619-Mrs-Meyers-Acorn-Spice-Multi-Surface-Cleaner-Spray-16floz-Front-241836.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/0/808124113619-Mrs-Meyers-Acorn-Spice-Multi-Surface-Cleaner-Spray-16floz-Graphic3-PDP-241836.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/8/0/808124113619-Mrs-Meyers-Acorn-Spice-Multi-Surface-Cleaner-Spray-16floz-Back-241836.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: "Mrs. Meyer's Clean Day Acorn Spice Multi-Surface Cleaner Spray 16 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Earth Friendly Products Cedar Toilet Bowl Cleaner 24 fl. oz.',
    slug: 'earth-friendly-products-cedar-toilet-bowl-cleaner-24-fl-oz',
    price: 4.29,
    originalPrice: 4.29,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/E/C/ECOs-Toilet-Cleaner-Cedar-211167-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/E/C/ECOs-Toilet-Cleaner-Cedar-211167-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/C/ECOS-Cedar-Toliet-Bowl-Cleaner-24floz-Back-211167_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/C/ECOs-Toilet-Cleaner-Cedar-211167-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=75&width=60&canvas=60:75',
    ],
    shortDescription: 'Earth Friendly Products Cedar Toilet Bowl Cleaner 24 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Bad Air Sponge',
    slug: 'bad-air-sponge',
    price: 9.29,
    originalPrice: 9.29,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/B/a/Bad-Air-Sponge-Odor-Neutralants-Bad-Air-Sponge-223199-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/B/a/Bad-Air-Sponge-Odor-Neutralants-Bad-Air-Sponge-223199-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/B/a/Bad-Air-Sponge-Odor-Neutralants-Bad-Air-Sponge-223199-Front.jpeg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/M/r/Mrs-Meyers-Stain-Odor-Fighter-16floz-Front-242544.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Bad Air Sponge • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 32 fl. oz.',
    slug: 'essential-oxygen-food-grade-3-hydrogen-peroxide-32-fl-oz',
    price: 11.59,
    originalPrice: 11.59,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Hydrogen-Peroxide-Food-Grade-3-25-32floz-239803-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Hydrogen-Peroxide-Food-Grade-3-25-32floz-239803-Front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-32floz-Side-239803_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-32floz-Side2-239803.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 32 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Attitude Super Leaves Coconut Oil Amplifying Conditioner 16 fl. oz.',
    slug: 'attitude-super-leaves-coconut-oil-amplifying-conditioner-16-fl-oz',
    price: 10.19,
    originalPrice: 10.19,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-leaves-Curl-Amplifying-Conditioner-237583-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-leaves-Curl-Amplifying-Conditioner-237583-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-Leaves-Pear-Amber-Aluminum-Free-Deodorant-2-64oz-Front-242245.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
      'https://wholesale.frontiercoop.com/media/catalog/product/A/t/Attitude-Super-Leaves-Mens-Deodorant-Amber-Citrus-2-64oz-Front-242239.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=290&width=350&canvas=350:290',
    ],
    shortDescription: 'Attitude Super Leaves Coconut Oil Amplifying Conditioner 16 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 8 fl. oz. spray',
    slug: 'essential-oxygen-food-grade-3-hydrogen-peroxide-8-fl-oz-spray',
    price: 5.79,
    originalPrice: 5.79,
    image: 'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-3-Hydrogen-Peroxide-Spray-8oz-231799-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    gallery: [
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-3-Hydrogen-Peroxide-Spray-8oz-231799-front.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-8floz-spray-Side-231799_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
      'https://wholesale.frontiercoop.com/media/catalog/product/E/s/Essential-Oxygen-Food-Grade-Hydrogen-Peroxide-8floz-spray-Side2-231799.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=520&width=520&canvas=520:520',
    ],
    shortDescription: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 8 fl. oz. spray • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
];

const productNames = {
  'organic-spices': [
    'Organic Turmeric Powder',
    'Ceylon Cinnamon Sticks',
    'Red Chili Flakes',
    'Organic Cumin Seeds',
    'Ground Black Pepper',
    'Smoked Paprika',
    'Cardamom Pods',
    'Organic Ginger Powder',
    'Bay Leaves',
    'Whole Cloves',
    'Organic Garlic Powder',
    'Dried Oregano Leaves',
  ],
  'healthy-snacks': [
    'Ginger Chews',
    'Coconut Crunch Bites',
    'Roasted Almond Mix',
    'Sea Salt Crackers',
    'Fruit & Nut Trail Mix',
    'Organic Granola Cups',
    'Sweet Potato Chips',
    'Pumpkin Seed Crisps',
    'Cinnamon Snack Bars',
    'Minty Protein Bites',
    'Organic Coconut Bites',
    'Sunflower Seed Crackers',
  ],
  'tea-beverages': [
    'Organic Green Tea',
    'Chamomile Calm Tea',
    'Lemon Hibiscus Blend',
    'Matcha Morning Mix',
    'Turmeric Wellness Tea',
    'Iced Peach Tea',
    'Cinnamon Rooibos',
    'Earl Grey Citrus',
    'Herbal Sleep Tea',
    'Moringa Energy Drink',
    'Organic White Tea',
    'Mint Citrus Infusion',
  ],
  'health-beauty': [
    'Organic Rosehip Facial Oil',
    'Vitamin C Glow Serum',
    'Lavender Body Butter',
    'Herbal Hair Growth Oil',
    'Organic Aloe Vera Gel',
    'Natural Lip Balm Trio',
    'Detox Clay Face Mask',
    'Coconut Body Oil',
    'Botanical Hand Cream',
    'Rose Water Mist',
    'Champagne Repair Serum',
    'Peppermint Foot Scrub',
  ],
  'household-needs': [
    'Natural Dish Soap',
    'Glass Cleaner Spray',
    'Citrus Surface Wash',
    'Eco Laundry Detergent',
    'Plant-Based Floor Cleaner',
    'Bamboo Dish Brush',
    'Natural Hand Wash',
    'Lavender Cleaning Spray',
    'Air Freshener Mist',
    'Reusable Cleaning Cloth',
    'Organic Cleaning Vinegar',
    'Citrus Dish Scrubber',
  ],
};

const productImages = {
  'organic-spices': [
    'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  ],
  'healthy-snacks': [
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=900&q=80',
  ],
  'tea-beverages': [
    'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80',
  ],
  'health-beauty': [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  ],
  'household-needs': [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1527515545081-5c8f4b4d52b8?auto=format&fit=crop&w=900&q=80',
  ],
};

const buildProducts = () => {
  const items = [];
  let nextId = 1;

  categories.forEach((category) => {
    if (category.slug === 'organic-spices') {
      organicSpicesProducts.forEach((item, index) => {
        const rating = Math.min(5, 4.6 + (index % 5) * 0.1);

        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: 32 + index * 8,
          featured: index % 3 === 0,
          badge: item.badge || 'Organic',
          stock: item.stock ?? 50,
          description: 'Premium organic spices selected for vibrant flavor, clean cooking, and everyday wellness.',
          shortDescription: item.shortDescription || `${item.name} • Premium quality and aroma.`,
          image: toProxyImageUrl(item.image),
          gallery: Array.isArray(item.gallery) ? item.gallery.map(toProxyImageUrl).filter(Boolean) : [],
          features: [
            'Organic ingredients',
            'Carefully sourced',
            'Ready to use',
            'Healthy daily choice',
          ],
        });
      });
      return;
    }

    if (category.slug === 'healthy-snacks') {
      healthySnacksProducts.forEach((item, index) => {
        const rating = Math.min(5, 4.4 + (index % 5) * 0.1);

        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: 32 + index * 8,
          featured: index % 3 === 0,
          badge: item.badge || 'Best Seller',
          stock: item.stock ?? 50,
          description: 'Wholesome snacks designed for better daily energy, smarter choices, and satisfying cravings.',
          shortDescription: item.shortDescription || `${item.name} • Premium quality and aroma.`,
          image: toProxyImageUrl(item.image),
          gallery: Array.isArray(item.gallery) ? item.gallery.map(toProxyImageUrl).filter(Boolean) : [],
          features: [
            'Wholesome ingredients',
            'Ready to snack',
            'Energy-friendly',
            'Great taste',
          ],
        });
      });
      return;
    }

    if (category.slug === 'tea-beverages') {
      teaAndBeveragesProducts.forEach((item, index) => {
        const rating = Math.min(5, 4.5 + (index % 5) * 0.1);
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: 30 + index * 7,
          featured: index % 3 === 0,
          badge: item.badge || 'Best Seller',
          stock: item.stock ?? 50,
          description: 'Fresh brews and soothing blends crafted for comfort, clarity, and everyday wellness.',
          shortDescription: item.shortDescription || `${item.name} • Premium quality and aroma.`,
          image: toProxyImageUrl(item.image),
          gallery: Array.isArray(item.gallery) ? item.gallery.map(toProxyImageUrl).filter(Boolean) : [],
          features: [
            'Organic ingredients',
            'Gentle blends',
            'Daily ritual',
            'Wellness support',
          ],
        });
      });
      return;
    }

    if (category.slug === 'health-beauty') {
      healthBeautyProducts.forEach((item, index) => {
        const rating = Math.min(5, 4.5 + (index % 5) * 0.1);
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: 30 + index * 7,
          featured: index % 3 === 0,
          badge: item.badge || 'Organic',
          stock: item.stock ?? 50,
          description: 'Gentle, plant-based health and beauty essentials designed for brighter, calmer routines.',
          shortDescription: item.shortDescription || `${item.name} • Premium quality and aroma.`,
          image: toProxyImageUrl(item.image),
          gallery: Array.isArray(item.gallery) ? item.gallery.map(toProxyImageUrl).filter(Boolean) : [],
          features: [
            'Botanical care',
            'Skin-friendly',
            'Daily wellness',
            'Natural ingredients',
          ],
        });
      });
      return;
    }

    if (category.slug === 'household-needs') {
      householdNeedsProducts.forEach((item, index) => {
        const rating = Math.min(5, 4.5 + (index % 5) * 0.1);
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: 30 + index * 7,
          featured: index % 3 === 0,
          badge: item.badge || 'Best Seller',
          stock: item.stock ?? 50,
          description: 'Practical, clean, and safer household essentials for a fresher everyday routine.',
          shortDescription: item.shortDescription || `${item.name} • Premium quality and aroma.`,
          image: toProxyImageUrl(item.image),
          gallery: Array.isArray(item.gallery) ? item.gallery.map(toProxyImageUrl).filter(Boolean) : [],
          features: [
            'Eco-conscious care',
            'Gentle cleaning',
            'Home-ready use',
            'Daily convenience',
          ],
        });
      });
      return;
    }

    const categoryProducts = productNames[category.slug] || [];
    if (!categoryProducts.length) {
      return;
    }

    categoryProducts.forEach((name, index) => {
      const price = 12 + category.id * 4 + index * 1.75;
      const originalPrice = price + 4 + (index % 2);
      const rating = Math.min(5, 4.4 + ((index + category.id) % 5) * 0.1);

      items.push({
        id: nextId++,
        slug: `${category.slug}-${index + 1}`,
        name,
        category: category.name,
        categorySlug: category.slug,
        price: Number(price.toFixed(2)),
        originalPrice: Number(originalPrice.toFixed(2)),
        rating,
        reviewCount: 28 + index * 9,
        featured: index % 3 === 0,
        badge: index % 4 === 0 ? 'Best Seller' : index % 4 === 1 ? 'Organic' : index % 4 === 2 ? 'New' : 'Popular',
        stock: 20 + index * 3,
        description: `Premium ${category.name.toLowerCase()} curated for a healthier lifestyle and daily freshness.`,
        shortDescription: `${category.name} • Freshly packed and ready to enjoy.`,
        image: toProxyImageUrl(productImages[category.slug]?.[index % (productImages[category.slug]?.length || 1)] || ''),
        gallery: Array.isArray(productImages[category.slug]) ? productImages[category.slug].slice(0, 3) : [],
        features: [
          'Natural ingredients',
          'Carefully sourced',
          'Ready to use',
          'Healthy daily choice',
        ],
      });
    });
  });

  return items;
};

export const products = buildProducts();

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (slug) =>
  products.filter((product) => product.categorySlug === slug);
