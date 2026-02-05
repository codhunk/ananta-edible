import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LayoutGrid, List, Filter, X, SlidersHorizontal, Check } from 'lucide-react';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import NewsletterBanner from '../components/NewsletterBanner';
import { useState, useMemo } from 'react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

// Enhanced mock data with 'type' and numeric 'price' for filtering/sorting
const oilProducts = [
    {
        id: 101,
        image: "https://images.unsplash.com/photo-1629196911514-cfd8d628b26e?q=80&w=2000&auto=format&fit=crop",
        category: "Edibles",
        type: "Oils",
        title: "Full Spectrum CBD Oil 1000mg",
        rating: 4.9,
        reviews: 215,
        basePrice: "$89.99",
        price: 89.99,
        tag: "Best Seller"
    },
    {
        id: 102,
        image: "https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?q=80&w=2076&auto=format&fit=crop",
        category: "Edibles",
        type: "Gummies",
        title: "THC Infused Gummies (Sativa)",
        rating: 4.8,
        reviews: 142,
        basePrice: "$35.00",
        price: 35.00
    },
    {
        id: 103,
        image: "https://images.unsplash.com/photo-1616147424976-b33a5b06f52e?q=80&w=2000&auto=format&fit=crop",
        category: "Edibles",
        type: "Tinctures",
        title: "Sleep Aid CBN Tincture",
        rating: 4.7,
        reviews: 98,
        basePrice: "$65.00",
        salePrice: "$55.00",
        price: 55.00,
        tag: "On Sale"
    },
    {
        id: 104,
        image: "https://images.unsplash.com/photo-1608681288307-e54737d7a82c?q=80&w=2000&auto=format&fit=crop",
        category: "Edibles",
        type: "Capsules",
        title: "Relaxation Cannabis Capsules",
        rating: 4.9,
        reviews: 74,
        basePrice: "$50.00",
        price: 50.00
    },
    {
        id: 105,
        image: "https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1978&auto=format&fit=crop",
        category: "Edibles",
        type: "Oils",
        title: "Organic Hemp Seed Oil",
        rating: 4.6,
        reviews: 156,
        basePrice: "$30.00",
        price: 30.00
    },
    {
        id: 106,
        image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2070&auto=format&fit=crop",
        category: "Edibles",
        type: "Gummies",
        title: "Delta-8 THC Gummies",
        rating: 4.5,
        reviews: 89,
        basePrice: "$40.00",
        price: 40.00
    }
];

const productTypes = ["All", "Oils", "Gummies", "Tinctures", "Capsules"];
const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Top Rated", value: "rating" },
    { label: "Most Reviews", value: "reviews" }
];

export default function EdiblesPage() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Filter & Sort State
    const [selectedType, setSelectedType] = useState("All");
    const [priceRange, setPriceRange] = useState(100);
    const [sortBy, setSortBy] = useState("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Filter Logic
    const filteredProducts = useMemo(() => {
        let result = oilProducts.filter(p => p.price <= priceRange);

        if (selectedType !== "All") {
            result = result.filter(p => p.type === selectedType);
        }

        // Sort Logic
        return result.sort((a, b) => {
            switch (sortBy) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'reviews': return b.reviews - a.reviews;
                default: return 0; // featured (id order or as is)
            }
        });
    }, [selectedType, priceRange, sortBy]);

    // Reusable Filter Sidebar Component
    const FilterSidebar = () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Filter size={14} /> Product Type
                </h3>
                <div className="space-y-3">
                    {productTypes.map(type => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${selectedType === type ? 'bg-primary-dark border-primary-dark' : 'border-gray-200 bg-white group-hover:border-primary-light'}`}>
                                {selectedType === type && <Check size={12} className="text-white" />}
                            </div>
                            <span className={`text-sm font-bold transition-colors ${selectedType === type ? 'text-primary-dark' : 'text-gray-500 group-hover:text-primary-light'}`}>
                                {type}
                            </span>
                            <input
                                type="radio"
                                name="type"
                                className="hidden"
                                checked={selectedType === type}
                                onChange={() => setSelectedType(type)}
                            />
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <SlidersHorizontal size={14} /> Max Price
                </h3>
                <div className="px-1">
                    <input
                        type="range"
                        min="0"
                        max="150"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary-dark"
                    />
                    <div className="flex justify-between mt-4 text-xs font-bold text-gray-500">
                        <span>$0</span>
                        <span className="text-primary-dark bg-secondary/20 px-2 py-1 rounded">${priceRange}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={() => { setSelectedType("All"); setPriceRange(150); setSortBy("featured"); }}
                className="text-xs font-bold text-gray-400 underline hover:text-primary-dark transition-colors"
            >
                Reset Filters
            </button>
        </div>
    );

    return (
        <div className="w-full bg-background min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/80 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1615485925708-cf0501635748?q=80&w=2000&auto=format&fit=crop"
                    alt="Edibles Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-secondary font-black tracking-[0.2em] uppercase mb-4 block">Premium Selection</span>
                        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
                            Oil Refined Edibles
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-medium max-w-2xl mx-auto"
                    >
                        Discover our curative collection of high-purity cannabis oils, tinctures, and infused delights.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white min-h-[800px]">
                <div className="container-custom">

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar Desktop */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 sticky top-24">
                                <FilterSidebar />
                            </div>
                        </aside>

                        {/* Product Area */}
                        <div className="flex-grow">
                            {/* Toolbar */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-gray-100"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                                        Found <span className="text-primary-dark">{filteredProducts.length}</span> Items
                                    </p>

                                    {/* Mobile Filter Toggle */}
                                    <button
                                        onClick={() => setIsSidebarOpen(true)}
                                        className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-gray-100 px-4 py-2 rounded-full text-primary-dark"
                                    >
                                        <Filter size={14} /> Filters
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                    {/* Sort Dropdown */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsSortOpen(!isSortOpen)}
                                            className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest hover:text-primary-dark transition-colors"
                                        >
                                            Sort: <span className="text-primary-dark">{sortOptions.find(o => o.value === sortBy)?.label}</span> <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        <AnimatePresence>
                                            {isSortOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-30"
                                                >
                                                    {sortOptions.map(option => (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => { setSortBy(option.value); setIsSortOpen(false); }}
                                                            className={`w-full text-left px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors ${sortBy === option.value ? 'text-primary-dark bg-gray-50' : 'text-gray-500'}`}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <div className="h-6 w-px bg-gray-200 mx-2" />

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 hover:text-primary'}`}
                                        >
                                            <LayoutGrid size={18} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 hover:text-primary'}`}
                                        >
                                            <List size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Product Grid */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={selectedType + sortBy} // Only re-animate stagger on type or sort change, not price drag
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={`grid gap-6 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                                >
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <motion.div
                                                key={product.id}
                                                variants={itemVariants}
                                                layout
                                                className={viewMode === 'list' ? 'bg-gray-50 border border-gray-100 rounded-3xl p-4' : ''}
                                            >
                                                <ProductCard {...product} />
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-20 text-center">
                                            <p className="text-gray-400 font-bold text-lg">No products found matching your criteria.</p>
                                            <button
                                                onClick={() => { setSelectedType("All"); setPriceRange(150); }}
                                                className="mt-4 text-primary-dark underline font-bold"
                                            >
                                                Clear Filtering
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

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
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 h-full w-[300px] bg-white z-[90] p-8 overflow-y-auto shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-black text-primary-dark uppercase tracking-widest text-lg">Filters</span>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 p-2 hover:text-primary-dark">
                                    <X size={24} />
                                </button>
                            </div>
                            <FilterSidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <NewsletterBanner />
            <Footer />
        </div>
    );
}
