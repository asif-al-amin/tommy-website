import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Check, Package, Truck, CreditCard, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, getSubtotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const subtotal = getSubtotal();
  const shipping = subtotal > 50 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  // Step 1 - Shipping Info
  const [shipping_info, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  // Step 2 - Billing Info
  const [billing_same, setBillingSame] = useState(true);
  const [billing_info, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  // Step 3 - Payment (PayPal link)
  const [selectedPayment, setSelectedPayment] = useState('paypal');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateShipping = () => {
    const newErrors = {};
    if (!shipping_info.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!shipping_info.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!shipping_info.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping_info.email))
      newErrors.email = 'Invalid email';
    if (!shipping_info.phone.trim()) newErrors.phone = 'Phone is required';
    if (!shipping_info.address.trim()) newErrors.address = 'Address is required';
    if (!shipping_info.city.trim()) newErrors.city = 'City is required';
    if (!shipping_info.state.trim()) newErrors.state = 'State is required';
    if (!shipping_info.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!shipping_info.country.trim()) newErrors.country = 'Country is required';
    return newErrors;
  };

  const validateBilling = () => {
    if (billing_same) return {};
    const newErrors = {};
    if (!billing_info.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!billing_info.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!billing_info.address.trim()) newErrors.address = 'Address is required';
    if (!billing_info.city.trim()) newErrors.city = 'City is required';
    if (!billing_info.state.trim()) newErrors.state = 'State is required';
    if (!billing_info.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    if (!billing_info.country.trim()) newErrors.country = 'Country is required';
    return newErrors;
  };

  const handleNextStep = () => {
    if (step === 1) {
      const newErrors = validateShipping();
      if (Object.keys(newErrors).length === 0) {
        setStep(2);
      } else {
        setErrors(newErrors);
      }
    } else if (step === 2) {
      const newErrors = validateBilling();
      if (Object.keys(newErrors).length === 0) {
        setStep(3);
      } else {
        setErrors(newErrors);
      }
    }
  };

  const handlePayPalCheckout = () => {
    setLoading(true);
    // Simulate order placement
    setTimeout(() => {
      setOrderPlaced(true);
      setStep(4);
      setLoading(false);
    }, 1500);
  };

  const handleCompleteOrder = () => {
    clearCart();
    navigate('/');
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="w-full bg-[#fffdfa] min-h-screen flex items-center justify-center py-16">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-[#12393d] mb-4">Cart is Empty</h2>
          <Link
            to="/shop"
            className="inline-block bg-[#ef7f22] text-white px-6 py-3 rounded-lg font-bold"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fffdfa] min-h-screen py-12 lg:py-16">
      {/* Header */}
      <section className="border-b border-gray-100 bg-white px-4 py-8 sm:px-6 lg:px-10 mb-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm text-[#84a9ac]">
            <Link to="/" className="hover:text-[#12393d]">Home</Link> / <Link to="/cart" className="hover:text-[#12393d]">Cart</Link> / <span className="font-bold text-[#12393d]">Checkout</span>
          </p>
          <h1 className="text-4xl font-extrabold text-[#12393d] md:text-5xl">
            Secure Checkout
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="mb-8 flex items-center justify-between">
              {[1, 2, 3, 4].map((s) => (
                <React.Fragment key={s}>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all ${
                      s < step
                        ? 'bg-[#12393d] text-white'
                        : s === step
                        ? 'bg-[#ef7f22] text-white ring-4 ring-[#ef7f22] ring-opacity-30'
                        : 'bg-gray-200 text-[#567175]'
                    }`}
                  >
                    {s < step ? <Check size={20} strokeWidth={3} /> : s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        s < step ? 'bg-[#12393d]' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Step Labels */}
            <div className="mb-10 grid grid-cols-4 gap-2 text-center text-sm">
              <div className={`font-bold ${step >= 1 ? 'text-[#12393d]' : 'text-[#567175]'}`}>
                Shipping
              </div>
              <div className={`font-bold ${step >= 2 ? 'text-[#12393d]' : 'text-[#567175]'}`}>
                Billing
              </div>
              <div className={`font-bold ${step >= 3 ? 'text-[#12393d]' : 'text-[#567175]'}`}>
                Payment
              </div>
              <div className={`font-bold ${step >= 4 ? 'text-[#12393d]' : 'text-[#567175]'}`}>
                Confirm
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="rounded-[24px] border border-[#edf0ee] bg-white p-8">
                <h2 className="mb-6 text-2xl font-extrabold text-[#12393d] flex items-center gap-2">
                  <Truck size={28} className="text-[#ef7f22]" />
                  Shipping Address
                </h2>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {[
                    { name: 'firstName', label: 'First Name', type: 'text' },
                    { name: 'lastName', label: 'Last Name', type: 'text' },
                    { name: 'email', label: 'Email Address', type: 'email' },
                    { name: 'phone', label: 'Phone Number', type: 'tel' },
                    { name: 'address', label: 'Street Address', type: 'text', fullWidth: true },
                    { name: 'city', label: 'City', type: 'text' },
                    { name: 'state', label: 'State/Province', type: 'text' },
                    { name: 'zipCode', label: 'ZIP/Postal Code', type: 'text' },
                    { name: 'country', label: 'Country', type: 'text' },
                  ].map((field) => (
                    <div
                      key={field.name}
                      className={field.fullWidth ? 'sm:col-span-2' : ''}
                    >
                      <label className="mb-2 block text-sm font-bold text-[#12393d]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={shipping_info[field.name]}
                        onChange={handleShippingChange}
                        className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 px-4 outline-none transition-all ${
                          errors[field.name]
                            ? 'border-red-400 focus:border-red-500 focus:bg-white'
                            : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                        }`}
                      />
                      {errors[field.name] && (
                        <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex justify-end gap-4">
                  <Link
                    to="/cart"
                    className="flex items-center gap-2 px-6 py-3 font-bold text-[#12393d] border-2 border-[#e5eae8] rounded-lg hover:border-[#12393d] transition-all"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                    Back to Cart
                  </Link>
                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-[#ef7f22] rounded-lg hover:bg-orange-600 transition-all"
                  >
                    Continue to Billing
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Billing Information */}
            {step === 2 && (
              <div className="rounded-[24px] border border-[#edf0ee] bg-white p-8">
                <h2 className="mb-6 text-2xl font-extrabold text-[#12393d]">
                  Billing Address
                </h2>

                <div className="mb-6 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="same_as_shipping"
                    checked={billing_same}
                    onChange={(e) => {
                      setBillingSame(e.target.checked);
                      setErrors({});
                    }}
                    className="h-5 w-5 rounded border-2 border-[#e5eae8] accent-[#ef7f22]"
                  />
                  <label htmlFor="same_as_shipping" className="text-sm font-bold text-[#12393d]">
                    Billing address is the same as shipping address
                  </label>
                </div>

                {!billing_same && (
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    {[
                      { name: 'firstName', label: 'First Name', type: 'text' },
                      { name: 'lastName', label: 'Last Name', type: 'text' },
                      { name: 'address', label: 'Street Address', type: 'text', fullWidth: true },
                      { name: 'city', label: 'City', type: 'text' },
                      { name: 'state', label: 'State/Province', type: 'text' },
                      { name: 'zipCode', label: 'ZIP/Postal Code', type: 'text' },
                      { name: 'country', label: 'Country', type: 'text' },
                    ].map((field) => (
                      <div
                        key={field.name}
                        className={field.fullWidth ? 'sm:col-span-2' : ''}
                      >
                        <label className="mb-2 block text-sm font-bold text-[#12393d]">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={billing_info[field.name]}
                          onChange={handleBillingChange}
                          className={`w-full rounded-lg border-2 bg-[#fafbfa] py-3 px-4 outline-none transition-all ${
                            errors[field.name]
                              ? 'border-red-400 focus:border-red-500 focus:bg-white'
                              : 'border-[#e5eae8] focus:border-[#ef7f22] focus:bg-white'
                          }`}
                        />
                        {errors[field.name] && (
                          <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex justify-between gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-[#12393d] border-2 border-[#e5eae8] rounded-lg hover:border-[#12393d] transition-all"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                    Back to Shipping
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-[#ef7f22] rounded-lg hover:bg-orange-600 transition-all"
                  >
                    Continue to Payment
                    <ChevronRight size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div className="rounded-[24px] border border-[#edf0ee] bg-white p-8">
                <h2 className="mb-6 text-2xl font-extrabold text-[#12393d] flex items-center gap-2">
                  <CreditCard size={28} className="text-[#ef7f22]" />
                  Payment Method
                </h2>

                <div className="space-y-4 mb-8">
                  <div
                    onClick={() => setSelectedPayment('paypal')}
                    className={`cursor-pointer rounded-lg border-2 p-6 transition-all ${
                      selectedPayment === 'paypal'
                        ? 'border-[#ef7f22] bg-[#fff5ee]'
                        : 'border-[#e5eae8] hover:border-[#ef7f22]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        checked={selectedPayment === 'paypal'}
                        onChange={() => setSelectedPayment('paypal')}
                        className="h-5 w-5 accent-[#ef7f22]"
                      />
                      <div>
                        <h3 className="font-bold text-[#12393d]">PayPal Checkout</h3>
                        <p className="text-sm text-[#567175]">
                          Pay securely using your credit/debit card or PayPal account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 mb-8 border border-blue-200">
                  <p className="text-sm text-blue-900">
                    ℹ️ You'll be redirected to PayPal to complete your payment securely. Your order will be confirmed after successful payment.
                  </p>
                </div>

                <div className="mt-8 flex justify-between gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-[#12393d] border-2 border-[#e5eae8] rounded-lg hover:border-[#12393d] transition-all"
                  >
                    <ChevronLeft size={20} strokeWidth={2.5} />
                    Back to Billing
                  </button>
                  <button
                    onClick={handlePayPalCheckout}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 font-bold text-white bg-[#003087] rounded-lg hover:bg-blue-900 transition-all disabled:opacity-70"
                  >
                    {loading ? 'Processing...' : 'Pay with PayPal'}
                    {!loading && <ChevronRight size={20} strokeWidth={2.5} />}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Order Confirmation */}
            {step === 4 && (
              <div className="rounded-[24px] border border-[#edf0ee] bg-white p-8 text-center">
                <div className="mb-6 inline-block rounded-full bg-green-100 p-4">
                  <CheckCircle size={48} className="text-green-600" strokeWidth={1.5} />
                </div>
                <h2 className="mb-2 text-3xl font-extrabold text-[#12393d]">
                  Order Confirmed!
                </h2>
                <p className="mb-8 text-[#567175]">
                  Thank you for your purchase. Your order has been placed successfully.
                </p>

                <div className="rounded-lg bg-[#f5f8f7] p-6 mb-8 text-left">
                  <p className="text-sm text-[#567175] mb-2">Order Number</p>
                  <p className="text-xl font-extrabold text-[#12393d] mb-4">
                    #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <hr className="my-4 border-[#e5eae8]" />
                  <p className="text-sm text-[#567175] mb-2">Total Amount</p>
                  <p className="text-2xl font-extrabold text-[#ef7f22]">
                    ${total.toFixed(2)}
                  </p>
                </div>

                <p className="mb-8 text-[#567175]">
                  A confirmation email has been sent to {shipping_info.email}
                </p>

                <button
                  onClick={handleCompleteOrder}
                  className="w-full px-6 py-3 font-bold text-white bg-[#ef7f22] rounded-lg hover:bg-orange-600 transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="h-fit rounded-[24px] border border-[#edf0ee] bg-white p-8 shadow-sm sticky top-4">
            <h3 className="mb-6 text-xl font-extrabold text-[#12393d]">Order Summary</h3>

            {/* Cart Items */}
            <div className="mb-6 max-h-64 overflow-y-auto space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <p className="font-bold text-[#12393d] truncate max-w-xs">{item.name}</p>
                    <p className="text-[#567175]">x{item.quantity}</p>
                  </div>
                  <p className="font-bold text-[#12393d]">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 pb-6 border-b border-[#edf0ee]">
              <div className="flex justify-between text-[#567175]">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#567175]">
                <span>Shipping</span>
                <span className="font-bold text-[#12393d]">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-[#567175]">
                <span>Tax (10%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-lg font-extrabold text-[#12393d]">Total</span>
              <span className="text-2xl font-extrabold text-[#ef7f22]">
                ${total.toFixed(2)}
              </span>
            </div>

            {step < 4 && (
              <div className="rounded-lg bg-green-50 p-3 border border-green-200">
                <p className="text-sm text-green-900 font-bold">✓ Secure checkout</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;
