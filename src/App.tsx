import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-gray-900 selection:bg-primary-light selection:text-white pb-0">
        <Navbar />
        <div className="pt-[115px] sm:pt-[125px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
