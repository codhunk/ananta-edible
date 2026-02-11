import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import BulkOrderPage from './pages/BulkOrderPage';
import EdiblesPage from './pages/EdiblesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import FAQPage from './pages/FAQPage';
import Footer from './components/Footer';

// New Informational Pages
import BrandsPage from './pages/BrandsPage';
import InnovationPage from './pages/InnovationPage';
import ImpactPage from './pages/ImpactPage';
import PeoplePage from './pages/PeoplePage';
import InvestorsPage from './pages/InvestorsPage';
import FoodEssentialsPage from './pages/FoodEssentialsPage';
import FmcgPage from './pages/FmcgPage';
import IndustryEssentialsPage from './pages/IndustryEssentialsPage';
import ExportsPage from './pages/ExportsPage';
import NewsroomPage from './pages/NewsroomPage';
import FortuneFoodsPage from './pages/FortuneFoodsPage';
import FactoryLocatorPage from './pages/FactoryLocatorPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background font-sans text-gray-900 selection:bg-primary-light selection:text-white pb-0 flex flex-col">
        <Navbar />
        <div className="pt-[148px] sm:pt-[116px] flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/bulk-orders" element={<BulkOrderPage />} />
            <Route path="/edibles" element={<EdiblesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Informational Routes */}
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/food-essentials" element={<FoodEssentialsPage />} />
            <Route path="/fmcg" element={<FmcgPage />} />
            <Route path="/industry-essentials" element={<IndustryEssentialsPage />} />
            <Route path="/exports" element={<ExportsPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/fortune-foods" element={<FortuneFoodsPage />} />
            <Route path="/factory-locator" element={<FactoryLocatorPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
