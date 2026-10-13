import React from 'react';
import { Truck } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="w-full font-sans bg-[#fffdfa] pb-24">
      <section className="w-full pt-16 pb-12 px-4 sm:px-6 lg:px-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#84a9ac] text-[14px] mb-6 cursor-pointer"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            <span className="hover:text-[#12393d] transition-colors">Home</span> / <span className="text-[#12393d] font-bold">Shipping Policy</span>
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#fff6ef] flex items-center justify-center text-[#ef7f22]">
              <Truck size={26} strokeWidth={2.5} />
            </div>
            <h1
              className="text-[#12393d] text-[38px] md:text-[52px] leading-tight tracking-tight"
              style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}
            >
              Shipping Policy
            </h1>
          </div>

          <p
            className="text-[#698487] text-[16px] md:text-[18px]"
            style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}
          >
            Fast, reliable, and secure shipping for all your organic grocery needs.
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
              At <strong className="text-[#12393d]">AutetMart</strong> (Autet Investments LLC), our priority is to deliver your premium organic groceries safely and as quickly as possible. This Shipping Policy explains our processing times, shipping rates, and delivery methods.
            </p>

            <div>
              <h2 className="text-[#12393d] text-[24px] md:text-[28px] mb-3 mt-6" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                1. Order Processing Time
              </h2>
              <p className="mb-3">All orders are processed and prepared for dispatch within <strong className="text-[#12393d]">1 to 2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You will receive another notification when your order has shipped.</li>
                <li>Please note that during high volume seasons or promotional periods, processing may take slightly longer.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#12393d] text-[24px] md:text-[28px] mb-3 mt-6" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                2. Shipping Rates and Delivery Estimates
              </h2>
              <p className="mb-3">We offer nationwide shipping across the United States. Shipping charges for your order will be calculated and displayed at checkout.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-[#12393d]">Standard Shipping (FedEx / UPS Ground):</strong> 3 to 5 business days.</li>
                <li><strong className="text-[#12393d]">Expedited Shipping:</strong> 1 to 2 business days (Available at an additional cost during checkout).</li>
                <li><strong className="text-[#ef7f22] font-black uppercase tracking-wider text-[14px]">Free Shipping:</strong> We offer free standard shipping on all orders over $50 within the contiguous United States.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#12393d] text-[24px] md:text-[28px] mb-3 mt-6" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                3. How Do I Check the Status of My Order?
              </h2>
              <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24-48 hours for the tracking information to become available. If you haven’t received your order within 7 days of receiving your shipping confirmation email, please contact us at <strong className="text-[#12393d]">kevin@autetinvestments.com</strong> with your name and order number, and we will look into it for you.</p>
            </div>

            <div>
              <h2 className="text-[#12393d] text-[24px] md:text-[28px] mb-3 mt-6" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                4. Shipping Restrictions &amp; PO Boxes
              </h2>
              <p>Currently, we only ship within the United States. We do not offer international shipping at this time. Because we primarily use FedEx and UPS Ground for our grocery deliveries, <strong className="text-[#12393d]">we cannot ship to P.O. Boxes</strong>. Please provide a valid residential or commercial street address during checkout.</p>
            </div>

            <div>
              <h2 className="text-[#12393d] text-[24px] md:text-[28px] mb-3 mt-6" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                5. Damages and Lost Packages
              </h2>
              <p>If your grocery items arrive damaged, or if your package is lost in transit, please contact us within 48 hours of the estimated delivery date. Save all packaging materials and damaged goods, as we may need photos to file a claim with the carrier (FedEx/UPS). We will work swiftly to send you a replacement or issue a refund.</p>
            </div>

            <div className="bg-[#f8f9f9] p-6 md:p-8 rounded-[24px] mt-10 border border-gray-100">
              <h2 className="mb-4 text-[22px] text-[#12393d] md:text-[24px]" style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
                Shipping Support Contact
              </h2>
              <p className="mb-4">If you have any questions regarding our shipping policy, please contact our support team:</p>

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

export default ShippingPolicy;
