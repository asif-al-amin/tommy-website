import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#eef0ee] bg-white shadow-[0_12px_30px_rgba(18,57,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(18,57,61,0.08)]">
      <Link to={`/product/${product.slug}`} className="block overflow-hidden rounded-t-[28px]">
        <div className="relative overflow-hidden bg-[#ffffff]">
          <div className="flex h-[290px] items-center justify-center bg-[#ffffff] p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          {product.badge && (
            <span className="absolute left-4 top-4 rounded-full bg-[#ef7f22] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
              {product.badge}
            </span>
          )}
          <button
            onClick={handleAddToCart}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#12393d] shadow-sm transition-all hover:scale-110 hover:text-[#ef7f22] hover:bg-[#fff5ee]"
          >
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
          className="mb-3 line-clamp-2 text-xl font-extrabold text-[#12393d] transition-colors hover:text-[#ef7f22]"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          {product.name}
        </Link>

        <p className="mb-4 text-sm leading-relaxed text-[#567175]">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <div className="text-[22px] font-extrabold text-[#12393d]">${product.price}</div>
            {product.originalPrice && (
              <div className="text-sm text-[#8ea1a3] line-through">${product.originalPrice}</div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(e);
            }}
            className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-extrabold text-white transition-all duration-200 hover:shadow-[0_12px_20px_rgba(239,127,34,0.25)] ${
              addedToCart
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#ef7f22] hover:bg-[#df721c]'
            }`}
          >
            <ShoppingCart size={16} strokeWidth={2.5} />
            {addedToCart ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
