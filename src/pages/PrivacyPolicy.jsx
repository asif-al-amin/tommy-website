import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      <section className="w-full border-b border-gray-100 px-4 pb-12 pt-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-6 text-[14px] text-[#84a9ac]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="hover:text-[#12393d] transition-colors">Home</span> / <span className="font-bold text-[#12393d]">Privacy Policy</span>
          </p>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff6ef] text-[#ef7f22]">
              <ShieldCheck size={28} strokeWidth={2.5} />
            </div>
            <h1
              className="text-[40px] leading-tight tracking-tight text-[#12393d] md:text-[52px]"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Privacy Policy
            </h1>
          </div>

          <p
            className="text-[16px] text-[#698487] md:text-[18px]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Last Updated: October 09, 2026
          </p>
        </div>
      </section>

      <section className="w-full px-4 pt-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-gray-50 bg-white p-8 shadow-sm md:p-12">
          <div
            className="space-y-8 text-[16px] leading-[1.8] text-[#698487] md:text-[17.5px]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <p>
              At <strong className="text-[#12393d]">AutetMart</strong> (operating under <strong className="text-[#12393d]">Autet Investments LLC</strong>), we take your privacy seriously. This Privacy Policy explains how we collect, use, protect, and manage your personal information when you visit our website, browse our catalog, or place an order. By using our services, you agree to the terms described in this policy.
            </p>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information you provide directly to us when you create an account, place an order, contact customer support, or subscribe to updates. This may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong className="text-[#12393d]">Personal data:</strong> name, email address, phone number, shipping address, and billing information.</li>
                <li><strong className="text-[#12393d]">Payment details:</strong> credit card information or other payment data processed securely via trusted payment gateways. We do not store your full card details on our servers.</li>
                <li><strong className="text-[#12393d]">Technical information:</strong> IP address, browser type, device information, and cookies to improve website performance and user experience.</li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use your information to provide and improve our services, including:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Processing and delivering your grocery and household orders.</li>
                <li>Sending order confirmations, shipping updates, and customer support communications.</li>
                <li>Managing returns, refunds, and product support requests.</li>
                <li>Improving website functionality, fraud detection, and customer experience.</li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                3. Information Sharing & Third Parties
              </h2>
              <p>
                <strong className="text-[#ef7f22] text-[14px] font-black uppercase tracking-wider">We do not sell your data.</strong> We may share your information only with trusted third parties that help us operate our business, such as secure payment processors, shipping carriers, and customer support providers. These parties are legally required to protect your personal information and use it only for the purposes we authorize.
              </p>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                4. Data Security
              </h2>
              <p>
                We use industry-standard security measures, including SSL encryption, secure hosting, and trusted payment processing partners, to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                5. Your Rights
              </h2>
              <p>
                Depending on your location, you may have rights to access, correct, or delete your personal information, or to opt out of certain marketing communications. If you want to exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            <div className="mt-10 rounded-[24px] border border-gray-100 bg-[#f8f9f9] p-6 md:p-8">
              <h2
                className="mb-4 text-[22px] text-[#12393d] md:text-[24px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                Contacting Us
              </h2>
              <p className="mb-4">If you have any questions regarding this Privacy Policy, please contact us using the information below:</p>

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

export default PrivacyPolicy;
