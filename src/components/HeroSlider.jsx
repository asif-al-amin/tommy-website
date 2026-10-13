import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag, Leaf } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "★ EVERYDAY ESSENTIALS",
      badgeClass: "bg-[#ef7f22] text-white",
      title1: "Fresh & Organic",
      title2: "In One Spot!",
      description: "From organic treats to household must-haves — everything your family needs for a healthy lifestyle.",
      buttons: [
        { label: "Shop Essentials", href: "/shop", primary: true },
        { label: "Explore Categories", href: "/shop", primary: false },
      ],
      theme: {
        shell: "bg-[#a9e0d3]",
        glow: "rgba(255,255,255,0.22)",
        panel: "bg-white/25",
        tone: "#12393d",
        subText: "rgba(18, 57, 61, 0.75)",
        accent: "#ef7f22",
      },
      pattern: "radial-gradient(circle at 20% 28%, rgba(255,255,255,0.18) 0%, transparent 28%), radial-gradient(circle at 74% 72%, rgba(255,255,255,0.13) 0%, transparent 20%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      visual: {
        type: "showcase",
        label: "Fresh & Organic",
        secondary: "Healthy Living",
        accent: "#ef7f22",
      },
    },
    {
      badge: "★ NEW SEASON DROP",
      badgeClass: "bg-[#ef7f22] text-white",
      title1: "Tasty Combos",
      title2: "For Your Health!",
      description: "Curated organic bundles that mix taste, nutrition, and daily energy — all in one box.",
      buttons: [
        { label: "Shop Bundles", href: "/shop", primary: true },
        { label: "View Categories", href: "/shop", primary: false },
      ],
      theme: {
        shell: "bg-[#f5c903]",
        glow: "rgba(255,255,255,0.28)",
        panel: "bg-white/25",
        tone: "#1b1b1b",
        subText: "rgba(27,27,27,0.72)",
        accent: "#ef7f22",
      },
      pattern: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.16) 0%, transparent 16%), repeating-radial-gradient(circle at center, rgba(255,255,255,0.12) 0 11px, transparent 11px 22px), linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.06))",
      visual: {
        type: "promo-card",
        label: "Tasty Combos",
        secondary: "For Your Health!",
        accent: "#ef7f22",
      },
    },
    {
      badge: "★ HEALTHY TIME",
      badgeClass: "bg-[#ef7f22] text-white",
      title1: "Premium Quality.",
      title2: "Happy Home!",
      description: "Discover our curated collection of high-quality organic groceries designed to keep your family healthy.",
      buttons: [
        { label: "Shop Now", href: "/shop", primary: true },
        { label: "See New Arrivals", href: "/shop", primary: false },
      ],
      theme: {
        shell: "bg-[#a9e0d3]",
        glow: "rgba(255,255,255,0.22)",
        panel: "bg-white/25",
        tone: "#12393d",
        subText: "rgba(18,57,61,0.78)",
        accent: "#ef7f22",
      },
      pattern: "radial-gradient(circle at 15% 35%, rgba(255,255,255,0.17) 0%, transparent 28%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      visual: {
        type: "showcase",
        label: "Fresh & Organic",
        secondary: "Healthy Family",
        accent: "#ef7f22",
      },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const renderVisual = (slide) => {
    if (slide.visual.type === "promo-card") {
      return (
        <div className="relative w-full max-w-[540px] h-[240px] md:h-[300px] rounded-[28px] bg-white/30 border border-white/30 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-[2px] flex items-center justify-center p-8">
          <div className="absolute inset-0 rounded-[28px] bg-white/5" />
          <div className="relative z-10 text-center text-[#12393d]">
            <div className="text-[2rem] md:text-[3rem] font-black leading-[0.9]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              {slide.visual.label}
            </div>
            <div className="text-[2rem] md:text-[3rem] font-black leading-[0.9]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              {slide.visual.secondary}
            </div>
          </div>
        </div>
      );
    }

    if (slide.visual.type === "pet-card") {
      return (
        <div className="relative w-full max-w-[540px] h-[240px] md:h-[300px] rounded-[28px] bg-white/25 border border-white/30 shadow-[0_24px_50px_rgba(18,57,61,0.12)] flex items-center justify-center overflow-hidden">
          <div className="absolute -left-10 -bottom-8 w-28 h-28 rounded-full bg-[#d9f6f2]/80 blur-xl" />
          <div className="absolute right-8 bottom-6 w-24 h-24 rounded-full bg-[#d6f2f8]/80 blur-xl" />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-[50%] bg-gradient-to-br from-[#f2e4d0] via-[#e4c48d] to-[#d4a96a] shadow-[0_18px_30px_rgba(75,52,22,0.28)] flex items-center justify-center text-[1.2rem] md:text-[1.4rem] font-black text-[#12393d]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              {slide.visual.label}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-full max-w-[540px] h-[220px] md:h-[300px] rounded-[28px] bg-white/30 border border-white/30 shadow-[0_18px_30px_rgba(0,0,0,0.08)] backdrop-blur-[2px] flex items-center justify-center p-6">
        <div className="absolute inset-0 rounded-[28px] bg-white/10" />
        <div className="relative z-10 text-center text-[#12393d]">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#ef7f22]">
            <Leaf size={18} strokeWidth={2.3} />
            <Sparkles size={18} strokeWidth={2.3} />
          </div>
          <div className="text-[2rem] md:text-[3rem] font-black leading-[0.9]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            {slide.visual.label}
          </div>
          <div className="text-[1.1rem] md:text-[1.3rem] mt-2 text-[#12393d]/80 font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
            {slide.visual.secondary}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden font-sans">
      <div 
        className="flex transition-transform duration-700 ease-in-out min-h-[560px] md:min-h-[640px]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`w-full flex-shrink-0 ${slide.theme.shell} flex items-center relative overflow-hidden`}
          >
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{ backgroundImage: slide.pattern }}
            ></div>

            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-white/5 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 w-full py-8 md:py-0 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-4">
              <div className="w-full md:w-[57%] space-y-4 md:space-y-6 pt-4 md:pt-0 text-center md:text-left">
                <div className={`${slide.badgeClass} inline-block font-bold text-[10px] sm:text-[12px] tracking-wider px-3 sm:px-4 py-1.5 rounded-full uppercase shadow-sm`}>
                  {slide.badge}
                </div>

                <div className="space-y-1">
                  <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[78px] font-extrabold tracking-tight leading-[0.92] md:leading-[0.98]" style={{ color: slide.theme.tone, fontFamily: "'Fredoka', sans-serif" }}>
                    {slide.title1}
                  </h1>
                  <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[78px] font-extrabold tracking-tight leading-[0.92] md:leading-[0.98]" style={{ color: slide.theme.tone, fontFamily: "'Fredoka', sans-serif" }}>
                    {slide.title2}
                  </h1>
                </div>

                <p className="text-sm sm:text-base md:text-[22px] font-medium max-w-xl leading-snug pb-2 mx-auto md:mx-0" style={{ color: slide.theme.subText, fontFamily: "'Nunito', sans-serif" }}>
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
                  {slide.buttons.map((button, buttonIndex) => (
                    <Link
                      key={`${button.label}-${buttonIndex}`}
                      to={button.href}
                      className={button.primary
                        ? "bg-[#ef7f22] text-white px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-lg hover:bg-orange-600 transition-colors shadow-md inline-flex items-center justify-center"
                        : "bg-white text-[#1a1a1a] px-5 sm:px-8 py-3 rounded-full font-bold text-sm sm:text-lg hover:bg-gray-50 transition-colors shadow-md inline-flex items-center justify-center"
                      }
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>

                <div className="flex justify-center md:justify-start space-x-2 pt-3 md:pt-8">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentSlide(dotIndex)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        dotIndex === currentSlide 
                          ? "bg-[#ef7f22] w-8" 
                          : "bg-black/20 w-2.5 hover:bg-black/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[43%] flex justify-center md:justify-end items-center mt-1 md:mt-0 relative">
                {renderVisual(slide)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2.5 sm:p-3.5 rounded-full shadow-lg hover:bg-white transition-colors z-20 border border-white/50"
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      <button 
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-2.5 sm:p-3.5 rounded-full shadow-lg hover:bg-white transition-colors z-20 border border-white/50"
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>
    </section>
  );
};

export default HeroSlider;