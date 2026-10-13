import React from 'react';
import { Phone, Check } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-10 bg-[#fffdfa] font-sans overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            1. Contact Info Bar (Top)
        ========================================= */}
        <div className="w-full max-w-[950px] mx-auto bg-[#12393d] rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-32 shadow-lg mb-16 md:mb-24 transition-transform hover:scale-[1.02] duration-500 cursor-pointer">
          
          <a href="tel:+19412748287" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="w-[48px] h-[48px] rounded-full bg-[#1b4e53] flex items-center justify-center text-[#ef7f22]">
              <Phone size={22} strokeWidth={2.5} fill="currentColor" />
            </div>
            <div className="text-left">
              <p 
                className="text-[#84a9ac] text-[11px] md:text-[12px] tracking-widest uppercase mb-1"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
              >
                Call Us Anytime
              </p>
              <p 
                className="text-white text-[20px] md:text-[24px] leading-none"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                +1 941-274-8287
              </p>
            </div>
          </a>

          <div className="hidden md:block w-[1px] h-12 bg-white/15"></div>

          <a href="mailto:kevin@autetinvestments.com" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
            <div className="text-left">
              <p 
                className="text-[#84a9ac] text-[11px] md:text-[12px] tracking-widest uppercase mb-1"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
              >
                Email Support
              </p>
              <p 
                className="text-white text-[20px] md:text-[24px] leading-none"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                kevin@autetinvestments.com
              </p>
            </div>
          </a>

        </div>


        {/* =========================================
            2. Why Choose Us Banner - WITH ANIMATION
        ========================================= */}
        {/* ম্যাজিক: 'group' এবং হোভার ইফেক্ট (hover:-translate-y-2) অ্যাড করা হয়েছে পুরো ব্যানারের জন্য */}
        <div className="relative w-full rounded-[32px] shadow-2xl mt-8 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(234,40,98,0.2)]">
          
          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 flex flex-col lg:flex-row rounded-[32px] overflow-hidden z-0">
            {/* Diagonal Gradient */}
            <div 
              className="order-1 lg:order-2 w-full lg:w-[45%] h-[320px] sm:h-[380px] lg:h-full"
              style={{ background: 'linear-gradient(105deg, #242944 0%, #242944 45%, #ea2862 45%, #ea2862 100%)' }}
            ></div>
            {/* Dark Teal */}
            <div className="order-2 lg:order-1 w-full lg:w-[55%] flex-grow bg-[#12393d]"></div>
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
            
            {/* --- IMAGE CONTAINER --- */}
            <div className="order-1 lg:order-2 w-full lg:w-[45%] h-[320px] sm:h-[380px] lg:h-auto relative flex justify-center lg:justify-end items-end">
              {/* 
                 ম্যাজিক: group-hover:scale-[1.08] অ্যাড করা হয়েছে।
                 মাউস ব্যানারে নিলেই ছবিটি স্মুথলি (duration-700) বড় হয়ে পপ করবে! 
              */}
              <img 
                src="/images/why-choose.png" 
                alt="Organic Grocery Delivery" 
                className="absolute bottom-0 lg:right-10 w-auto h-[115%] lg:h-[110%] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] pointer-events-none origin-bottom transition-transform duration-700 ease-out group-hover:scale-[1.08]"
              />
            </div>

            {/* --- TEXT CONTAINER --- */}
            <div className="order-2 lg:order-1 w-full lg:w-[55%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              
              <div 
                className="text-[#ef7f22] text-[13px] md:text-[14px] mb-3 tracking-widest uppercase"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
              >
                ★ Why Choose Us
              </div>
              
              <h2 
                className="text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.1] mb-8"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                Reviving Health Through Every Mealtime
              </h2>

              <ul className="space-y-4 mb-10">
                {[
                  "100% certified organic selection",
                  "Free shipping on orders over $50",
                  "30-day hassle-free returns",
                  "Eco-friendly packaging options",
                  "24/7 dedicated support team"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-2 cursor-default">
                    <div className="min-w-[22px] w-[22px] h-[22px] md:min-w-[24px] md:w-6 md:h-6 rounded-full bg-[#ef7f22] flex items-center justify-center text-white">
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span 
                      className="text-white text-[15px] md:text-[16px]"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className="bg-[#ef7f22] text-white px-8 py-3.5 rounded-full text-[15px] md:text-[16px] hover:bg-[#e0701c] hover:-translate-y-1 transition-all shadow-lg w-max"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
              >
                Learn More About Us
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;