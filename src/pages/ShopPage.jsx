import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badges = ['Best Seller', 'Organic', 'New', 'Popular'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = !selectedCategory || product.categorySlug === selectedCategory;
      const badgeMatch = !selectedBadge || product.badge === selectedBadge;
      return categoryMatch && badgeMatch;
    });
  }, [selectedCategory, selectedBadge]);
  return (
    <div className="w-full bg-[#fffdfa] pb-20">
      <section className="border-b border-gray-100 bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            Home / <span className="font-bold text-[#12393d]">Shop</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">All Products</h1>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#12393d]">
            Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                selectedCategory === null
                  ? 'bg-[#ef7f22] text-white'
                  : 'bg-white text-[#12393d] ring-1 ring-[#e6eceb] hover:text-[#ef7f22]'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  selectedCategory === category.slug
                    ? 'bg-[#ef7f22] text-white'
                    : 'bg-white text-[#12393d] ring-1 ring-[#e6eceb] hover:text-[#ef7f22]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Badge/Type Filter */}
        <div className="mb-8">
          <h3 className="mb-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#12393d]">
            Product Type
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedBadge(null)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                selectedBadge === null
                  ? 'bg-[#ef7f22] text-white'
                  : 'bg-white text-[#12393d] ring-1 ring-[#e6eceb] hover:text-[#ef7f22]'
              }`}
            >
              All Types
            </button>
            {badges.map((badge) => (
              <button
                key={badge}
                onClick={() => setSelectedBadge(badge)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                  selectedBadge === badge
                    ? 'bg-[#ef7f22] text-white'
                    : 'bg-white text-[#12393d] ring-1 ring-[#e6eceb] hover:text-[#ef7f22]'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-xl font-bold text-[#12393d] mb-4">No products found</p>
            <p className="text-[#567175] mb-8">Try adjusting your filters</p>
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedBadge(null);
              }}
              className="rounded-lg bg-[#ef7f22] px-6 py-3 font-bold text-white hover:bg-orange-600 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ShopPage;
