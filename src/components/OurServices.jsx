import React from 'react';
import { Truck, Star, Headphones, Lock, Star as StarIcon } from 'lucide-react';

const OurServices = () => {
  // গ্রোসারি থিম অনুযায়ী ৪টি সার্ভিস
  const services = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Free shipping over $50 with tracked delivery nationwide.",
      Icon: Truck,
    },
    {
      id: 2,
      title: "Premium Quality",
      description: "Every product is sourced for purity, freshness, and safety.",
      Icon: Star,
    },
    {
      id: 3,
      title: "Grocery Expert Help",
      description: "Our team helps you pick the right organic items for your family.",
      Icon: Headphones,
    },
    {
      id: 4,
      title: "Secure Checkout",
      description: "Safe payments and easy returns within 30 days.",
      Icon: Lock,
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-10 bg-[#fffdfa] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            Section Header (Title, Subtitle & Divider)
        ========================================= */}
        <div className="text-center mb-14">
          <h2 
            className="text-[#12393d] text-[36px] md:text-[44px] tracking-wide mb-2"
            style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
          >
            Our Services
          </h2>
          
          <p 
            className="text-[#698487] text-[16px] md:text-[17px] mb-5"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Everything you need for a happy, healthy lifestyle
          </p>

          {/* Divider with Star (Exact match) */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[2.5px] bg-[#ef7f22] rounded-full"></div>
            <StarIcon size={14} className="text-[#ef7f22] fill-[#ef7f22]" />
            <div className="w-8 h-[2.5px] bg-[#ef7f22] rounded-full"></div>
          </div>
        </div>

        {/* =========================================
            Services Grid (4 Columns)
        ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center border border-[#e8ebeb] shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group"
            >
              
              {/* Icon Box */}
              <div className="w-[72px] h-[72px] rounded-[20px] bg-[#fff6ef] flex items-center justify-center text-[#ef7f22] mb-6 group-hover:scale-110 transition-transform duration-500">
                {/* strokeWidth={1.5} দিয়ে আইকনগুলোকে অরিজিনাল সাইটের মতো চিকন করা হয়েছে */}
                <service.Icon size={32} strokeWidth={1.5} />
              </div>

              {/* Service Title */}
              <h3 
                className="text-[#12393d] text-[20px] md:text-[22px] mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                {service.title}
              </h3>

              {/* Service Description (Exact #698487 Color) */}
              <p 
                className="text-[#698487] text-[15px] md:text-[16px] leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
              >
                {service.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;