import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-200 font-sans">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-8">
                    {/* Logo/Brand */}
                    <div className="lg:col-span-1">

                        <Link to="/" className="flex-shrink-0 z-20">
                            <div className="flex items-center gap-1">
                                <img
                                    src="/logo.jpeg"
                                    alt="Ananta Logo"
                                    className="w-auto h-auto max-w-[120px] md:max-w-[150px] rounded-lg"
                                />                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 mt-4 md:mt-5 font-medium leading-relaxed italic">"Cultivating Excellence, Harvesting Trust"</p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3 md:mb-5 tracking-wider font-display">Company</h3>
                        <ul className="space-y-2.5">
                            <li><Link to="/" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">About Us</Link></li>
                            <li><Link to="/brands" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Brands</Link></li>
                            <li><Link to="/innovation" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Innovation</Link></li>
                            <li><Link to="/impact" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Our Impact</Link></li>
                            <li><Link to="/people" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Our People</Link></li>
                            <li><Link to="/investors" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Investors</Link></li>
                        </ul>
                    </div>

                    {/* Businesses */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-3 md:mb-5 tracking-wider font-display">Businesses</h3>
                        <ul className="space-y-2.5">
                            <li><Link to="/edibles" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Edible Oils</Link></li>
                            <li><Link to="/food-essentials" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Food Essentials</Link></li>
                            <li><Link to="/fmcg" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">FMCG</Link></li>
                            <li><Link to="/industry-essentials" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Industry Essentials</Link></li>
                            <li><Link to="/bulk-orders" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">B2B & Solutions</Link></li>
                            <li><Link to="/exports" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Exports</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div className="mb-6 md:mb-8">
                            <h3 className="text-lg font-bold text-white mb-3 md:mb-5 tracking-wider font-display">Quick Links</h3>
                            <ul className="space-y-2.5">
                                <li><Link to="/newsroom" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Newsroom</Link></li>
                                <li><Link to="/fortune-foods" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Fortune Foods</Link></li>
                                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Contact Us</Link></li>
                                <li><Link to="/factory-locator" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">Factory Locator</Link></li>
                                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-all text-sm font-medium hover:translate-x-1 inline-block">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Enquire Now & Social Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold text-white mb-3 md:mb-5 tracking-wider font-display">Enquire Now</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-light mt-1">
                                    <i className="fa-solid fa-phone text-sm"></i>
                                </span>
                                <a href="tel:+917454957272" className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-tight">+91-7454957272</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-light mt-1">
                                    <i className="fa-solid fa-envelope text-sm"></i>
                                </span>
                                <a href="mailto:contact@anantaedible.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium tracking-tight">contact@anantaedible.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-light mt-1">
                                    <i className="fa-solid fa-location-dot text-sm"></i>
                                </span>
                                <span className="text-gray-400 text-sm font-medium leading-[1.6]">Ananta Edible, Agra, Uttar Pradesh, India 282001</span>
                            </li>
                        </ul>

                        <h3 className="text-lg font-bold text-white mb-5 tracking-wider font-display">Social links</h3>
                        <ul className="flex gap-5">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg" aria-label="Facebook">
                                    <i className="fa-brands fa-facebook-f text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-fuchsia-400 hover:bg-fuchsia-400 hover:text-white transition-all duration-300 shadow-lg" aria-label="Instagram">
                                    <i className="fa-brands fa-instagram text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-red-400 hover:bg-red-400 hover:text-white transition-all duration-300 shadow-lg" aria-label="YouTube">
                                    <i className="fa-brands fa-youtube text-lg"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-white transition-all duration-300 shadow-lg" aria-label="WhatsApp">
                                    <i className="fa-brands fa-whatsapp text-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/5 bg-primary-dark shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 text-xs tracking-widest text-center lg:text-left">&copy; {new Date().getFullYear()} Ananta Edible Oil. All Rights Reserved.</p>

                        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-6 text-[10px] tracking-[0.2em] order-3 lg:order-2">
                            <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link to="/disclaimer" className="text-gray-500 hover:text-white transition-colors">Legal Disclaimer</Link>
                            <Link to="/terms-conditions" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</Link>
                        </div>

                        <p className="text-gray-500 text-[10px] tracking-[0.2em] text-center lg:text-right order-2 lg:order-3 flex items-center gap-2">
                            Digital Experience by
                            <a href="https://www.webduality.in" className="text-primary-light hover:text-white transition-all duration-300 border-b border-primary-light/20 hover:border-white font-black" target="_blank" rel="noopener noreferrer">Webduality</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
