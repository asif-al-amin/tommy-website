import React from 'react';
import { Briefcase, Mail } from 'lucide-react';

const Careers = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      <section className="w-full pt-16 pb-12 px-4 sm:px-6 lg:px-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p 
            className="text-[#84a9ac] text-[14px] mb-6"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="hover:text-[#12393d] transition-colors cursor-pointer">Home</span> <span className="mx-2">/</span> <span className="text-[#12393d] font-bold">Careers</span>
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#fff6ef] flex items-center justify-center text-[#ef7f22]">
              <Briefcase size={22} strokeWidth={2.2} />
            </div>
            <h1
              className="text-[#12393d] text-[36px] md:text-[44px] leading-tight tracking-tight"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Join Our Team
            </h1>
          </div>

          <p className="text-[#698487] text-[16px] max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            At AutetMart (Autet Investments LLC) we value curiosity, care, and craftsmanship. Below are our current openings — we welcome applicants who are passionate about healthy food and great customer experiences.
          </p>
        </div>
      </section>

      <section className="w-full pt-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[24px] shadow-sm border border-gray-50">

          <div className="space-y-8">
            <div>
              <h2 className="text-[#12393d] text-[20px] mb-3" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Open Positions</h2>
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg flex items-start justify-between">
                  <div>
                    <div className="text-[#12393d] font-bold text-[16px]">Customer Support Specialist</div>
                    <div className="text-[#698487] text-[14px]">Remote / Part-time — Help our customers with orders, returns, and product questions.</div>
                  </div>
                  <div className="text-[#84a9ac] text-[13px]">Apply</div>
                </li>

                <li className="p-4 border rounded-lg flex items-start justify-between">
                  <div>
                    <div className="text-[#12393d] font-bold text-[16px]">Fulfillment Associate</div>
                    <div className="text-[#698487] text-[14px]">Bradenton, FL — Pick, pack and prepare orders for shipment with care and speed.</div>
                  </div>
                  <div className="text-[#84a9ac] text-[13px]">Apply</div>
                </li>

                <li className="p-4 border rounded-lg flex items-start justify-between">
                  <div>
                    <div className="text-[#12393d] font-bold text-[16px]">Content & Product Specialist</div>
                    <div className="text-[#698487] text-[14px]">Remote — Create product descriptions and help maintain quality standards across listings.</div>
                  </div>
                  <div className="text-[#84a9ac] text-[13px]">Apply</div>
                </li>

              </ul>
            </div>

            <div className="bg-[#f8f9f9] p-6 rounded-lg">
              <h3 className="text-[#12393d] text-[18px] mb-2" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>How to Apply</h3>
              <p className="text-[#698487] mb-4">Please send your resume and a short cover letter explaining why you’d be a great fit to:</p>
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Mail size={16} />
                  <span className="text-[#12393d] font-bold">kevin@autetinvestments.com</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-[#698487] mb-4">We review applications on a rolling basis and will reach out if you’re selected for an interview.</p>
              <a href="/contact" className="inline-block bg-[#12393d] text-white px-6 py-3 rounded-full font-semibold">Contact Us</a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
