import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, MapPin } from 'lucide-react';
import { categories } from '../data/categories';

const shopLinks = [
  { label: 'All Products', href: '/shop' },
  ...categories.map((category) => ({
    label: category.name,
    href: `/category/${category.slug}`,
  })),
];

const Footer = () => {
  const customerLinks = [
    { label: 'My Account', href: '#' },
    { label: 'Order Tracking', href: '#' },
    { label: 'Shipping Info', href: '/shipping-policy' },
    { label: 'Returns', href: '/return-policy' },
    { label: 'FAQ', href: '/faq' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy-policy' }
  ];

  const socialLinks = [
    { Icon: Globe, href: 'https://www.facebook.com/AutetMart/', label: 'Facebook', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: MessageCircle, href: 'https://wa.me/19412748287', label: 'WhatsApp', target: '_blank', rel: 'noopener noreferrer' },
    { Icon: MapPin, href: 'https://maps.google.com/?q=3312+37th+St+W+Bradenton+FL+34205', label: 'Google Maps', target: '_blank', rel: 'noopener noreferrer' },
  ];

  return (
    <footer className="w-full bg-[#12393d] pt-16 pb-6 px-4 sm:px-6 lg:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="mb-6 cursor-pointer">
              <span 
                className="text-3xl md:text-4xl text-white tracking-tight"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
              >
                Autet<span className="text-[#ef7f22]">Mart</span>
              </span>
            </Link>

            <p 
              className="text-[#84a9ac] text-[15px] leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Your trusted partner for premium organic groceries and healthy lifestyle supplies. Delivering freshness since 2024.
            </p>

            <div className="mb-6 space-y-3 text-sm text-[#d5e4e5]">
              <a href="tel:+19412748287" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="font-bold text-[#ef7f22]">☎</span>
                <span>+1 941-274-8287</span>
              </a>
              <a
                href="https://maps.google.com/?q=3312+37th+St+W+Bradenton+FL+34205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="font-bold text-[#ef7f22]">📍</span>
                <span>3312 37th St W, Bradenton, FL 34205</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label, target, rel }) => (
                <a 
                  key={label}
                  href={href}
                  target={target}
                  rel={rel}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#84a9ac] flex items-center justify-center text-[#84a9ac] hover:bg-[#ef7f22] hover:border-[#ef7f22] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 
              className="text-white text-[18px] mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Shop
            </h3>
            <ul className="flex flex-col space-y-3.5">
              {shopLinks.map(({ label, href }, index) => (
                <li key={`${label}-${index}`}>
                  {href.startsWith('/') ? (
                    <Link 
                      to={href} 
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 
              className="text-white text-[18px] mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Customer Care
            </h3>
            <ul className="flex flex-col space-y-3.5">
              {customerLinks.map(({ label, href }, index) => (
                <li key={index}>
                  {href.startsWith('/') ? (
                    <Link 
                      to={href}
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 lg:col-start-11">
            <h3 
              className="text-white text-[18px] mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
            >
              Company
            </h3>
            <ul className="flex flex-col space-y-3.5">
              {companyLinks.map(({ label, href }, index) => (
                <li key={index}>
                  {href.startsWith('/') ? (
                    <Link 
                      to={href}
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </Link>
                  ) : (
                    <a 
                      href={href} 
                      className="text-[#84a9ac] text-[15px] hover:text-white transition-colors"
                      style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-white/10 pt-6 flex justify-between items-center text-center sm:text-left">
          <p 
            className="text-[#84a9ac] text-[14px] w-full"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            © 2026 Autet Investments LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;