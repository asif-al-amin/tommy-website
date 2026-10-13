import React from 'react';
import { Clock, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-16">
      
      {/* =========================================
          1. Hero Section (Dark Teal Background)
      ========================================= */}
      <section className="w-full bg-[#12393d] pt-12 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <p 
            className="text-[#84a9ac] text-[14px] mb-4 hover:text-white transition-colors cursor-pointer w-max"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Home / <span className="text-white font-bold">Contact Us</span>
          </p>
          
          {/* Main Title */}
          <h1 
            className="text-white text-[42px] md:text-[54px] leading-tight mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            Contact Us
          </h1>
          
          {/* Subtitle (Grocery Context) */}
          <p 
            className="text-[#84a9ac] text-[16px] md:text-[18px] max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 500 }}
          >
            Questions about orders, organic products, or our sourcing? Our customer support team is here to help.
          </p>
        </div>
      </section>

      {/* =========================================
          2. Main Contact Area (Left Info + Right Form)
      ========================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* ----- Left Column: Contact Info ----- */}
          <div className="w-full lg:w-5/12 pt-8">
            
            {/* Response Badge */}
            <div 
              className="inline-flex items-center gap-2 bg-[#fff6ef] text-[#ef7f22] px-4 py-2 rounded-full text-[13px] mb-8 shadow-sm"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
            >
              <Clock size={16} strokeWidth={2.5} />
              We respond within 24 hours
            </div>

            <h2 
              className="text-[#12393d] text-[32px] md:text-[36px] mb-8"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Get In Touch
            </h2>

            {/* Info Blocks (Client's REAL Data) */}
            <div className="space-y-6">
              <div>
                <p className="text-[#ef7f22] text-[12px] uppercase tracking-widest font-black mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Email</p>
                <p className="text-[#12393d] text-[18px] font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  kevin@autetinvestments.com
                </p>
              </div>

              <div>
                <p className="text-[#ef7f22] text-[12px] uppercase tracking-widest font-black mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Phone</p>
                <p className="text-[#12393d] text-[18px] font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  +1 941-812-2405
                </p>
              </div>

              <div>
                <p className="text-[#ef7f22] text-[12px] uppercase tracking-widest font-black mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Hours</p>
                <p className="text-[#12393d] text-[18px] font-bold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Mon – Sat, 9am – 6pm
                </p>
              </div>

              <div>
                <p className="text-[#ef7f22] text-[12px] uppercase tracking-widest font-black mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Address</p>
                <p className="text-[#12393d] text-[18px] font-bold leading-relaxed max-w-[280px]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  3312 37th St W, Bradenton, FL, United States, 34205
                </p>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="mt-10 p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm w-max">
              <p className="text-[#12393d] text-[16px] font-extrabold mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="text-[#ef7f22] hover:text-[#d66a15] transition-colors flex items-center gap-2 font-bold text-[15px]">
                  <Globe size={20} strokeWidth={2.5} /> Website
                </a>
                <span className="text-gray-300">|</span>
                <a href="#" className="text-[#ef7f22] hover:text-[#d66a15] transition-colors flex items-center gap-2 font-bold text-[15px]">
                  <MessageCircle size={20} strokeWidth={2.5} /> Chat
                </a>
              </div>
            </div>

          </div>

          {/* ----- Right Column: Contact Form ----- */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-50">
              
              <h3 
                className="text-[#12393d] text-[24px] md:text-[28px] mb-8"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-5 py-4 rounded-[16px] border border-gray-200 bg-transparent text-[16px] focus:outline-none focus:border-[#12393d] focus:ring-1 focus:ring-[#12393d] transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-5 py-4 rounded-[16px] border border-gray-200 bg-transparent text-[16px] focus:outline-none focus:border-[#12393d] focus:ring-1 focus:ring-[#12393d] transition-all placeholder:text-gray-400"
                    style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 bg-transparent text-[16px] focus:outline-none focus:border-[#12393d] focus:ring-1 focus:ring-[#12393d] transition-all placeholder:text-gray-400"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                />
                
                <textarea 
                  placeholder="Your message..." 
                  rows="5"
                  className="w-full px-5 py-4 rounded-[16px] border border-gray-200 bg-transparent text-[16px] focus:outline-none focus:border-[#12393d] focus:ring-1 focus:ring-[#12393d] transition-all placeholder:text-gray-400 resize-none"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                ></textarea>

                <button 
                  type="button"
                  className="bg-[#ef7f22] text-white px-8 py-4 rounded-full text-[16px] hover:bg-[#df721c] transition-all font-extrabold shadow-md w-max"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Send Message
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          3. Bottom Banner (Need Help Faster?)
      ========================================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16">
        <div className="bg-[#12393d] rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <p 
              className="text-[#84a9ac] text-[12px] uppercase tracking-widest font-black mb-2"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Need Help Faster?
            </p>
            <h3 
              className="text-white text-[24px] md:text-[28px] leading-tight"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Call or email us directly — we're happy to help!
            </h3>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="bg-[#ef7f22] text-white px-8 py-4 rounded-full text-[16px] font-extrabold hover:bg-[#e0701c] transition-colors shadow-md whitespace-nowrap"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              +1 941-812-2405
            </button>
            <button 
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-[16px] font-extrabold hover:bg-white/10 transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              kevin@autetinvestments.com
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;