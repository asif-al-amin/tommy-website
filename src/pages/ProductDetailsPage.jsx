import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import ProductGallery from '../components/ProductGallery';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-[#12393d]">Product not found</h1>
        <Link to="/" className="mt-6 inline-block rounded-full bg-[#ef7f22] px-6 py-3 font-bold text-white">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fffdfa] pb-20">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <p className="mb-6 text-sm text-[#84a9ac]">
          Home / {product.category} / <span className="font-bold text-[#12393d]">{product.name}</span>
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.gallery} title={product.name} />

          <div className="flex flex-col justify-center">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#ef7f22]">
              {product.badge}
            </p>
            <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">{product.name}</h1>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-3xl font-extrabold text-[#12393d]">${product.price}</span>
              <span className="text-lg text-[#8ea1a3] line-through">${product.originalPrice}</span>
              <span className="rounded-full bg-[#eaf7f0] px-3 py-1 text-xs font-bold text-[#0d8a4d]">
                {product.rating.toFixed(1)} rating
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-[#567175]">{product.description}</p>

            <div className="mt-6 flex flex-wrap items-end gap-4">
              <div>
                <p className="mb-2 text-sm font-bold text-[#12393d]">Quantity</p>
                <div className="flex items-center gap-3 border border-[#e5eae8] rounded-lg p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex h-8 w-8 items-center justify-center text-[#12393d] hover:bg-[#f5f8f7] rounded"
                  >
                    <Minus size={18} strokeWidth={2} />
                  </button>
                  <span className="w-6 text-center font-bold text-[#12393d]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex h-8 w-8 items-center justify-center text-[#12393d] hover:bg-[#f5f8f7] rounded"
                  >
                    <Plus size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex items-center gap-2 rounded-full px-7 py-3 text-base font-bold text-white transition-all ${
                  addedToCart
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-[#ef7f22] hover:bg-[#df721c]'
                }`}
              >
                <ShoppingCart size={20} strokeWidth={2} />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <Link
                to={`/category/${product.categorySlug}`}
                className="rounded-full border border-[#dfe8e7] bg-white px-7 py-3 text-base font-bold text-[#12393d] transition-colors hover:text-[#ef7f22]"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="mt-8 rounded-[24px] border border-[#edf1f0] bg-white p-5">
              <h3 className="mb-3 text-xl font-extrabold text-[#12393d]">Key Features</h3>
              <ul className="space-y-2 text-[#567175]">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#ef7f22]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
