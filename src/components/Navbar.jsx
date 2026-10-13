import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { categories } from '../data/categories';
import { useCart } from '../context/CartContext';

const categoryItems = categories.map((category) => ({
  name: category.name,
  slug: category.slug,
}));

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [user, setUser] = useState(null);
  const { getTotalItems } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <header className="w-full font-sans relative">
      <div className="bg-[#12393d] text-white py-2.5 px-4 md:px-6 flex justify-between items-center tracking-wide text-[11px] sm:text-xs md:text-sm">
        <div className="font-medium">
          ★ Free shipping on orders over $50 <span className="hidden sm:inline">• 30-day returns</span>
        </div>

        <div className="flex space-x-4 sm:space-x-6 text-gray-200">
          <a href="#" className="hover:text-white transition">Track Order</a>
          <Link to="/faq" className="hidden sm:inline hover:text-white transition">Help Center</Link>
          {user ? (
            <button onClick={handleSignOut} className="hover:text-white transition">Sign Out</button>
          ) : (
            <Link to="/auth" state={{ mode: 'signin' }} className="hover:text-white transition">Sign In</Link>
          )}
        </div>
      </div>

      <nav className="bg-white px-4 md:px-6 lg:px-12 py-4 md:py-5 flex justify-between items-center shadow-sm transition-all duration-300 relative z-40">
        <Link to="/" className="flex-shrink-0 cursor-pointer">
          <span className="text-2xl md:text-[28px] font-extrabold text-[#12393d] tracking-tight" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Autet<span className="text-[#ef7f22]">Mart</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-bold text-[16px] text-[#12393d]">
          <div
            className="relative"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsCategoryOpen((prev) => !prev)}
              className="flex items-center gap-1.5 hover:text-[#ef7f22] transition-colors focus:outline-none"
            >
              Categories
              <ChevronDown
                size={18}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-72 bg-white rounded-[22px] border border-[#edf1f0] shadow-[0_18px_45px_rgba(18,57,61,0.12)] overflow-hidden transition-all duration-250 ${
                isCategoryOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="absolute -top-2 left-8 h-4 w-4 rotate-45 border-l border-t border-[#edf1f0] bg-white"></div>
              <div className="py-3">
                {categoryItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/category/${item.slug}`}
                    className="block px-5 py-3 text-[#12393d] text-[15px] font-semibold hover:text-[#ef7f22] hover:bg-[#fff5ee] transition-all duration-200"
                    onClick={() => setIsCategoryOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/shop" className="hover:text-[#ef7f22] transition-colors">Shop</Link>
          <Link to="/shop" className="text-[#ef7f22] hover:text-orange-600 transition-colors">Deals</Link>
          <Link to="/blog" className="hover:text-[#ef7f22] transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-[#ef7f22] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-5 lg:space-x-7 text-[#12393d]">
          <button className="hover:text-[#ef7f22] transition-colors">
            <Search className="w-[24px] h-[24px]" strokeWidth={2} />
          </button>

          <button className="hover:text-[#ef7f22] transition-colors hidden sm:block">
            <Heart className="w-[24px] h-[24px]" strokeWidth={2} />
          </button>

          <button className="relative hover:text-[#ef7f22] transition-colors group">
            <Link to="/cart" className="flex items-center">
              <ShoppingCart className="w-[24px] h-[24px]" strokeWidth={2} />
              <span className="absolute -top-2 -right-2.5 bg-[#ef7f22] text-white text-[11px] font-extrabold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                {getTotalItems()}
              </span>
            </Link>
          </button>

          <button 
            className="md:hidden hover:text-[#ef7f22] transition-colors pl-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7 text-[#12393d]" strokeWidth={2} />
            ) : (
              <Menu className="w-7 h-7 text-[#12393d]" strokeWidth={2} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f8f9f8] shadow-xl border-t border-gray-100 flex flex-col md:hidden px-5 py-5 h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-4 text-[18px] font-bold text-[#12393d]">
              <button
                type="button"
                onClick={() => setIsMobileCategoryOpen((prev) => !prev)}
                className="flex items-center justify-between w-full text-left text-[22px] font-extrabold text-[#12393d] hover:text-[#ef7f22] transition-colors"
              >
                <span>Categories</span>
                <ChevronDown
                  size={22}
                  strokeWidth={2.4}
                  className={`transition-transform duration-200 ${isMobileCategoryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isMobileCategoryOpen && (
                <div className="pl-3 border-l border-[#dfe8e7] space-y-3 pt-1 pb-1">
                  {categoryItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/category/${item.slug}`}
                      className="block text-[19px] font-medium text-[#12393d] hover:text-[#ef7f22] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link to="/shop" className="text-[22px] font-extrabold hover:text-[#ef7f22] transition-colors pt-1">Shop</Link>
              <a href="#" className="text-[22px] font-extrabold text-[#ef7f22]">Deals</a>
              <Link to="/blog" className="text-[22px] font-extrabold hover:text-[#ef7f22] transition-colors">Blog</Link>
              <Link to="/contact" className="text-[22px] font-extrabold hover:text-[#ef7f22] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="flex flex-col space-y-5 text-[18px] font-extrabold text-[#12393d]">
              {user ? (
                <button onClick={handleSignOut} className="text-[22px] font-extrabold hover:text-[#ef7f22] transition-colors text-left">Sign Out</button>
              ) : (
                <>
                  <Link to="/auth" state={{ mode: 'signin' }} className="text-[22px] font-extrabold hover:text-[#ef7f22] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
                  <Link to="/auth" state={{ mode: 'signup' }} className="w-full inline-block bg-[#ef7f22] text-white py-4 rounded-[18px] text-center text-[20px] font-extrabold hover:bg-orange-600 transition-colors shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;