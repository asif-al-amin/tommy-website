import { categories } from './categories';

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
    'Rosemary Hair Oil',
    'Vitamin C Glow Serum',
    'Shea Body Butter',
    'Aloe Daily Gel',
    'Lavender Bath Salts',
    'Organic Lip Balm',
    'Tea Tree Face Wash',
    'Coconut Body Scrub',
    'Argan Hair Serum',
    'Natural Deodorant',
    'Organic Face Mist',
    'Rose Clay Cleanser',
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
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
  ],
  'household-needs': [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1527515545081-5c8f4b4d52b8?auto=format&fit=crop&w=900&q=80',
  ],
};

const buildProducts = () => {
  const items = [];

  categories.forEach((category, categoryIndex) => {
    productNames[category.slug].forEach((name, index) => {
      const price = 12 + categoryIndex * 4 + index * 1.75;
      const originalPrice = price + 4 + (index % 2);

      items.push({
        id: categoryIndex * 10 + index + 1,
        slug: `${category.slug}-${index + 1}`,
        name,
        category: category.name,
        categorySlug: category.slug,
        price: Number(price.toFixed(2)),
        originalPrice: Number(originalPrice.toFixed(2)),
        rating: 4.4 + ((index + categoryIndex) % 5) * 0.1,
        reviewCount: 28 + index * 9,
        featured: index % 3 === 0,
        badge: index % 4 === 0 ? 'Best Seller' : index % 4 === 1 ? 'Organic' : index % 4 === 2 ? 'New' : 'Popular',
        stock: 20 + index * 3,
        description: `Premium ${category.name.toLowerCase()} curated for a healthier lifestyle and daily freshness.`,
        shortDescription: `${category.subtitle} • Freshly packed and ready to enjoy.`,
        image: productImages[category.slug][index % productImages[category.slug].length],
        gallery: productImages[category.slug],
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
