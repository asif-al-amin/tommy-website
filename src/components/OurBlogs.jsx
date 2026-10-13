import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const OurBlogs = () => {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-10 bg-[#fffdfa] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            Section Header
        ========================================= */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div className="text-left">
            {/* Title - Exact Font, Size and Color as PhenixMeow */}
            <h2 
              className="text-[#12393d] text-[36px] md:text-[46px] mb-1 tracking-tight leading-none"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Our Blogs
            </h2>
            <p 
              className="text-[#698487] text-[16px]"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
            >
              Tips, recipes & healthy lifestyle inspiration
            </p>
          </div>
          
          {/* View All Posts */}
          <Link 
            to="/blog" 
            className="text-[#ef7f22] flex items-center gap-1 hover:gap-2 transition-all text-[16px] mb-1"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}
          >
            View All Posts <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* =========================================
            Blog Cards Grid (3 Columns)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-[220px] w-full overflow-hidden bg-gray-100 sm:h-[240px]">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                <div 
                  className="absolute left-5 top-5 rounded-[8px] bg-[#ef7f22] px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-white shadow-sm"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}
                >
                  {blog.category}
                </div>
              </div>

              <div className="flex flex-grow flex-col bg-white p-6 md:p-8">
                <p 
                  className="mb-3 text-[13.5px] text-[#698487]"
                  style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}
                >
                  {blog.date}
                </p>

                <h3 
                  className="text-[20px] leading-snug text-[#12393d] transition-colors group-hover:text-[#ef7f22] md:text-[22px]"
                  style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
                >
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurBlogs;