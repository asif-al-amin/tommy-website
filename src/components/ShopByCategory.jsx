import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Leaf, Apple, Coffee, Sparkles, Home } from 'lucide-react';
import { categories } from '../data/categories';

const categoryIcons = {
  'organic-spices': Leaf,
  'healthy-snacks': Apple,
  'tea-beverages': Coffee,
  'health-beauty': Sparkles,
  'household-needs': Home,
};

const ShopByCategory = () => {
  return (
    <section className="w-full bg-[#fcfbfa] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#12393d] md:text-[44px]">
            Shop By Category
          </h2>
          <p className="mb-6 text-[17px] font-medium text-[#12393d]/60">
            Discover our premium selection — organic, healthy, and natural
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-[3px] w-8 rounded-full bg-[#ef7f22]"></div>
            <Star size={16} className="fill-[#ef7f22] text-[#ef7f22]" />
            <div className="h-[3px] w-8 rounded-full bg-[#ef7f22]"></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12 lg:gap-x-16">
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug] || Leaf;
            const isTeaCategory = category.id === 3;

            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="flex w-[140px] cursor-pointer flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 sm:w-[160px]"
              >
                <div
                  className={`mb-5 flex h-[130px] w-[130px] items-center justify-center rounded-full shadow-sm transition-transform duration-300 sm:h-[150px] sm:w-[150px] ${
                    isTeaCategory ? 'bg-[#e2ebe9]' : 'bg-[#fbebd8]'
                  }`}
                >
                  <Icon
                    size={36}
                    strokeWidth={1.5}
                    className={isTeaCategory ? 'text-[#12393d]' : 'text-[#ef7f22]'}
                  />
                </div>

                <h3 className="mb-1.5 text-lg font-extrabold text-[#12393d] transition-colors hover:text-[#ef7f22]">
                  {category.name}
                </h3>
                <p className="px-2 text-[13px] font-medium leading-tight text-[#12393d]/60">
                  {category.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;