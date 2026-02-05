import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-10 pb-6 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-10">
                    {/* Brand & Intro */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="bg-secondary p-2 inline-flex items-center gap-1 rounded mb-8">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-secondary font-bold text-xs">A</span>
                            </div>
                            <span className="text-primary font-bold text-xl tracking-tighter">ANANTA</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            India's leading manufacturer of premium quality edible oils. Dedicated to purity, health, and authentic taste since 1995. FSSAI Certified.
                        </p>
                    </div>

                    {/* Quick Links Group - Column 1 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold mb-8 uppercase tracking-widest text-white">Products</h4>
                        <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase">
                            <li><Link to="/" className="hover:text-primary-light">Mustard Oil</Link></li>
                            <li><Link to="/about" className="hover:text-primary-light">Soybean Oil</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-light">Sunflower Oil</Link></li>
                            <li><a href="#" className="hover:text-primary-light">Rice Bran Oil</a></li>
                            <li><a href="#" className="hover:text-primary-light">Groundnut Oil</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Group - Column 2 */}
                    <div className="lg:col-span-2 mt-0 lg:mt-12">
                        <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase">
                            <li><a href="#" className="hover:text-primary-light">Bulk Orders</a></li>
                            <li><a href="#" className="hover:text-primary-light">Distributorship</a></li>
                            <li><a href="#" className="hover:text-primary-light">Quality Policy</a></li>
                            <li><a href="#" className="hover:text-primary-light">Lab Reports</a></li>
                            <li><a href="#" className="hover:text-primary-light">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact & Misc */}
                    <div className="lg:col-span-4">
                        <div className="mb-8">
                            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest">CONTACT US</h4>
                            <p className="text-gray-500 text-sm font-medium mb-4">info@ananta.com</p>
                            <Link to="/faq" className="text-xs font-bold text-gray-500 hover:text-primary-dark transition-colors mb-6 block uppercase tracking-tight">Frequently Asked Questions</Link>

                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                    <Facebook size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                    <Twitter size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                    <Instagram size={16} />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-light hover:text-white transition-all">
                                    <Linkedin size={16} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest">MORE</h4>
                            <div className="grid grid-cols-2 gap-4 text-gray-500 text-xs font-bold uppercase tracking-tight">
                                <Link to="/shop" className="hover:text-white">Edible Oil Manufacturer</Link>
                                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                                <Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link>
                                <span className="text-gray-700 cursor-not-allowed">Out of Stock</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[11px] font-medium tracking-tight">© 2026 Ananta. All Rights Reserved.</p>
                    <div className="flex gap-8 text-gray-600 text-[11px] font-bold tracking-tight uppercase">
                        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="hover:text-white">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
