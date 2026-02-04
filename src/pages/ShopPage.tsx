import { useState } from 'react';
import { ChevronDown, LayoutGrid, List, Filter, ArrowRight, X } from 'lucide-react';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import NewsletterBanner from '../components/NewsletterBanner';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShopPage() {
    const [priceRange, setPriceRange] = useState(100);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = [
        { name: 'Flower', count: 45 },
        { name: 'Edibles', count: 32 },
        { name: 'Concentrates', count: 18 },
        { name: 'Mushrooms', count: 12 },
        { name: 'Vapes', count: 24 },
        { name: 'CBD', count: 15 },
        { name: 'Accessories', count: 9 }
    ];

    const products = [
        { image: "https://via.placeholder.com/400?text=Flower+1", category: "Flower", title: "2 Oz Deal Watermelon Zkittlez + Purple Gushers", rating: 4.6, reviews: 135, basePrice: "$80.00", tag: "Best Seller" },
        { image: "https://via.placeholder.com/400?text=Flower+2", category: "Flower", title: "Blueberry Kush Premium Indica", rating: 4.7, reviews: 98, basePrice: "$65.00" },
        { image: "https://via.placeholder.com/400?text=Flower+3", category: "Flower", title: "Sour Diesel High Potency Sativa", rating: 4.5, reviews: 76, basePrice: "$70.00", salePrice: "$55.00", tag: "On Sale" },
        { image: "https://via.placeholder.com/400?text=Flower+4", category: "Flower", title: "Pineapple Express Sativa", rating: 4.8, reviews: 156, basePrice: "$75.00" },
        { image: "https://via.placeholder.com/400?text=Flower+5", category: "Flower", title: "Northern Lights Indica", rating: 4.9, reviews: 210, basePrice: "$85.00" },
        { image: "https://via.placeholder.com/400?text=Flower+6", category: "Flower", title: "Girl Scout Cookies Hybrid", rating: 4.7, reviews: 189, basePrice: "$90.00" },
        { image: "https://via.placeholder.com/400?text=Flower+7", category: "Flower", title: "Jack Herer Sativa", rating: 4.6, reviews: 112, basePrice: "$70.00" },
        { image: "https://via.placeholder.com/400?text=Flower+8", category: "Flower", title: "OG Kush Hybrid", rating: 4.8, reviews: 245, basePrice: "$95.00" },
        { image: "https://via.placeholder.com/400?text=Flower+9", category: "Flower", title: "White Widow Hybrid", rating: 4.5, reviews: 134, basePrice: "$80.00" }
    ];

    const FiltersComp = () => (
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b-2 border-primary/10 pb-2 text-primary-dark">Categories</h3>
                <div className="space-y-4">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ x: 5 }}
                            className="flex justify-between items-center group cursor-pointer"
                        >
                            <span className="text-sm text-gray-400 font-black group-hover:text-primary-light transition-colors uppercase tracking-tight">{cat.name}</span>
                            <span className="text-xs font-black text-gray-300">({cat.count})</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b-2 border-primary/10 pb-2 text-primary-dark">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-primary-light mb-4"
                />
                <div className="flex justify-between text-xs font-black text-gray-400 uppercase tracking-widest">
                    <span>$0</span>
                    <span className="text-primary-light">${priceRange}</span>
                </div>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary !py-3 !text-xs mt-6 !bg-primary-dark shadow-lg shadow-primary-dark/10 font-black uppercase tracking-[0.2em]"
                >
                    Apply Filter
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-sm font-black uppercase tracking-widest mb-6 border-b-2 border-primary/10 pb-2 text-primary-dark">Status</h3>
                <div className="space-y-4">
                    {['In Stock', 'On Sale'].map(status => (
                        <label key={status} className="flex items-center gap-4 cursor-pointer group">
                            <div className="w-5 h-5 border-2 border-gray-100 rounded-lg flex items-center justify-center group-hover:border-primary-light transition-all bg-gray-50">
                                <motion.div
                                    initial={false}
                                    animate={{ scale: 1 }}
                                    className="w-2.5 h-2.5 bg-primary-light rounded-[2px] opacity-0 peer-checked:opacity-100"
                                ></motion.div>
                            </div>
                            <input type="checkbox" className="hidden peer" />
                            <span className="font-black text-xs uppercase tracking-widest text-gray-400 group-hover:text-primary-dark transition-colors">{status}</span>
                        </label>
                    ))}
                </div>
            </motion.div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">


            {/* Trust Banner */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-50 py-3 border-b border-gray-100"
            >
                <div className="container-custom px-4 flex flex-wrap justify-between items-center gap-4 text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-primary-dark">
                    <div className="flex items-center gap-2">
                        <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-1.5 h-1.5 bg-primary-light rounded-full"></motion.div>
                        Worldwide Shipping
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="w-1.5 h-1.5 bg-secondary rounded-full"></motion.div>
                        Secure Safe Payments
                    </div>
                    <div className="flex items-center gap-2 text-primary-light">
                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-primary-light rounded-full"></motion.div>
                        New Quality & Pricing
                    </div>
                </div>
            </motion.div>

            <main className="container-custom px-4 py-8 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">

                    {/* Desktop Sidebar Filters */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <FiltersComp />
                    </aside>

                    {/* Product Listing Area */}
                    <div className="flex-grow">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10 lg:mb-16 text-center lg:text-left"
                        >
                            <h1 className="text-4xl lg:text-5xl font-black text-primary-dark uppercase tracking-tighter mb-4 underline decoration-primary-light/20">Cannabis</h1>
                            <p className="text-xs sm:text-base text-gray-400 leading-relaxed max-w-3xl mx-auto lg:mx-0 font-medium">
                                Discover our premium range of organic cannabis products, meticulously curated for enthusiasts.
                            </p>
                        </motion.div>

                        {/* Toolbar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 py-6 border-y border-gray-100"
                        >
                            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
                                <div className="text-xs sm:text-sm font-black text-gray-400 uppercase tracking-[0.2em] italic">
                                    Showing <span className="text-primary-dark">1-9</span> of 45 results
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsSidebarOpen(true)}
                                    className="lg:hidden flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] px-6 py-3 bg-primary-dark text-white rounded-full shadow-xl shadow-primary-dark/20"
                                >
                                    <Filter size={14} /> Filter
                                </motion.button>
                            </div>

                            <div className="flex items-center gap-4 sm:gap-8 w-full sm:w-auto justify-center sm:justify-end">
                                <motion.div className="flex items-center gap-2 text-xs sm:text-sm font-black text-gray-400 uppercase tracking-[0.2em] cursor-pointer group">
                                    Sort: <span className="text-primary-dark flex items-center gap-1 group-hover:text-primary-light transition-colors underline decoration-primary-light/30">Latest <ChevronDown size={14} /></span>
                                </motion.div>
                                <div className="hidden sm:block h-6 w-px bg-gray-100"></div>
                                <div className="flex gap-3">
                                    <motion.button
                                        onClick={() => setViewMode('grid')}
                                        className={`p-2 sm:p-3 rounded-xl transition-all shadow-sm ${viewMode === 'grid' ? 'bg-primary text-white shadow-primary/20 scale-110' : 'bg-gray-50 text-gray-300 hover:text-primary'}`}
                                    >
                                        <LayoutGrid size={18} />
                                    </motion.button>
                                    <motion.button
                                        onClick={() => setViewMode('list')}
                                        className={`p-2 sm:p-3 rounded-xl transition-all shadow-sm ${viewMode === 'list' ? 'bg-primary text-white shadow-primary/20 scale-110' : 'bg-gray-50 text-gray-300 hover:text-primary'}`}
                                    >
                                        <List size={18} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Normal Grid */}
                        <div className={`grid gap-6 sm:gap-10 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                            {products.map((p, i) => (
                                <motion.div
                                    layout
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className={viewMode === 'list' ? 'bg-gray-50/50 rounded-[40px] border border-gray-100 p-2' : ''}
                                >
                                    <ProductCard {...p} />
                                </motion.div>
                            ))}
                        </div>

                        {/* Featured Banner */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="my-16 sm:my-24 w-full h-auto sm:h-80 bg-primary-dark rounded-[40px] relative overflow-hidden flex flex-col sm:flex-row items-center p-10 sm:p-16 group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-cover opacity-10 bg-[url('https://images.unsplash.com/photo-1596545160910-c089dc7ba43a?q=80&w=2000&auto=format&fit=crop')]"></div>
                            <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-center text-white text-center sm:text-left gap-10">
                                <div className="max-w-md">
                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary mb-4 underline">Limited Recommendation</p>
                                    <h2 className="text-2xl sm:text-4xl font-black mb-8 uppercase tracking-tighter leading-tight">Mix And Match Shatter/Budder 28g</h2>
                                    <div className="flex flex-col sm:flex-row items-center gap-6">
                                        <motion.button className="btn-primary !py-4 !px-10 !text-[10px] !bg-primary-light w-full sm:w-auto shadow-xl shadow-primary-light/20 uppercase tracking-[0.2em] font-black">Shop Now</motion.button>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-500 line-through text-xs font-black">$120.00</span>
                                            <span className="text-secondary text-2xl sm:text-3xl font-black">$99.00</span>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [6, 0, 6] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="sm:block w-36 h-36 sm:w-56 sm:h-56 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-6 shadow-2xl"
                                >
                                    <img src="https://via.placeholder.com/200?text=Premium" alt="Featured" className="w-full h-full object-contain filter drop-shadow-2xl" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Pagination */}
                        <div className="mt-16 sm:mt-24 pt-12 border-t border-gray-100 flex justify-center">
                            <div className="flex gap-4">
                                {[1, 2, 3].map(num => (
                                    <motion.button
                                        key={num}
                                        whileHover={{ y: -5 }}
                                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-[18px] border-2 font-black text-xs sm:text-sm transition-all shadow-md ${num === 2 ? 'bg-primary border-primary text-white' : 'bg-white border-gray-100 text-primary-dark'}`}
                                    >
                                        {num}
                                    </motion.button>
                                ))}
                                <motion.button className="w-10 h-10 sm:w-14 sm:h-14 rounded-[18px] border-2 border-gray-100 flex items-center justify-center text-primary-dark bg-white shadow-md">
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Mobile Sidebar Modal */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[80] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            className="fixed top-0 left-0 h-full w-[300px] bg-white z-[90] p-10 overflow-y-auto shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-black text-primary-dark uppercase tracking-[0.2em] text-xl underline decoration-primary-light/30">Filters</span>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 p-2">
                                    <X size={24} />
                                </button>
                            </div>
                            <FiltersComp />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <NewsletterBanner />
            <Footer />
        </div>
    );
}
