import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-[#12393d]">Blog post not found</h1>
        <Link to="/blog" className="mt-6 inline-block rounded-full bg-[#ef7f22] px-6 py-3 font-bold text-white">
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <div className="w-full font-sans bg-[#fffdfa]">
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat px-4 pb-24 pt-16 sm:px-6 lg:px-10"
        style={{ backgroundImage: `url('${post.image}')` }}
      >
        <div className="absolute inset-0 bg-[#12393d]/85" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="mb-8 text-[14px] text-[#84a9ac]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link> /{' '}
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link> /{' '}
            <span className="text-white font-bold">{post.category}</span>
          </p>

          <div className="mb-6 inline-block rounded-[6px] bg-[#ef7f22] px-4 py-1.5 text-[12px] uppercase tracking-widest text-white shadow-sm" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>
            {post.category}
          </div>

          <h1 className="mb-6 text-[42px] leading-[1.1] tracking-tight text-white md:text-[56px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
            {post.title}
          </h1>

          <p className="text-[15px] text-white/80" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            {post.author} <span className="mx-2 text-white/50">•</span> {post.date} <span className="mx-2 text-white/50">•</span> {post.readTime}
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-6 lg:px-10">
        <article className="mx-auto max-w-3xl">
          <p className="mb-8 text-[18px] leading-relaxed text-[#12393d] md:text-[20px]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>
            {post.excerpt}
          </p>

          <div className="space-y-6 text-[16px] leading-[1.8] text-[#698487] md:text-[17px]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
            {post.content.map((paragraph, index) => (
              <p key={index}>
                {paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('5.') ? (
                  <><strong className="text-[#12393d]">{paragraph}</strong></>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t border-gray-200 pt-8">
            <Link to="/blog" className="flex w-max items-center gap-2 text-[16px] text-[#ef7f22] transition-all hover:gap-3" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800 }}>
              <ArrowLeft size={18} strokeWidth={2.5} /> Back to all posts
            </Link>
          </div>
        </article>
      </section>

      <section className="w-full border-t border-gray-100 bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-[32px] tracking-tight text-[#12393d] md:text-[36px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
            More to Read
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {relatedPosts.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="group cursor-pointer overflow-hidden rounded-[24px] border border-[#f0f0f0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                </div>

                <div className="p-6">
                  <p className="mb-2 text-[13px] text-[#84a9ac]" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700 }}>
                    {blog.date}
                  </p>
                  <h3 className="text-[18px] leading-snug text-[#12393d] group-hover:text-[#ef7f22] md:text-[20px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
