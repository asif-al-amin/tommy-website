import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      
      {/* =========================================
          1. Page Header Section
      ========================================= */}
      <section className="w-full pt-16 pb-12 px-4 sm:px-6 lg:px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <p 
            className="text-[#84a9ac] text-[14px] mb-6 flex justify-center"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="hover:text-[#12393d] transition-colors cursor-pointer">Home</span> <span className="mx-2">/</span> <span className="text-[#12393d] font-bold">About Us</span>
          </p>
          
          <h1 
            className="text-[#12393d] text-[42px] md:text-[56px] leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            Our Story
          </h1>
          
          <p 
            className="text-[#698487] text-[16px] md:text-[18px] max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Empowering healthy lifestyles through premium, responsibly sourced organic groceries and natural pantry staples.
          </p>
        </div>
      </section>

      {/* =========================================
          2. The Story Section (Text + Image)
      ========================================= */}
      <section className="w-full pt-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div 
              className="text-[#ef7f22] text-[14px] mb-3 tracking-widest uppercase"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
            >
              ★ Who We Are
            </div>
            
            <h2 
              className="text-[#12393d] text-[34px] md:text-[42px] leading-[1.1] mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Real Food for Real Families
            </h2>
            
            <div 
              className="space-y-5 text-[#698487] text-[16px] md:text-[17px] leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              <p>
                Welcome to <strong className="text-[#12393d]">AutetMart</strong>, a proud brand operated by <strong className="text-[#12393d]">Autet Investments LLC</strong>. Based in the heart of Bradenton, Florida, we started with a simple yet powerful mission: to make premium, organic, and ethically sourced food accessible to every household in America.
              </p>
              <p>
                We believe that what you put into your body matters. That’s why we partner with certified organic farmers and trusted suppliers who share our strict standards for quality and sustainability. From our rich Ceylon cinnamon to our daily wellness snacks, every product is hand-picked to ensure it meets the highest safety and nutritional guidelines.
              </p>
              <p>
                We aren't just an online grocery store; we are your partners in cultivating a healthier, happier lifestyle. Our dedicated team works tirelessly to bring farm-fresh quality straight to your doorstep, backed by customer service that treats you like family.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80" 
                alt="Organic Fresh Produce" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#12393d]/10"></div>
            </div>
            
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[24px] shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
              <p className="text-[#12393d] text-[32px] font-extrabold leading-none" style={{ fontFamily: "'Fredoka', sans-serif" }}>100%</p>
              <p className="text-[#ef7f22] text-[14px] font-bold tracking-widest uppercase" style={{ fontFamily: "'Nunito', sans-serif" }}>Organic Focus</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. Core Values Section (3 Columns)
      ========================================= */}
      <section className="w-full pt-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 
              className="text-[#12393d] text-[32px] md:text-[40px] mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Our Core Values
            </h2>
            <p className="text-[#698487] text-[16px] md:text-[18px] max-w-2xl mx-auto font-semibold">
              The principles that guide every decision we make at Autet Investments LLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-[#f8f9f9] p-10 rounded-[32px] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-[#fff6ef] rounded-full flex items-center justify-center text-[#ef7f22] mb-6">
                <Leaf size={32} strokeWidth={2} />
              </div>
              <h3 className="text-[#12393d] text-[22px] mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Uncompromising Quality</h3>
              <p className="text-[#698487] text-[15.5px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                We rigorously vet every product. If it doesn't meet our strict organic and natural standards, it doesn't make it to our store.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#f8f9f9] p-10 rounded-[32px] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-[#e8f5f1] rounded-full flex items-center justify-center text-[#12393d] mb-6">
                <ShieldCheck size={32} strokeWidth={2} />
              </div>
              <h3 className="text-[#12393d] text-[22px] mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Transparency & Trust</h3>
              <p className="text-[#698487] text-[15.5px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                We believe you have the right to know exactly what’s in your food and where it comes from. No hidden ingredients.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#f8f9f9] p-10 rounded-[32px] text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-[#fff6ef] rounded-full flex items-center justify-center text-[#ef7f22] mb-6">
                <HeartHandshake size={32} strokeWidth={2} />
              </div>
              <h3 className="text-[#12393d] text-[22px] mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Customer First</h3>
              <p className="text-[#698487] text-[15.5px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                Your satisfaction is our success. Our dedicated support team is always ready to ensure your shopping experience is flawless.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. Contact / Location Summary
      ========================================= */}
      <section className="w-full pt-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-[#12393d] rounded-[32px] p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10">
            <div className="w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center text-[#ef7f22] mb-6">
              <MapPin size={28} strokeWidth={2.5} />
            </div>
            
            <h2 
              className="text-white text-[28px] md:text-[36px] mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Proudly Based in Florida
            </h2>
            
            <p 
              className="text-[#84a9ac] text-[16px] md:text-[18px] max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Autet Investments LLC is registered and operates out of Bradenton, FL. We ship nationwide across the US to bring health straight to your table.
            </p>

            <div className="inline-block bg-white text-[#12393d] px-8 py-3.5 rounded-full font-bold shadow-lg" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>
              3312 37th St W, Bradenton, FL 34205
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
