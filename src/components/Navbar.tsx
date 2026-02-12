import { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Products',
            path: '#',
            hasDropdown: true,
            subLinks: [
                { name: 'Mustard Oil', path: '/shop' },
                { name: 'Refined Oil', path: '/shop' }
            ]
        },
        { name: 'Bulk Orders', path: '/contact' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className="w-full bg-white fixed top-0 z-50 shadow-sm">
            {/* Top Banner */}
            <div className="w-full bg-primary-dark text-white py-2 text-center text-xs sm:text-sm font-medium px-4">
                ISO 9001:2015 & FSSAI Certified Manufacturer | Bulk Supply Available <span className="ml-2 bg-white/20 px-2 py-0.5 rounded whitespace-nowrap">Call: +91-9876543210</span>
            </div>

            <div className="container-custom py-3 sm:py-4">

                <div className="flex items-center justify-between gap-8 lg:gap-16">
                    {/* Logo (Leftside) */}
                    <Link to="/" className="flex-shrink-0 z-20">
                        <div className=" p-1 rounded flex items-center gap-1">
                            <img
                                src="/logo_trans.png"
                                alt="Ananta Logo"
                                className="w-auto h-auto max-w-[120px] md:max-w-[150px]"
                            />
                        </div>

                    </Link>

                    {/* Navigation Links (Center) - Using flex-1 to take available space and center content */}
                    <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 text-[14px] font-bold text-gray-700 whitespace-nowrap">
                        {navLinks.map((link) => (
                            link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => setIsProductsOpen(true)}
                                    onMouseLeave={() => setIsProductsOpen(false)}
                                >
                                    <button className="hover:text-primary-light transition-colors tracking-wider flex items-center gap-1 relative pb-1">
                                        {link.name}
                                        <ChevronDown size={12} />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300 ease-out"></span>
                                    </button>
                                    <AnimatePresence>
                                        {isProductsOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[180px] border border-gray-100"
                                            >
                                                {link.subLinks?.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.path}
                                                        className="block px-4 py-2 hover:text-primary-light transition-colors"
                                                    >
                                                        <span className="relative inline-block pb-1 group">
                                                            {subLink.name}
                                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300 ease-out"></span>
                                                        </span>
                                                    </Link>

                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="hover:text-primary-light transition-colors tracking-wider flex items-center gap-1 relative pb-1 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light group-hover:w-full transition-all duration-300 ease-out"></span>
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Right Side: Search & Mobile Toggle */}
                    <div className="flex items-center gap-4 justify-end flex-shrink-0 z-20">
                        {/* Search Bar - Desktop */}
                        <div className="hidden md:flex relative w-56 xl:w-72">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-gray-50 border border-gray-100 rounded-full py-2.5 pl-5 pr-12 ring-2 ring-primary-light/20 border-primary-light outline-none text-xs font-medium transition-all"
                            />
                            <button className="absolute right-1 top-1 w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <Search size={14} />
                            </button>
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
                <div className="mt-4 md:hidden relative">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-gray-50 border border-gray-100 rounded-full py-2.5 px-5 focus:ring-2 focus:ring-primary-light/20 outline-none text-sm"
                    />
                    <button className="absolute right-1.5 top-1.5 w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center text-white">
                        <Search size={14} />
                    </button>
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
                                <span className="font-black text-primary-dark tracking-tighter">Menu</span>
                                <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-primary-dark">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto py-6">
                                {navLinks.map((link) => (
                                    link.hasDropdown ? (
                                        <div key={link.name}>
                                            <div className="px-8 py-4 text-sm font-bold tracking-widest text-gray-700">
                                                {link.name}
                                            </div>
                                            {link.subLinks?.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    to={subLink.path}
                                                    onClick={() => setIsMenuOpen(false)}
                                                    className="block px-12 py-3 text-sm font-medium text-gray-500 hover:text-primary-light hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary-light mb-1"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block px-8 py-4 text-sm font-bold tracking-widest text-gray-500 hover:text-primary-light hover:bg-gray-50 transition-all border-l-4 border-transparent hover:border-primary-light mb-1"
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))}
                            </div>

                            <div className="p-8 border-t border-gray-100 space-y-4">
                                <button className="w-full btn-primary !py-3 !text-xs">Your Account</button>
                                <p className="text-xs text-center text-gray-400 font-bold tracking-[0.2em]">© 2026 Ananta</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
