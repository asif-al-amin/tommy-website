import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowRight, Star } from 'lucide-react';
import { products } from '../data/products';

const BestSelling = () => {
  const topProducts = useMemo(() => {
    return [...products]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, []);

  return (
    <section className="w-full bg-[#fffdfa] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2
              className="mb-2 text-[42px] leading-none tracking-tight text-[#12393d] md:text-[52px]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 700, letterSpacing: '-0.02em' }}
            >
              Best Selling
            </h2>
            <p
              className="text-[16px] text-[#728d90] md:text-[18px]"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
            >
              Top picks loved by families alike
            </p>
          </div>

          <Link
            to="/shop"
            className="flex items-center gap-1 text-[16px] font-extrabold text-[#ef7f22] transition-all hover:gap-2"
          >
            View All <ArrowRight size={20} strokeWidth={3} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#eef0ee] bg-white shadow-[0_12px_30px_rgba(18,57,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(18,57,61,0.08)]"
            >
              <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-t-[28px]">
                <div className="relative overflow-hidden bg-[#f8f3ee]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#ef7f22] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                    {product.badge}
                  </span>
                  <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#12393d] shadow-sm transition-all hover:scale-110 hover:text-[#ef7f22]">
                    <Heart size={18} strokeWidth={2} />
                  </button>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#84a9ac]">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.slug}`}
                  className="mb-3 text-xl font-extrabold text-[#12393d] transition-colors hover:text-[#ef7f22]"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {product.name}
                </Link>

                <div className="mb-4 flex items-center gap-1">
                  {[...Array(Math.round(product.rating))].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#ef7f22] text-[#ef7f22]" />
                  ))}
                  <span className="ml-1 text-[12px] font-bold text-[#728d90]">({product.reviewCount})</span>
                </div>

                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[22px] font-extrabold text-[#12393d]">${product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-[#8ea1a3] line-through">${product.originalPrice}</div>
                    )}
                  </div>

                  <Link
                    to={`/product/${product.slug}`}
                    className="flex items-center gap-2 rounded-full bg-[#ef7f22] px-4 py-2.5 text-sm font-extrabold text-white transition-all duration-200 hover:bg-[#df721c] hover:shadow-[0_12px_20px_rgba(239,127,34,0.25)]"
                  >
                    <ShoppingCart size={17} strokeWidth={2.5} />
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;