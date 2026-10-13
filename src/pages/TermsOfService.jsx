import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      <section className="w-full pt-16 pb-12 px-4 sm:px-6 lg:px-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#84a9ac] text-[14px] mb-6 cursor-pointer"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="hover:text-[#12393d] transition-colors">Home</span> / <span className="text-[#12393d] font-bold">Terms of Service</span>
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#fff6ef] flex items-center justify-center text-[#ef7f22]">
              <FileText size={26} strokeWidth={2.5} />
            </div>
            <h1
              className="text-[#12393d] text-[38px] md:text-[52px] leading-tight tracking-tight"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Terms of Service
            </h1>
          </div>

          <p
            className="text-[#698487] text-[16px] md:text-[18px]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Last Updated: October 09, 2026
          </p>
        </div>
      </section>

      <section className="w-full pt-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-gray-50">

          <div
            className="space-y-8 text-[#698487] text-[16px] md:text-[17.5px] leading-[1.8]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <p>
              Welcome to <strong className="text-[#12393d]">AutetMart</strong>. This website is operated by <strong className="text-[#12393d]">Autet Investments LLC</strong>. Throughout the site, the terms "we", "us", and "our" refer to Autet Investments LLC. We offer this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
            </p>

            <div>
              <h2 className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                1. Online Store Terms
              </h2>
              <p>
                By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction. A breach or violation of any of the Terms will result in an immediate termination of your Services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                2. Products and Pricing
              </h2>
              <p className="mb-3">Since we deal with premium organic groceries, natural spices, and snacks, please note the following:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices for our products are subject to change without notice due to agricultural and market fluctuations.</li>
                <li>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice.</li>
                <li>We have made every effort to display as accurately as possible the colors and images of our products. However, natural products may vary slightly in appearance.</li>
                <li>All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                3. Accuracy of Billing and Account Information
              </h2>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the email and/or billing address/phone number provided at the time the order was made.
              </p>
            </div>

            <div>
              <h2 className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                4. Prohibited Uses
              </h2>
              <p className="mb-3">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for unlawful purposes or to infringe the rights of others.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
                <li>To violate any regulations, rules, laws, or local ordinances.</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                <li>To submit false or misleading information or to upload viruses or malicious code.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                5. Changes to Terms of Service
              </h2>
              <p>
                You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms by posting updates on our website.
              </p>
            </div>

            <div className="mt-10 rounded-[24px] border border-gray-100 bg-[#f8f9f9] p-6 md:p-8">
              <h2 className="mb-4 text-[22px] text-[#12393d] md:text-[24px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                Questions About The Terms?
              </h2>
              <p className="mb-4">Questions about the Terms of Service should be sent to us at:</p>
              <div className="space-y-2 text-[#12393d]">
                <p><strong className="font-extrabold">Company Name:</strong> Autet Investments LLC</p>
                <p><strong className="font-extrabold">Address:</strong> 3312 37th St W, Bradenton, FL 34205, United States</p>
                <p><strong className="font-extrabold">Email:</strong> kevin@autetinvestments.com</p>
                <p><strong className="font-extrabold">Phone:</strong> +1 941-812-2405</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
