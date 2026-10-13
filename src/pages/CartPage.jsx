import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getSubtotal } = useCart();

  const subtotal = getSubtotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="w-full bg-[#fffdfa] min-h-screen py-16 lg:py-20">
        <section className="border-b border-gray-100 bg-white px-4 py-8 sm:px-6 lg:px-10 mb-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-sm text-[#84a9ac]">
              Home / <span className="font-bold text-[#12393d]">Shopping Cart</span>
            </p>
            <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
              Your Shopping Cart
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 py-12">
          <div className="text-center">
            <div className="mb-6 text-6xl">🛒</div>
            <h2 className="mb-2 text-2xl font-extrabold text-[#12393d]">Your cart is empty</h2>
            <p className="mb-8 text-[#567175]">Add some products to get started!</p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-lg bg-[#ef7f22] px-6 py-3 font-bold text-white transition-all hover:bg-orange-600"
            >
              Continue Shopping <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fffdfa] min-h-screen py-16 lg:py-20">
      {/* Header */}
      <section className="border-b border-gray-100 bg-white px-4 py-8 sm:px-6 lg:px-10 mb-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            Home / <span className="font-bold text-[#12393d]">Shopping Cart</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
            Your Shopping Cart
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#567175]">
            Review your items and proceed to checkout
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-[20px] border border-[#edf0ee] bg-white p-6 shadow-sm"
                >
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.slug}`}
                    className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f8f7]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.slug}`}
                        className="text-lg font-bold text-[#12393d] transition-colors hover:text-[#ef7f22]"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-[#567175]">{item.category}</p>
                      <p className="mt-2 text-2xl font-extrabold text-[#12393d]">
                        ${item.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5eae8] text-[#12393d] transition-all hover:bg-[#f5f8f7]"
                      >
                        <Minus size={16} strokeWidth={2.5} />
                      </button>
                      <span className="w-8 text-center font-bold text-[#12393d]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5eae8] text-[#12393d] transition-all hover:bg-[#f5f8f7]"
                      >
                        <Plus size={16} strokeWidth={2.5} />
                      </button>
                      <div className="ml-auto">
                        <p className="text-sm text-[#567175] mb-1">Subtotal</p>
                        <p className="text-xl font-extrabold text-[#12393d]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[#ef7f22] transition-all hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={20} strokeWidth={2} />
                  </button>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-8">
              <Link
                to="/shop"
                className="text-[#ef7f22] font-bold hover:text-orange-600 transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-[24px] border border-[#edf0ee] bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-extrabold text-[#12393d]">Order Summary</h3>

            <div className="space-y-4 mb-6 pb-6 border-b border-[#edf0ee]">
              <div className="flex justify-between text-[#567175]">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#567175]">
                <span>Shipping</span>
                <span className="font-bold text-[#12393d]">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-sm text-[#12393d] bg-[#f5f8f7] p-2 rounded">
                  ✓ Free shipping on orders over $50
                </p>
              )}
              <div className="flex justify-between text-[#567175]">
                <span>Tax (10%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6 flex justify-between">
              <span className="text-lg font-extrabold text-[#12393d]">Total</span>
              <span className="text-2xl font-extrabold text-[#ef7f22]">
                ${total.toFixed(2)}
              </span>
            </div>

            <Link
              to="/checkout"
              className="w-full rounded-lg bg-[#ef7f22] py-4 text-center font-extrabold text-white transition-all hover:bg-orange-600 shadow-sm block"
            >
              Proceed to Checkout
            </Link>

            <p className="mt-4 text-center text-sm text-[#567175]">
              Secure checkout powered by PayPal
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
