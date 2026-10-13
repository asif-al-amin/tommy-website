import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, ShieldCheck, Truck, Sparkles, ArrowRight, Star } from 'lucide-react';

const perks = [
  {
    icon: Gift,
    title: 'Welcome Reward',
    text: 'Get an instant welcome discount on your first order and unlock member-only seasonal offers.',
  },
  {
    icon: ShieldCheck,
    title: 'Exclusive Access',
    text: 'Be first to shop limited-stock organic bundles, curated wellness packs, and seasonal drops.',
  },
  {
    icon: Truck,
    title: 'Faster Savings',
    text: 'Enjoy priority shipping updates and faster support for all your grocery and pantry needs.',
  },
];

const JoinNowPage = () => {
  return (
    <div className="w-full bg-[#fffdfa] pb-24 font-sans">
      <section className="w-full px-4 sm:px-6 lg:px-10 pt-16 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] overflow-hidden shadow-sm border border-[#edf4f1] bg-[#f5fbf7]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-[#98ad3b] p-8 sm:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #fff 0, #fff 2px, transparent 2px)', backgroundSize: '28px 28px' }} />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#f0a04b] text-white px-4 py-2 rounded-full text-[12px] sm:text-[13px] font-black uppercase tracking-wider" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    <Star size={14} fill="currentColor" />
                    Member Exclusive
                  </div>

                  <h1 className="mt-8 text-white text-[38px] sm:text-[48px] lg:text-[58px] leading-[0.95]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
                    Join the<br />AutetMart Club
                  </h1>

                  <p className="mt-5 text-white/95 text-[17px] leading-relaxed max-w-md" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                    Unlock fresh deals, healthy bundles, and early access to organic groceries curated for your everyday life.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to="/shop" className="bg-white text-[#12393d] px-6 py-3 rounded-full font-extrabold text-[15px] hover:bg-[#f5f5f5] transition-colors shadow-sm">
                      Shop Deals
                    </Link>
                    <Link to="/contact" className="border border-white/50 text-white px-6 py-3 rounded-full font-extrabold text-[15px] hover:bg-white/10 transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-14 bg-white flex flex-col justify-center">
                <p className="text-[#ef7f22] text-[13px] uppercase tracking-[0.18em] font-black" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Why Join?
                </p>

                <h2 className="mt-3 text-[#12393d] text-[28px] sm:text-[34px] leading-tight" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                  Save more on every healthy purchase.
                </h2>

                <div className="mt-8 space-y-5">
                  {perks.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex gap-4 items-start p-4 rounded-[20px] bg-[#f7f9f8] border border-[#edf2f1]">
                      <div className="w-12 h-12 rounded-full bg-[#fff6ef] flex items-center justify-center text-[#ef7f22] shrink-0">
                        <Icon size={22} strokeWidth={2.2} />
                      </div>
                      <div>
                        <h3 className="text-[#12393d] text-[18px] font-extrabold" style={{ fontFamily: "'Fredoka', sans-serif" }}>{title}</h3>
                        <p className="mt-1 text-[#698487] text-[15px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[32px] border border-[#edf2f1] shadow-sm p-8 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <p className="text-[#ef7f22] text-[13px] uppercase tracking-[0.18em] font-black" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Membership Benefits
              </p>
              <h3 className="mt-3 text-[#12393d] text-[30px] sm:text-[38px] leading-tight" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                First order perks, member discounts, and fresh seasonal offers.
              </h3>
              <ul className="mt-6 space-y-3 text-[#698487] text-[16px]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                <li className="flex items-center gap-3"><Sparkles size={18} className="text-[#ef7f22]" /> 10% OFF your first qualifying order</li>
                <li className="flex items-center gap-3"><Sparkles size={18} className="text-[#ef7f22]" /> Seasonal bundles and wellness specials</li>
                <li className="flex items-center gap-3"><Sparkles size={18} className="text-[#ef7f22]" /> Priority access to launches and restocks</li>
              </ul>
            </div>

            <div className="bg-[#12393d] rounded-[28px] p-7 sm:p-8 text-white">
              <p className="text-[#84a9ac] text-[12px] uppercase tracking-[0.18em] font-black" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Join Now
              </p>
              <div className="mt-4 text-[36px] leading-none font-black" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                Save 10%
              </div>
              <p className="mt-3 text-white/80 text-[15px] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                Start your membership today and enjoy healthier shopping with bigger savings.
              </p>

              <Link to="/auth" className="mt-7 inline-flex items-center gap-2 bg-[#ef7f22] text-white px-6 py-3 rounded-full font-extrabold text-[15px] hover:bg-[#d96d14] transition-colors">
                Create Account <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNowPage;
