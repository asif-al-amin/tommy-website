import React from 'react';
import { Link } from 'react-router-dom';

const PromoBanners = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-10 bg-[#fffdfa] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* 🟢 Banner 1: AutetMart Club (Olive Green) */}
          <div 
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 group min-h-[280px] sm:min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: '#98ad3b' }} // Exact Olive Green
          >
            {/* Background Decorative Patterns (SVG) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20,20 Q40,60 100,0 T250,50" stroke="#000" strokeWidth="25" fill="none" className="opacity-30" />
                <circle cx="85%" cy="80%" r="120" fill="#000" className="opacity-20" />
              </svg>
            </div>

            {/* Content Area - max-w-[80%] ensures text doesn't touch the right edge */}
            <div className="relative z-10 w-full max-w-[85%] sm:max-w-[70%]">
              
              <div 
                className="text-[#f69d3c] text-[13px] sm:text-[14px] mb-3 tracking-widest uppercase font-black"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                ★ Member Exclusive
              </div>
              
              {/* Back to FREDOKA for the thick, bubbly look */}
              <h2 
                className="text-white text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.1] mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Join the<br />AutetMart Club
              </h2>
              
              <p 
                className="text-white/95 text-[15px] sm:text-[16px] mb-6 md:mb-8 font-bold"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Get 10% OFF your first order!
              </p>

              <Link
                to="/join-now"
                className="inline-block bg-[#f0a04b] text-white px-7 py-3 rounded-full text-[15px] sm:text-[16px] font-extrabold hover:bg-[#df8d37] transition-colors shadow-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Join Now
              </Link>

            </div>
          </div>

          {/* 🟢 Banner 2: Autumn Harvest Sale (Mint Green) */}
          <div 
            className="relative overflow-hidden rounded-[28px] p-8 sm:p-10 lg:p-12 shadow-sm hover:shadow-lg transition-all duration-300 group min-h-[280px] sm:min-h-[320px] flex flex-col justify-center"
            style={{ backgroundColor: '#6ca88d' }} // Exact Mint Green
          >
            {/* Background Decorative Patterns (SVG Starburst effect) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{ backgroundImage: 'repeating-radial-gradient(circle at right center, transparent 0, transparent 20px, #ffffff 20px, #ffffff 40px)' }}>
            </div>
            {/* Cute Stars */}
            <div className="absolute right-10 bottom-10 text-white opacity-40 text-4xl pointer-events-none group-hover:rotate-45 transition-transform duration-700">✦</div>
            <div className="absolute right-32 top-10 text-white opacity-30 text-2xl pointer-events-none group-hover:-rotate-45 transition-transform duration-700">✦</div>

            {/* Content Area */}
            <div className="relative z-10 w-full max-w-[85%] sm:max-w-[70%] mt-4 sm:mt-6">
              
              {/* Back to FREDOKA for the thick, bubbly look */}
              <h2 
                className="text-white text-[32px] sm:text-[40px] lg:text-[44px] font-semibold leading-[1.1] mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Autumn Harvest<br />Sale
              </h2>
              
              <p 
                className="text-white/95 text-[15px] sm:text-[16px] mb-6 md:mb-8 font-bold"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Up to 30% off premium organic spices
              </p>

              <Link
                to="/shop"
                className="inline-block bg-[#184e55] text-white px-7 py-3 rounded-full text-[15px] sm:text-[16px] font-extrabold hover:bg-[#113a40] transition-colors shadow-sm"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Shop Sale
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromoBanners;