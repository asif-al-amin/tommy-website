import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      <section className="w-full pt-10 pb-12 px-4 sm:px-6 lg:px-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#84a9ac] text-[14px] mb-6 cursor-pointer w-max" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            Home / <span className="text-[#12393d] font-bold">Blog</span>
          </p>

          <h1 className="text-[#12393d] text-[48px] md:text-[56px] leading-tight mb-3" style={{ fontFamily: "'Chewy', cursive", letterSpacing: '1px' }}>
            Our Blog
          </h1>

          <p className="text-[#84a9ac] text-[16px] md:text-[18px] max-w-2xl" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            Tips, recipes & healthy lifestyle inspiration for your family
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="relative h-[240px] w-full overflow-hidden bg-gray-100">
                <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" loading="lazy" />
                <div className="absolute left-4 top-4 rounded-[8px] bg-[#ef7f22] px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-white shadow-sm" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
                  {blog.category}
                </div>
              </div>

              <div className="flex flex-grow flex-col p-6 md:p-8">
                <p className="mb-3 text-[13.5px] text-[#84a9ac]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                  {blog.date} <span className="text-gray-300">•</span> {blog.readTime}
                </p>

                <h3 className="text-[20px] leading-snug text-[#12393d] transition-colors group-hover:text-[#ef7f22] md:text-[22px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;