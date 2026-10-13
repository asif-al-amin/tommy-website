export const categories = [
  {
    id: 1,
    slug: 'organic-spices',
    name: 'Organic Spices',
    subtitle: 'Pure & natural flavors',
    description: 'Aromatic, premium organic spices and seasonings for vibrant cooking.',
    accent: '#ef7f22',
  },
  {
    id: 2,
    slug: 'healthy-snacks',
    name: 'Healthy Snacks',
    subtitle: 'Ginger chews & more',
    description: 'Wholesome snacks made for clean energy and everyday wellness.',
    accent: '#ef7f22',
  },
  {
    id: 3,
    slug: 'tea-beverages',
    name: 'Tea & Beverages',
    subtitle: 'Relax and take a sip',
    description: 'Fresh brews, infused blends, and wellness drinks for calm moments.',
    accent: '#12393d',
  },
  {
    id: 4,
    slug: 'health-beauty',
    name: 'Health & Beauty',
    subtitle: 'Care for your body',
    description: 'Natural personal care essentials that nourish body and skin.',
    accent: '#ef7f22',
  },
  {
    id: 5,
    slug: 'household-needs',
    name: 'Household Needs',
    subtitle: 'Clean & safe home',
    description: 'Gentle household essentials for a safer, fresher home.',
    accent: '#ef7f22',
  },
];

export const categoryLookup = categories.reduce((acc, category) => {
  acc[category.slug] = category;
  return acc;
}, {});
