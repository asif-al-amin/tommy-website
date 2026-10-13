import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ShopByCategory from './components/ShopByCategory';
import BestSelling from './components/BestSelling';
import PromoBanners from './components/PromoBanners';
import NewArrivals from './components/NewArrivals';
import FeaturedProducts from './components/FeaturedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import OurBlogs from './components/OurBlogs';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ShopPage from './pages/ShopPage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ShippingPolicy from './pages/ShippingPolicy';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ReturnPolicy from './pages/ReturnPolicy';
import { CartProvider } from './context/CartContext';
import JoinNowPage from './pages/JoinNowPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <ShopByCategory />
      <BestSelling />
      <PromoBanners />
      <NewArrivals />
      <FeaturedProducts />
      <WhyChooseUs />
      <OurServices />
      <OurBlogs />
      <Footer />
      <main className="p-4">
        {/* তোমার rest of page content */}
      </main>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<><Navbar /><ShopPage /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutUs /><Footer /></>} />
          <Route path="/careers" element={<><Navbar /><Careers /><Footer /></>} />
          <Route path="/join-now" element={<><Navbar /><JoinNowPage /><Footer /></>} />
          <Route path="/category/:categorySlug" element={<><Navbar /><CategoryPage /><Footer /></>} />
          <Route path="/product/:slug" element={<><Navbar /><ProductDetailsPage /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/blog" element={<><Navbar /><BlogPage /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Navbar /><BlogDetailPage /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FAQPage /><Footer /></>} />
          <Route path="/privacy-policy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
          <Route path="/shipping-policy" element={<><Navbar /><ShippingPolicy /><Footer /></>} />
          <Route path="/terms" element={<><Navbar /><TermsOfService /><Footer /></>} />
          <Route path="/return-policy" element={<><Navbar /><ReturnPolicy /><Footer /></>} />
          <Route path="/auth" element={<><Navbar /><AuthPage /><Footer /></>} />
          <Route path="/cart" element={<><Navbar /><CartPage /><Footer /></>} />
          <Route path="/checkout" element={<><Navbar /><CheckoutPage /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;