import React from 'react';
import { RefreshCcw } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="w-full bg-[#fffdfa] pb-24 font-sans">
      <section className="w-full border-b border-gray-100 px-4 pb-12 pt-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-6 text-[14px] text-[#84a9ac]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="transition-colors hover:text-[#12393d]">Home</span> / <span className="font-bold text-[#12393d]">Return & Refund Policy</span>
          </p>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff6ef] text-[#ef7f22]">
              <RefreshCcw size={26} strokeWidth={2.5} />
            </div>
            <h1
              className="text-[38px] leading-tight tracking-tight text-[#12393d] md:text-[52px]"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Return & Refund Policy
            </h1>
          </div>

          <p
            className="text-[16px] text-[#698487] md:text-[18px]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            We guarantee 100% satisfaction on all your organic grocery needs.
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
              At <strong className="text-[#12393d]">AutetMart</strong>, our goal is to ensure you are completely satisfied with your purchase. We stand behind the quality of our premium organic groceries, snacks, and spices. If for any reason you are not satisfied with your order, our 30-day hassle-free return policy is designed to help you.
            </p>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                1. 30-Day Return Window
              </h2>
              <p>
                You have <strong className="font-black tracking-wide text-[#ef7f22]">30 DAYS</strong> from the date of delivery to initiate a return. To be eligible for a return, the item must be in the same condition that you received it.
              </p>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                2. Eligibility for Returns
              </h2>
              <p className="mb-3">Because we sell organic food items and groceries, strict health and safety guidelines apply to returns:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Items must be <strong className="text-[#12393d]">unopened, unused, and in their original packaging</strong> with all seals intact.</li>
                <li>Perishable items (if applicable) cannot be returned.</li>
                <li>Gift cards and clearance items are final sale and non-refundable.</li>
                <li>A valid proof of purchase or order number is required for all returns.</li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                3. Damaged or Incorrect Items
              </h2>
              <p>
                If you receive a defective, damaged, or incorrect item, please contact us immediately at <strong className="text-[#12393d]">kevin@autetinvestments.com</strong> within 48 hours of delivery. We will evaluate the issue and cover all return shipping costs to send you an immediate replacement or issue a full refund.
              </p>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                4. The Refund Process
              </h2>
              <p className="mb-3">
                Once your return is received and inspected at our facility, we will notify you via email regarding the approval or rejection of your refund.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>If approved, a refund will be processed to your <strong className="text-[#12393d]">original method of payment</strong>.</li>
                <li>Please allow <strong className="text-[#12393d]">5-7 business days</strong> for the refund to appear on your bank or credit card statement.</li>
                <li>For general returns (not due to our error), original shipping costs are non-refundable, and the customer is responsible for return shipping fees.</li>
              </ul>
            </div>

            <div>
              <h2
                className="mb-3 mt-6 text-[24px] text-[#12393d] md:text-[28px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                5. How to Initiate a Return
              </h2>
              <p>
                To start a return, please email our support team at <strong className="text-[#12393d]">kevin@autetinvestments.com</strong> with your order number and the reason for the return. We will provide you with a Return Merchandise Authorization (RMA) number and detailed instructions on where to send your package.
              </p>
            </div>

            <div className="mt-10 rounded-[24px] border border-gray-100 bg-[#f8f9f9] p-6 md:p-8">
              <h2
                className="mb-4 text-[22px] text-[#12393d] md:text-[24px]"
                style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}
              >
                Return Mailing Address
              </h2>
              <p className="mb-4">Please do not send your purchase back to the manufacturer. All returns must be mailed to our official business address:</p>

              <div className="space-y-2 text-[#12393d]">
                <p><strong className="font-extrabold">Company Name:</strong> Autet Investments LLC</p>
                <p><strong className="font-extrabold">Address:</strong> 3312 37th St W, Bradenton, FL 34205, United States</p>
                <p><strong className="font-extrabold">Email Support:</strong> kevin@autetinvestments.com</p>
                <p><strong className="font-extrabold">Phone:</strong> +1 941-812-2405</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;
