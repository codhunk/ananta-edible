import { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/shop' },
        { name: 'Flower', path: '#' },
        { name: 'Edibles', path: '#' },
        { name: 'Promotions', path: '#' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Blog', path: '#' },
    ];

    return (
        <nav className="w-full bg-white fixed top-0 z-50 shadow-sm">
            {/* Top Banner */}
            <div className="w-full bg-primary-dark text-white py-2 text-center text-xs sm:text-sm font-medium px-4">
                LIMITED OFFER: 30% OFF. Use ANANTA30 at Checkout. <span className="ml-2 bg-white/20 px-2 py-0.5 rounded whitespace-nowrap">23 : 15 : 00</span>
            </div>

            <div className="container-custom py-3 sm:py-4">
                {/* Main Header Row */}
                <div className="flex items-center justify-between gap-4 lg:gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <div className="bg-secondary p-1.5 sm:p-2 rounded flex items-center gap-1">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center">
                                <span className="text-secondary font-bold text-xs">A</span>
                            </div>
                            <span className="text-primary font-bold text-base sm:text-xl tracking-tighter">ANANTA</span>
                        </div>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-grow max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-gray-100 border-none rounded-full py-2 px-6 focus:ring-2 focus:ring-primary-light outline-none text-sm"
                        />
                        <button className="absolute right-1 top-1 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                            <Search size={14} />
                        </button>
                    </div>

                    {/* Icons & Mobile Menu Toggle */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:text-primary-light transition-colors text-xs font-bold uppercase">
                            <span>Account</span>
                        </div>

                        <div className="relative cursor-pointer">
                            <ShoppingCart size={20} className="text-gray-700 sm:w-6 sm:h-6" />
                            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">0</span>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-1 text-primary-dark hover:text-primary-light transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search - Visible only on small screens */}
                <div className="mt-3 md:hidden relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-100 border-none rounded-full py-2 px-6 focus:ring-2 focus:ring-primary-light outline-none text-sm"
                    />
                    <button className="absolute right-1 top-1 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-white">
                        <Search size={14} />
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 mt-4 text-[11px] font-bold text-gray-700">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="hover:text-primary-light transition-colors uppercase tracking-wider flex items-center gap-1"
                        >
                            {link.name}
                            {['Flower', 'Promotions'].includes(link.name) && <ChevronDown size={12} />}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <span className="font-black text-primary-dark tracking-tighter uppercase">Menu</span>
                                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-primary-dark">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto py-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-primary-light hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary-light mb-1"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="p-8 border-t border-gray-100 space-y-4">
                                <button className="w-full btn-primary !py-3 !text-xs">Your Account</button>
                                <p className="text-xs text-center text-gray-400 font-bold uppercase tracking-[0.2em]">© 2026 Ananta</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
