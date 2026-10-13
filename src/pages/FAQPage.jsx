import React from 'react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: 'How do I place an order on your website?',
    answer:
      'Simply browse through our product categories, select the items you want, add them to your cart, and proceed to checkout. You\'ll need to provide your shipping address and payment details. Once your order is confirmed, you\'ll receive an order confirmation email with tracking information.',
  },
  {
    question: 'Do you offer bulk or wholesale pricing?',
    answer:
      'Yes, we offer competitive wholesale and bulk order pricing. For large orders or ongoing wholesale partnerships, please contact us directly with your requirements. Our team will provide you with customized pricing based on your order volume and specific needs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, bank transfers, and digital payment methods. All transactions are secure and encrypted to protect your payment information.',
  },
  {
    question: 'How quickly will my order be shipped?',
    answer:
      'Most orders are processed and shipped within 2-3 business days. Shipping times depend on your location and the shipping method selected at checkout. You\'ll receive a tracking number via email so you can monitor your delivery in real-time.',
  },
  {
    question: 'Are your products certified organic?',
    answer:
      'Yes, we source from certified organic suppliers and ensure all our organic products meet international organic certification standards. Details about certifications are listed on each product page. We maintain the highest quality standards for all our products.',
  },
  {
    question: 'What is your return and refund policy?',
    answer:
      'We offer a hassle-free return policy within 30 days of purchase if the product is unopened and in its original condition. Simply contact our customer service team to start the return process. Refunds are typically processed within 5-7 business days after we receive and inspect the returned item.',
  },
  {
    question: 'How should I store the products I purchase?',
    answer:
      'Storage instructions vary by product type and are clearly mentioned on each product page. Generally, our organic products should be stored in a cool, dry place away from direct sunlight. Most products come with detailed storage and shelf-life information on the packaging.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently, we primarily ship within the region. For international inquiries, please contact our customer service team directly to discuss your location and shipping options. We may be able to arrange special shipping for bulk or wholesale orders.',
  },
  {
    question: 'What if my product arrives damaged or defective?',
    answer:
      'If you receive a damaged or defective product, please contact us immediately with photos of the damage. We\'ll either replace the item or issue a full refund at no additional cost to you. Your satisfaction is our priority.',
  },
  {
    question: 'Can I track my order after it ships?',
    answer:
      'Yes, once your order ships, you\'ll receive a tracking number via email. You can use this number to track your package in real-time and know exactly when it will arrive at your doorstep.',
  },
  {
    question: 'Do you offer discounts for bulk orders or repeat customers?',
    answer:
      'Yes, we reward customer loyalty. Bulk orders typically receive volume discounts, and repeat customers often qualify for special offers and loyalty programs. Contact our sales team for details on volume-based pricing and exclusive customer benefits.',
  },
  {
    question: 'How can I contact customer service if I have issues?',
    answer:
      'You can reach our customer service team through our Contact page, via email, or phone. We typically respond to all inquiries within 24 business hours. For urgent issues, please call our hotline listed on the website.',
  },
];

const FAQPage = () => {
  return (
    <div className="w-full bg-[#fffdfa] pb-20">
      <section className="border-b border-gray-100 bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            Home / <span className="font-bold text-[#12393d]">FAQ</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[#567175]">
            Find answers to common questions about ordering, shipping, payments, products, and our customer policies.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-10">
        <div className="space-y-5">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-[#edf0ee] bg-white p-6 shadow-[0_12px_30px_rgba(18,57,61,0.04)]"
            >
              <h3 className="mb-3 text-xl font-extrabold text-[#12393d] md:text-2xl">
                {item.question}
              </h3>
              <p className="text-base leading-7 text-[#567175]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[28px] bg-[#12393d] p-8 text-white shadow-[0_20px_40px_rgba(18,57,61,0.12)]">
          <h3 className="text-2xl font-extrabold md:text-3xl">
            Didn't find your answer?
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#d3e3e5]">
            Our customer service team is here to help! Reach out to us with any questions about your order, products, or anything else. We're happy to assist you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-[#ef7f22] px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[#df721c]"
            >
              Contact Us
            </Link>
            <Link
              to="/shop"
              className="rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
