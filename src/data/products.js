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
    originalPrice: 9.29,
    image: '/images/products/1-wedderspoon-organic-eucalyptus-bee-propolis-manuka-honey-drops-4oz-front-233525.jpg',
    gallery: [
      '/images/products/1-wedderspoon-organic-eucalyptus-bee-propolis-manuka-honey-drops-4oz-front-233525.jpg',
      '/images/products/2-wedderspoon-organic-eucalyptus-bee-propolis-manuka-honey-drops-4oz-lifestyle-pdp.jpg',
      '/images/products/3-wedderspoon-organic-eucalyptus-bee-propolis-manuka-honey-drops-4oz-back-233525.jpg',
    ],
    shortDescription: 'Wedderspoon Organic Eucalyptus with Bee Propolis Manuka Honey Drops 4 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Frontier Co-op Ground Ginger Root, Organic 4.09 oz.',
    slug: 'frontier-co-op-ground-ginger-root-organic-4-09-oz',
    price: 7.80,
    originalPrice: 8.99,
    image: '/images/products/4-089836310798-frontier-coop-organic-ginger-m308663b-front.jpg',
    gallery: [
      '/images/products/4-089836310798-frontier-coop-organic-ginger-m308663b-front.jpg',
      '/images/products/5-089836310798-frontier-coop-organic-ginger-m308663b-top.jpg',
      '/images/products/1-089836310798-frontier-coop-organic-ginger-m308663b-right.jpg',
    ],
    shortDescription: 'Frontier Co-op Ground Ginger Root, Organic 4.09 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Black Pepper',
    slug: 'simply-organic-black-pepper',
    price: 8.27,
    originalPrice: 8.97,
    image: '/images/products/2-089836194954-simply-organic-black-pepper-4oz-angle.jpg',
    gallery: [
      '/images/products/2-089836194954-simply-organic-black-pepper-4oz-angle.jpg',
      '/images/products/3-089836194954-simply-organic-black-pepper-4oz-back-1.jpg',
      '/images/products/4-089836194954-simply-organic-black-pepper-4oz-front.jpg',
    ],
    shortDescription: 'Simply Organic Black Pepper 4.00 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Black Garlic Finishing Salt',
    slug: 'simply-organic-black-garlic-finishing-salt',
    price: 7.00,
    originalPrice: 7.99,
    image: '/images/products/5-089836221087-simply-organic-finishing-salts-black-garlic-m308963-front-detailed-.jpg',
    gallery: [
      '/images/products/5-089836221087-simply-organic-finishing-salts-black-garlic-m308963-front-detailed-.jpg',
      '/images/products/6-089836221087-simply-organic-finishing-salts-black-garlic-m308963-pdp-2.jpg',
      '/images/products/7-089836221087-simply-organic-finishing-salts-black-garlic-m308963-front-updated.jpg',
    ],
    shortDescription: 'Simply Organic Black Garlic Finishing Salt 2.19 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic White Chicken Chili Seasoning Mix 1.00 oz.',
    slug: 'simply-organic-white-chicken-chili-seasoning-mix-1-00-oz',
    price: 1.22,
    originalPrice: 2.22,
    image: '/images/products/9-089836157065-simply-organic-white-chicken-chili-m504689-front.jpg',
    gallery: [
      '/images/products/9-089836157065-simply-organic-white-chicken-chili-m504689-front.jpg',
      '/images/products/8-089836157065-simply-organic-white-chicken-chili-m504689-back.jpg',
      '/images/products/10-089836157065-simply-organic-white-chicken-chili-m504689-pdp-recipe.jpg',
    ],
    shortDescription: 'Simply Organic White Chicken Chili Seasoning Mix 1.00 oz. • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: "MaryRuth's Maple Spice Organic Cordyceps Mushroom Sugar-Free Liposomal 7.6 fl. oz.",
    slug: 'maryruth-s-maple-spice-organic-cordyceps-mushroom-sugar-free-liposomal-7-6-fl-oz',
    price: 8.52,
    originalPrice: 8.92,
    image: '/images/products/11-maryruths-cordyceps-mushroom-liposomal-7-6floz-front-241895.jpg',
    gallery: [
      '/images/products/11-maryruths-cordyceps-mushroom-liposomal-7-6floz-front-241895.jpg',
      '/images/products/12-maryruths-cordyceps-mushroom-liposomal-7-6floz-sf-241895.jpg',
      '/images/products/13-maryruths-cordyceps-mushroom-liposomal-7-6floz-side-241895.jpg',
    ],
    shortDescription: "MaryRuth's Maple Spice Organic Cordyceps Mushroom Sugar-Free Liposomal 7.6 fl. oz. • Premium quality and aroma.",
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Spiced Blackberry Focus Tea 16 tea bags',
    slug: 'yogi-tea-organic-spiced-blackberry-focus-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 5.15,
    image: '/images/products/14-yogi-tea-spiced-blackberry-focus-tea-16-tea-bags-238770-front.jpeg',
    gallery: [
      '/images/products/14-yogi-tea-spiced-blackberry-focus-tea-16-tea-bags-238770-front.jpeg',
      '/images/products/15-yogi-tea-herbal-teas-bedtime-16-tea-bags-1796-front.jpg',
      '/images/products/16-yogi-tea-herbal-teas-stomach-ease-certified-organic-16-tea-bags-1797-front.jpg',
    ],
    shortDescription: 'Yogi Tea Organic Spiced Blackberry Focus Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Reishi Warming Spice Stress Ease Immune Tea 16 count',
    slug: 'traditional-medicinals-organic-reishi-warming-spice-stress-ease-immune-tea-16-count',
    price: 4.67,
    originalPrice: 4.97,
    image: '/images/products/17-traditional-medicinals-stress-ease-immune-tea-16count-front-240491.jpg',
    gallery: [
      '/images/products/17-traditional-medicinals-stress-ease-immune-tea-16count-front-240491.jpg',
      '/images/products/18-traditional-medicinals-stress-ease-immune-tea-16count-side1-240491.jpg',
      '/images/products/19-traditional-medicinals-stress-ease-immune-tea-16count-sf-240491-1.jpg',
    ],
    shortDescription: 'Traditional Medicinals Organic Reishi Warming Spice Stress Ease Immune Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Roasted Dandelion Spice DeTox Tea 16 tea bags',
    slug: 'yogi-tea-organic-roasted-dandelion-spice-detox-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 4.75,
    image: '/images/products/20-yogi-tea-herbal-teas-roasted-dandelion-spice-detox-16-tea-bags-228852-front.jpg',
    gallery: [
      '/images/products/20-yogi-tea-herbal-teas-roasted-dandelion-spice-detox-16-tea-bags-228852-front.jpg',
      '/images/products/15-yogi-tea-herbal-teas-bedtime-16-tea-bags-1796-front.jpg',
      '/images/products/16-yogi-tea-herbal-teas-stomach-ease-certified-organic-16-tea-bags-1797-front.jpg',
    ],
    shortDescription: 'Yogi Tea Organic Roasted Dandelion Spice DeTox Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Herbal Cold Care Elderflower Spice Tea 16 count',
    slug: 'traditional-medicinals-organic-herbal-cold-care-elderflower-spice-tea-16-count',
    price: 4.67,
    originalPrice: 4.97,
    image: '/images/products/21-traditional-medicinals-cold-flu-tea-gypsy-cold-care-16-tea-bags-1703-front.jpg',
    gallery: [
      '/images/products/21-traditional-medicinals-cold-flu-tea-gypsy-cold-care-16-tea-bags-1703-front.jpg',
      '/images/products/22-traditional-medicinals-organic-herbal-cold-care-elderflower-spice-tea-label-1703.jpg',
      '/images/products/23-traditional-medicinals-cold-flu-tea-gypsy-cold-care-16-tea-bags-1703-right-1.jpg',
    ],
    shortDescription: 'Traditional Medicinals Organic Herbal Cold Care Elderflower Spice Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Simply Organic® Pumpkin Spice',
    slug: 'simply-organic-pumpkin-spice',
    price: 3.80,
    originalPrice: 4.80,
    image: '/images/products/24-089836195357-simply-organic-pumpkin-spice-mf70003b-1.jpg',
    gallery: [
      '/images/products/24-089836195357-simply-organic-pumpkin-spice-mf70003b-1.jpg',
      '/images/products/25-089836195357-simply-organic-pumpkin-spice-mf70003b-pdp-5.jpg',
      '/images/products/26-089836195357-simply-organic-pumpkin-spice-side-1.jpg',
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
    originalPrice: 2.99,
    image: '/images/products/27-1-prince-of-peace-pineapple-coconut-ginger-chews-4oz-bag-front-239545.jpeg',
    gallery: [
      '/images/products/27-1-prince-of-peace-pineapple-coconut-ginger-chews-4oz-bag-front-239545.jpeg',
      '/images/products/28-2-prince-of-peace-pineapple-coconut-ginger-chews-4oz-bag-back-239545.jpeg',
      '/images/products/29-1-prince-of-peace-pineapple-coconut-ginger-chews-4oz-bag-front-239545.jpeg',
    ],
    shortDescription: 'Prince of Peace Pineapple Coconut Ginger Chews 4 oz. bag • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Annie's Organic Cheddar Snack Mix 2.5 oz.",
    slug: 'annies-organic-cheddar-snack-mix-2-5-oz',
    price: 2.65,
    originalPrice: 2.95,
    image: '/images/products/30-annies-organic-cheddar-snack-mix-2-5oz-front-241182.jpg',
    gallery: [
      '/images/products/30-annies-organic-cheddar-snack-mix-2-5oz-front-241182.jpg',
      '/images/products/31-annies-organic-cheddar-snack-mix-2-5oz-lifestyle-241182-1.jpg',
      '/images/products/32-annies-organic-cheddar-snack-mix-2-5oz-back-241182.jpg',
    ],
    shortDescription: "Annie's Organic Cheddar Snack Mix 2.5 oz. • Premium quality and aroma.",
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Karmalize.Me Heart Healthy Trail Mix 1 oz.',
    slug: 'karmalize-me-heart-healthy-trail-mix-1-oz',
    price: 1.07,
    originalPrice: 1.88,
    image: '/images/products/33-karmalizeme-heart-healthy-trail-mix-1oz-front-240932.jpg',
    gallery: [
      '/images/products/33-karmalizeme-heart-healthy-trail-mix-1oz-front-240932.jpg',
      '/images/products/34-karmalizeme-heart-healthy-trail-mix-1oz-back-240932-1.jpg',
      '/images/products/35-karmalizeme-heart-healthy-trail-mix-1oz-front-240932.jpg',
    ],
    shortDescription: 'Karmalize.Me Heart Healthy Trail Mix 1 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Trophy Farms Nuts-N-Chocolate Snack Mix 12 (2 oz.) packs',
    slug: 'trophy-farms-nuts-n-chocolate-snack-mix-12-2-oz-packs',
    price: 16.28,
    originalPrice: 16.88,
    image: '/images/products/36-trophy-farms-nuts-n-chocolate-snack-mix-12-pack-front-display-228341.jpg',
    gallery: [
      '/images/products/36-trophy-farms-nuts-n-chocolate-snack-mix-12-pack-front-display-228341.jpg',
      '/images/products/37-trophy-farms-nuts-n-chocolate-snack-mix-12-pack-nf-228341-1.jpg',
      '/images/products/38-trophy-farms-nuts-n-chocolate-snack-mix-12-pack-front-228341-1.jpg',
    ],
    shortDescription: 'Trophy Farms Nuts-N-Chocolate Snack Mix 12 (2 oz.) packs • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Bobo's Raspberry PB & J Oat Snacks 5 count",
    slug: 'bobo-s-raspberry-pb-j-oat-snacks-5-count',
    price: 5.45,
    originalPrice: 5.95,
    image: '/images/products/39-c2-a0-c2-a0-c2-a0829262006632-bobos-raspberry-pbj-5count-243192-front.jpg',
    gallery: [
      '/images/products/39-c2-a0-c2-a0-c2-a0829262006632-bobos-raspberry-pbj-5count-243192-front.jpg',
      '/images/products/40-c2-a0-c2-a0-c2-a0829262006632-bobos-raspberry-pbj-5count-243192-side2.jpg',
      '/images/products/41-c2-a0-c2-a0-c2-a0829262006632-bobos-raspberry-pbj-5count-243192-back.jpg',
    ],
    shortDescription: "Bobo's Raspberry PB & J Oat Snacks 5 count • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Sea Salt Caramel Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-sea-salt-caramel-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.99,
    image: '/images/products/42-850037405084-element-snacks-sea-salt-caramel-rice-minis-3oz-239279-front.jpg',
    gallery: [
      '/images/products/42-850037405084-element-snacks-sea-salt-caramel-rice-minis-3oz-239279-front.jpg',
      '/images/products/43-850037405084-element-snacks-sea-salt-caramel-rice-minis-3oz-239279-nf-pdp.jpg',
      '/images/products/44-850037405084-element-snacks-sea-salt-caramel-rice-minis-3oz-239279-front.jpg',
    ],
    shortDescription: 'Element Snacks Sea Salt Caramel Crispy Rice Minis 3 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-chocolate-peanut-butter-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.99,
    image: '/images/products/45-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
    gallery: [
      '/images/products/45-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
      '/images/products/46-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-nf-pdp.jpg',
      '/images/products/47-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
    ],
    shortDescription: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Element Snacks Chocolate Peanut Butter Crispy Rice Minis 3 oz.',
    slug: 'element-snacks-chocolate-peanut-butter-crispy-rice-minis-3-oz',
    price: 4.09,
    originalPrice: 4.89,
    image: '/images/products/45-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
    gallery: [
      '/images/products/45-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
      '/images/products/46-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-nf-pdp.jpg',
      '/images/products/47-857360004960-element-snacks-chocolate-pb-rice-minis-3oz-239278-front.jpg',
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
    originalPrice: 5.88,
    image: '/images/products/48-numi-tea-organic-teas-golden-chai-black-teas-18-tea-bags-221611-front.jpg',
    gallery: [
      '/images/products/48-numi-tea-organic-teas-golden-chai-black-teas-18-tea-bags-221611-front.jpg',
      '/images/products/49-numi-tea-organic-golden-chai-black-tea-18count-lifestyle-pdp-221611.jpg',
      '/images/products/50-numi-tea-organic-golden-chai-black-tea-18count-lifestyle2-pdp-221611.jpg',
    ],
    shortDescription: 'Numi Tea Organic Golden Chai Black Tea 18 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Ginger & Chamomile Tea 16 count',
    slug: 'traditional-medicinals-organic-ginger-chamomile-tea-16-count',
    price: 4.67,
    originalPrice: 4.97,
    image: '/images/products/51-traditional-medicinals-organic-tea-ginger-with-chamomille-16-tea-bags-208853-fro.jpg',
    gallery: [
      '/images/products/51-traditional-medicinals-organic-tea-ginger-with-chamomille-16-tea-bags-208853-fro.jpg',
      '/images/products/52-traditional-medicinals-organic-ginger-chamomile-tea-label-208853.jpg',
      '/images/products/53-traditional-medicinals-organic-tea-ginger-with-chamomille-16-tea-bags-208853-rig.jpg',
    ],
    shortDescription: 'Traditional Medicinals Organic Ginger & Chamomile Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Yogi Tea Organic Chai Rooibos Tea 16 tea bags',
    slug: 'yogi-tea-organic-chai-rooibos-tea-16-tea-bags',
    price: 4.15,
    originalPrice: 4.45,
    image: '/images/products/54-yogi-tea-herbal-teas-chai-rooibos-certified-organic-16-tea-bags-213208-front.jpg',
    gallery: [
      '/images/products/54-yogi-tea-herbal-teas-chai-rooibos-certified-organic-16-tea-bags-213208-front.jpg',
      '/images/products/15-yogi-tea-herbal-teas-bedtime-16-tea-bags-1796-front.jpg',
      '/images/products/16-yogi-tea-herbal-teas-stomach-ease-certified-organic-16-tea-bags-1797-front.jpg',
    ],
    shortDescription: 'Yogi Tea Organic Chai Rooibos Tea 16 tea bags • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Stash Tea Double Spice Chai Tea Bags 18 tea bags',
    slug: 'stash-tea-double-spice-chai-tea-bags-18-tea-bags',
    price: 3.65,
    originalPrice: 3.85,
    image: '/images/products/55-stash-tea-double-spice-chai-front-219627.jpeg',
    gallery: [
      '/images/products/55-stash-tea-double-spice-chai-front-219627.jpeg',
      '/images/products/56-stash-tea-double-spice-chai-backteabag-219627.jpeg',
      '/images/products/57-stash-tea-double-spice-chai-teabag-219627.jpeg',
    ],
    shortDescription: 'Stash Tea Double Spice Chai Tea Bags 18 tea bags • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Breathe Easy Eucalyptus Mint Tea 16 count',
    slug: 'traditional-medicinals-breathe-easy-eucalyptus-mint-tea-16-count',
    price: 4.67,
    originalPrice: 4.97,
    image: '/images/products/58-traditional-medicinals-cold-flu-tea-breathe-easy-16-tea-bags-1702-front-2.jpg',
    gallery: [
      '/images/products/58-traditional-medicinals-cold-flu-tea-breathe-easy-16-tea-bags-1702-front-2.jpg',
      '/images/products/59-traditional-medicinals-cold-flu-tea-breathe-easy-16-tea-bags-1702-right-1.jpg',
      '/images/products/60-traditional-medicinals-organic-breathe-easy-eucalyptus-mint-tea-label-1702.jpg',
    ],
    shortDescription: 'Traditional Medicinals Breathe Easy Eucalyptus Mint Tea 16 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Peppermint Tea 16 count',
    slug: 'traditional-medicinals-organic-peppermint-tea-16-count',
    price: 4.67,
    originalPrice: 4.97,
    image: '/images/products/61-traditional-medicinals-organic-tea-peppermint-16-tea-bags-1735-front-1.jpg',
    gallery: [
      '/images/products/61-traditional-medicinals-organic-tea-peppermint-16-tea-bags-1735-front-1.jpg',
      '/images/products/62-traditional-medicinals-organic-tea-peppermint-16-tea-bags-1735-right.jpeg',
      '/images/products/63-traditional-medicinals-organic-tea-peppermint-16-tea-bags-1735-right.jpg',
    ],
    shortDescription: 'Traditional Medicinals Organic Peppermint Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Traditional Medicinals Organic Nighty Night Extra Lemon Balm & Valerian Tea 16 count',
    slug: 'traditional-medicinals-organic-nighty-night-extra-lemon-balm-valerian-tea-16-count',
    price: 4.67,
    originalPrice: 4.77,
    image: '/images/products/64-traditional-medicinals-organic-nighty-night-tea.jpg',
    gallery: [
      '/images/products/64-traditional-medicinals-organic-nighty-night-tea.jpg',
      '/images/products/65-traditional-medicinals-organic-nighty-night-tea-supplement-facts.jpg',
      '/images/products/66-traditional-medicinals-organic-nighty-night-tea-side-1.jpg',
    ],
    shortDescription: 'Traditional Medicinals Organic Nighty Night Extra Lemon Balm & Valerian Tea 16 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Smith Tea Organic Soothe Sayer Blend 15 count',
    slug: 'smith-tea-organic-soothe-sayer-blend-15-count',
    price: 8.5,
    originalPrice: 8.95,
    image: '/images/products/67-smith-tea-soothe-sayer-box-237784.jpeg',
    gallery: [
      '/images/products/67-smith-tea-soothe-sayer-box-237784.jpeg',
      '/images/products/68-smith-tea-soothe-sayer-cup-237784.jpeg',
      '/images/products/69-smith-tea-soothe-sayer-blend-237784.jpeg',
    ],
    shortDescription: 'Smith Tea Organic Soothe Sayer Blend 15 count • Premium quality and aroma.',
    badge: 'Organic',
    stock: 50,
  },
  {
    name: 'Frontier Co-op Jasmine Pearls Green Tea, Organic 1 lb',
    slug: 'frontier-co-op-jasmine-pearls-green-tea-organic-1-lb',
    price: 67.4,
    originalPrice: 77.99,
    image: '/images/products/70-089836029867-frontier-jasmine-pearls-tea-organic-2986-bowl.jpg',
    gallery: [
      '/images/products/70-089836029867-frontier-jasmine-pearls-tea-organic-2986-bowl.jpg',
      '/images/products/71-089836029867-frontier-coop-jasmine-pearls-green-tea-organic-pdp-1.jpg',
      '/images/products/72-089836029867-frontier-coop-jasmine-pearls-green-tea-organic-pdp-3.jpg',
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
    originalPrice: 13.99,
    image: '/images/products/73-youtheory-collagen-advanced-290count-front-233354-1.jpg',
    gallery: [
      '/images/products/73-youtheory-collagen-advanced-290count-front-233354-1.jpg',
      '/images/products/74-youtheory-collagen-advanced-290-tablets-sf-233354.jpg',
      '/images/products/75-youtheory-collagen-advanced-290count-side2-233354-1.jpg',
    ],
    shortDescription: 'Youtheory Advanced Collagen 290 tablets • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Ricola Berry Medley Cough Drops 19 count',
    slug: 'ricola-berry-medley-cough-drops-19-count',
    price: 4.55,
    originalPrice: 4.99,
    image: '/images/products/76-ricola-berry-medley-throat-drops-19count-front-239034-1.jpg',
    gallery: [
      '/images/products/76-ricola-berry-medley-throat-drops-19count-front-239034-1.jpg',
      '/images/products/77-ricola-berry-medley-throat-drops-19count-nf-239034.jpg',
      '/images/products/78-ricola-berry-medley-throat-drops-19count-back-239034.jpg',
    ],
    shortDescription: 'Ricola Berry Medley Cough Drops 19 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Derma E Eczema Relief Cream 4 oz.',
    slug: 'derma-e-eczema-relief-cream-4-oz',
    price: 13.55,
    originalPrice: 14.55,
    image: '/images/products/79-derma-e-psorzema-creme-natural-relief-for-scaling-flaking-itching-211041-front.jpg',
    gallery: [
      '/images/products/79-derma-e-psorzema-creme-natural-relief-for-scaling-flaking-itching-211041-front.jpg',
      '/images/products/80-dermae-eczema-relief-cream-front-4oz-front-box-211041.jpg',
      '/images/products/81-dermae-eczema-relief-cream-front-4oz-back-jar-211041-1.jpg',
    ],
    shortDescription: 'Derma E Eczema Relief Cream 4 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Youtheory Unflavored Collagen Powder 10 oz.',
    slug: 'youtheory-unflavored-collagen-powder-10-oz',
    price: 12.88,
    originalPrice: 13.88,
    image: '/images/products/82-youtheory-collagen-powder-unflavored-236833-front.jpg',
    gallery: [
      '/images/products/82-youtheory-collagen-powder-unflavored-236833-front.jpg',
      '/images/products/83-youtheory-collagen-powder-unflavored-236833-right-1.jpg',
      '/images/products/84-youtheory-collagen-powder-unflavored-236833-front.jpg',
    ],
    shortDescription: 'Youtheory Unflavored Collagen Powder 10 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Derma E Itch Relief Lotion 8 oz.',
    slug: 'derma-e-itch-relief-lotion-8-oz',
    price: 10.79,
    originalPrice: 11.79,
    image: '/images/products/85-derma-e-itch-relief-lotion-with-chamomile-tea-tree-e-211040-front.jpg',
    gallery: [
      '/images/products/85-derma-e-itch-relief-lotion-with-chamomile-tea-tree-e-211040-front.jpg',
      '/images/products/86-derma-e-itch-relief-lotion-8oz-back-211040-1.jpg',
      '/images/products/87-derma-e-itch-relief-lotion-with-chamomile-tea-tree-e-211040-front.jpg',
    ],
    shortDescription: 'Derma E Itch Relief Lotion 8 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Quantum Super Lysine + Cream for Cold Sores 0.25 oz.',
    slug: 'quantum-super-lysine-cream-for-cold-sores-0-25-oz',
    price: 7.33,
    originalPrice: 7.93,
    image: '/images/products/88-quantum-super-lysine-cream-cold-sores-0-25oz-front-201707.jpeg',
    gallery: [
      '/images/products/88-quantum-super-lysine-cream-cold-sores-0-25oz-front-201707.jpeg',
      '/images/products/89-quantum-super-lysine-cream-cold-sores-0-25oz-angled-201707.jpeg',
      '/images/products/90-quantum-super-lysine-cream-cold-sores-0-25oz-tube-201707.jpeg',
    ],
    shortDescription: 'Quantum Super Lysine + Cream for Cold Sores 0.25 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'NeemAura Naturals Concentrated Neem Cream 2 oz.',
    slug: 'neemaura-naturals-concentrated-neem-cream-2-oz',
    price: 11.39,
    originalPrice: 13.39,
    image: '/images/products/91-neemaura-naturals-body-care-neem-cream-with-aloe-vera-neem-oil-2-29060-front.jpg',
    gallery: [
      '/images/products/91-neemaura-naturals-body-care-neem-cream-with-aloe-vera-neem-oil-2-29060-front.jpg',
      '/images/products/92-neemaura-naturals-body-care-neem-cream-with-aloe-vera-neem-oil-2-29060-left.jpg',
      '/images/products/93-neemaura-naturals-concentrated-neem-cream-2oz-right-29060.jpg',
    ],
    shortDescription: 'NeemAura Naturals Concentrated Neem Cream 2 oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Youtheory Complete Beauty Zero Sugar Watermelon Gummies 60 count',
    slug: 'youtheory-complete-beauty-zero-sugar-watermelon-gummies-60-count',
    price: 21.59,
    originalPrice: 28.59,
    image: '/images/products/94-youtheory-complete-beauty-watermelon-zero-sugar-gummies-60count-front-242519.jpg',
    gallery: [
      '/images/products/94-youtheory-complete-beauty-watermelon-zero-sugar-gummies-60count-front-242519.jpg',
      '/images/products/95-youtheory-complete-beauty-watermelon-zero-sugar-gummies-60count-back-242519.jpg',
      '/images/products/96-youtheory-complete-beauty-watermelon-zero-sugar-gummies-60count-right-242519.jpg',
    ],
    shortDescription: 'Youtheory Complete Beauty Zero Sugar Watermelon Gummies 60 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Natrol Biotin Beauty Tablets 10,000 mcg 100 count',
    slug: 'natrol-biotin-beauty-tablets-10-000-mcg-100-count',
    price: 10.79,
    originalPrice: 12.79,
    image: '/images/products/97-224183-5396-931-biotin-10000mcg-100ct-150cc-label-front-no-ds.jpg',
    gallery: [
      '/images/products/97-224183-5396-931-biotin-10000mcg-100ct-150cc-label-front-no-ds.jpg',
      '/images/products/98-224183-5396-931-biotin-10000mcg-100ct-150cc-label-sfp-1.jpg',
      '/images/products/99-natrol-general-health-biotin-10000-mcg-100-tablets-224183-right-1.jpg',
    ],
    shortDescription: 'Natrol Biotin Beauty Tablets 10,000 mcg 100 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Nature\'s Answer Liquid Beauty Collagen 8 fl. oz.',
    slug: 'nature-s-answer-liquid-beauty-collagen-8-fl-oz',
    price: 23.99,
    originalPrice: 27.99,
    image: '/images/products/100-natures-answer-liquid-beauty-collagen-8floz-front-bottle-240239.jpg',
    gallery: [
      '/images/products/100-natures-answer-liquid-beauty-collagen-8floz-front-bottle-240239.jpg',
      '/images/products/101-natures-answer-liquid-beauty-collagen-8floz-supplement-facts-240239-1.jpg',
      '/images/products/102-natures-answer-liquid-beauty-collagen-8floz-front-box-240239.jpg',
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
    image: '/images/products/103-moso-natural-air-purifying-blue-moso-bag-75-grams-228689-front.jpeg',
    gallery: [
      '/images/products/103-moso-natural-air-purifying-blue-moso-bag-75-grams-228689-front.jpeg',
      '/images/products/104-moso-natural-air-purifying-blue-moso-bag-75-grams-228689-lifestyle.jpeg',
      '/images/products/105-moso-natural-air-purifying-blue-moso-bag-75-grams-228689-front.jpeg',
    ],
    shortDescription: 'Moso Natural Air Purifying Blue Moso Bag for Refrigerator 75 grams • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Attitude Nature+ Technology Green Apple & Basil Bulk Dishwashing Liquid 67.6 fl. oz.',
    slug: 'attitude-nature-technology-green-apple-basil-bulk-dishwashing-liquid-67-6-fl-oz',
    price: 10.65,
    originalPrice: 12.75,
    image: '/images/products/106-attitude-bulk-dishwashing-liquid-green-apple-basil-236730-front-1.jpg',
    gallery: [
      '/images/products/106-attitude-bulk-dishwashing-liquid-green-apple-basil-236730-front-1.jpg',
      '/images/products/1.jpg',
      '/images/products/2.jpg',
    ],
    shortDescription: 'Attitude Nature+ Technology Green Apple & Basil Bulk Dishwashing Liquid 67.6 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Dr. Bronner's Sal Suds All Purpose Cleaner 16 fl. oz.",
    slug: 'dr-bronner-s-sal-suds-all-purpose-cleaner-16-fl-oz',
    price: 7.59,
    originalPrice: 9.59,
    image: '/images/products/109-dr-bronner-sal-suds-222906-front.jpeg',
    gallery: [
      '/images/products/109-dr-bronner-sal-suds-222906-front.jpeg',
      '/images/products/dr.jpg',
      '/images/products/dr2.jpg',
    ],
    shortDescription: "Dr. Bronner's Sal Suds All Purpose Cleaner 16 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Seventh Generation Lemongrass Citrus Disinfecting Wipes 70 count',
    slug: 'seventh-generation-lemongrass-citrus-disinfecting-wipes-70-count',
    price: 7.09,
    originalPrice: 10.09,
    image: '/images/products/112-seventh-generation-household-cleaners-disinfecting-wipes-lemongrass-citrus-70-co.jpg',
    gallery: [
      '/images/products/112-seventh-generation-household-cleaners-disinfecting-wipes-lemongrass-citrus-70-co.jpg',
      '/images/products/113-seventh-generation-lemongrass-citrus-disinfecting-wipes-70count-back-223114-1.jpg',
      '/images/products/114-seventh-generation-household-cleaners-disinfecting-wipes-lemongrass-citrus-70-co.jpg',
    ],
    shortDescription: 'Seventh Generation Lemongrass Citrus Disinfecting Wipes 70 count • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Dr. Bronner's 18-in-1 Pure Castile Baby Unscented Magic Soap 3.4 fl. oz.",
    slug: 'dr-bronner-s-18-in-1-pure-castile-baby-unscented-magic-soap-3-4-fl-oz',
    price: 2.99,
    originalPrice: 3.40,
    image: '/images/products/115-dr-bronners-18-in-1-pure-castile-soaps-3-4floz-baby-unscented-front-241738.jpg',
    gallery: [
      '/images/products/115-dr-bronners-18-in-1-pure-castile-soaps-3-4floz-baby-unscented-front-241738.jpg',
      '/images/products/116-dr-bronners-18-in-1-pure-castile-soaps-3-4floz-baby-unscented-back-241738.jpg',
      '/images/products/117-dr-bronners-18-in-1-pure-castile-soaps-3-4floz-baby-unscented-front-241738.jpg',
    ],
    shortDescription: "Dr. Bronner's 18-in-1 Pure Castile Baby Unscented Magic Soap 3.4 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: "Mrs. Meyer's Clean Day Acorn Spice Multi-Surface Cleaner Spray 16 fl. oz.",
    slug: 'mrs-meyer-s-clean-day-acorn-spice-multi-surface-cleaner-spray-16-fl-oz',
    price: 4.29,
    originalPrice: 7.29,
    image: '/images/products/118-808124113619-mrs-meyers-acorn-spice-multi-surface-cleaner-spray-16floz-front-241.jpg',
    gallery: [
      '/images/products/118-808124113619-mrs-meyers-acorn-spice-multi-surface-cleaner-spray-16floz-front-241.jpg',
      '/images/products/119-808124113619-mrs-meyers-acorn-spice-multi-surface-cleaner-spray-16floz-graphic3-.jpg',
      '/images/products/120-808124113619-mrs-meyers-acorn-spice-multi-surface-cleaner-spray-16floz-back-2418.jpg',
    ],
    shortDescription: "Mrs. Meyer's Clean Day Acorn Spice Multi-Surface Cleaner Spray 16 fl. oz. • Premium quality and aroma.",
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Earth Friendly Products Cedar Toilet Bowl Cleaner 24 fl. oz.',
    slug: 'earth-friendly-products-cedar-toilet-bowl-cleaner-24-fl-oz',
    price: 4.29,
    originalPrice: 5.29,
    image: '/images/products/121-ecos-toilet-cleaner-cedar-211167-front.jpg',
    gallery: [
      '/images/products/121-ecos-toilet-cleaner-cedar-211167-front.jpg',
      '/images/products/122-ecos-cedar-toliet-bowl-cleaner-24floz-back-211167-1.jpg',
      '/images/products/123-ecos-toilet-cleaner-cedar-211167-front.jpg',
    ],
    shortDescription: 'Earth Friendly Products Cedar Toilet Bowl Cleaner 24 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Bad Air Sponge',
    slug: 'bad-air-sponge',
    price: 9.29,
    originalPrice: 10.79,
    image: '/images/products/124-bad-air-sponge-odor-neutralants-bad-air-sponge-223199-front.jpeg',
    gallery: [
      '/images/products/124-bad-air-sponge-odor-neutralants-bad-air-sponge-223199-front.jpeg',
      '/images/products/badair1.jpg',
      '/images/products/badair.jpg',
    ],
    shortDescription: 'Bad Air Sponge • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 32 fl. oz.',
    slug: 'essential-oxygen-food-grade-3-hydrogen-peroxide-32-fl-oz',
    price: 11.59,
    originalPrice: 12.99,
    image: '/images/products/127-essential-oxygen-hydrogen-peroxide-food-grade-3-25-32floz-239803-front.jpg',
    gallery: [
      '/images/products/127-essential-oxygen-hydrogen-peroxide-food-grade-3-25-32floz-239803-front.jpg',
      '/images/products/128-essential-oxygen-food-grade-hydrogen-peroxide-32floz-side-239803-1.jpg',
      '/images/products/129-essential-oxygen-food-grade-hydrogen-peroxide-32floz-side2-239803.jpg',
    ],
    shortDescription: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 32 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Attitude Super Leaves Coconut Oil Amplifying Conditioner 16 fl. oz.',
    slug: 'attitude-super-leaves-coconut-oil-amplifying-conditioner-16-fl-oz',
    price: 10.19,
    originalPrice: 12.99,
    image: '/images/products/130-attitude-super-leaves-curl-amplifying-conditioner-237583-front.jpg',
    gallery: [
      '/images/products/130-attitude-super-leaves-curl-amplifying-conditioner-237583-front.jpg',
      '/images/products/at.webp',
      '/images/products/at2.webp',
    ],
    shortDescription: 'Attitude Super Leaves Coconut Oil Amplifying Conditioner 16 fl. oz. • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
  {
    name: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 8 fl. oz. spray',
    slug: 'essential-oxygen-food-grade-3-hydrogen-peroxide-8-fl-oz-spray',
    price: 5.79,
    originalPrice: 7.79,
    image: '/images/products/131-essential-oxygen-food-grade-hydrogen-peroxide-3-hydrogen-peroxide-spray-8oz-2317.jpg',
    gallery: [
      '/images/products/131-essential-oxygen-food-grade-hydrogen-peroxide-3-hydrogen-peroxide-spray-8oz-2317.jpg',
      '/images/products/132-essential-oxygen-food-grade-hydrogen-peroxide-8floz-spray-side-231799-1.jpg',
      '/images/products/133-essential-oxygen-food-grade-hydrogen-peroxide-8floz-spray-side2-231799.jpg',
    ],
    shortDescription: 'Essential Oxygen Food Grade 3% Hydrogen Peroxide 8 fl. oz. spray • Premium quality and aroma.',
    badge: 'Best Seller',
    stock: 50,
  },
];

const getRandomRating = () => Number((3.6 + Math.random() * 1.1).toFixed(1));
const getSmallReviewCount = () => 1 + Math.floor(Math.random() * 5);

const buildProducts = () => {
  const items = [];
  let nextId = 1;

  categories.forEach((category) => {
    if (category.slug === 'organic-spices') {
      organicSpicesProducts.forEach((item, index) => {
        const rating = getRandomRating();

        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: getSmallReviewCount(),
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
        const rating = getRandomRating();

        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: getSmallReviewCount(),
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
        const rating = getRandomRating();
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: getSmallReviewCount(),
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
        const rating = getRandomRating();
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: getSmallReviewCount(),
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
        const rating = getRandomRating();
        items.push({
          id: nextId++,
          slug: item.slug,
          name: item.name,
          category: category.name,
          categorySlug: category.slug,
          price: Number(item.price.toFixed(2)),
          originalPrice: Number((item.originalPrice ?? item.price).toFixed(2)),
          rating,
          reviewCount: getSmallReviewCount(),
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
      const rating = getRandomRating();

      items.push({
        id: nextId++,
        slug: `${category.slug}-${index + 1}`,
        name,
        category: category.name,
        categorySlug: category.slug,
        price: Number(price.toFixed(2)),
        originalPrice: Number(originalPrice.toFixed(2)),
        rating,
        reviewCount: getSmallReviewCount(),
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
