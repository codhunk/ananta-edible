import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand & Intro */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="bg-secondary p-2 inline-flex items-center gap-1 rounded mb-8">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-secondary font-bold text-xs">A</span>
                            </div>
                            <span className="text-primary font-bold text-xl tracking-tighter">ANANTA</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                            #1 Indian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at ANANTA is heavily involved in the Indian cannabis industry for over 15 years.
                        </p>
                    </div>

                    {/* Quick Links Group - Column 1 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold mb-8 uppercase tracking-widest text-white">QUICK LINK</h4>
                        <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase">
                            <li><Link to="/" className="hover:text-primary-light">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary-light">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-light">Contact Us</Link></li>
                            <li><a href="#" className="hover:text-primary-light">Shop All</a></li>
                            <li><a href="#" className="hover:text-primary-light">Flower</a></li>
                        </ul>
                    </div>

                    {/* Quick Links Group - Column 2 */}
                    <div className="lg:col-span-2 mt-0 lg:mt-12">
                        <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase">
                            <li><a href="#" className="hover:text-primary-light">Mushrooms</a></li>
                            <li><a href="#" className="hover:text-primary-light">Support</a></li>
                            <li><a href="#" className="hover:text-primary-light">Reward</a></li>
                            <li><a href="#" className="hover:text-primary-light">Blog</a></li>
                            <li><a href="#" className="hover:text-primary-light">Shipping Faq</a></li>
                        </ul>
                    </div>

                    {/* Contact & Misc */}
                    <div className="lg:col-span-4">
                        <div className="mb-12">
                            <h4 className="text-sm font-bold mb-8 uppercase tracking-widest">CONTACT US</h4>
                            <p className="text-gray-500 text-sm font-medium">info@ananta.com</p>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold mb-8 uppercase tracking-widest">MORE</h4>
                            <div className="grid grid-cols-2 gap-4 text-gray-500 text-xs font-bold uppercase tracking-tight">
                                <a href="#" className="hover:text-white">Buy weed India</a>
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                                <a href="#" className="hover:text-white">Terms & Conditions</a>
                                <a href="#" className="hover:text-white">Out of Stock</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-600 text-[11px] font-medium tracking-tight">© 2026 Ananta. All Rights Reserved.</p>
                    <div className="flex gap-8 text-gray-600 text-[11px] font-bold tracking-tight uppercase">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
