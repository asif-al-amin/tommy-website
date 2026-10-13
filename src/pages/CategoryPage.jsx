import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, categoryLookup } from '../data/categories';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = categoryLookup[categorySlug] || categories[0];
  const products = getProductsByCategory(category.slug);

  return (
    <div className="w-full bg-[#fffdfa] pb-20">
      <section className="border-b border-gray-100 bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            Home / <span className="font-bold text-[#12393d]">{category.name}</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#567175]">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((item) => (
            <Link
              key={item.slug}
              to={`/category/${item.slug}`}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                item.slug === category.slug
                  ? 'bg-[#ef7f22] text-white'
                  : 'bg-white text-[#12393d] ring-1 ring-[#e6eceb] hover:text-[#ef7f22]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
