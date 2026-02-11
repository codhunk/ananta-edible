import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LayoutGrid, List, Filter, X, SlidersHorizontal, Check, Zap, ShieldCheck, Heart } from 'lucide-react';
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

const oilProducts = [
    {
        id: 101,
        image: "/sudhkolhu1.png",
        category: "Edibles",
        type: "Mustard Oil",
        title: "Kachi Ghani Mustard Oil",
        rating: 4.9,
        reviews: 2450,
        basePrice: "185",
        price: 185,
        tag: "Best Seller"
    },
    {
        id: 102,
        image: "/sudhkolhu.png",
        category: "Edibles",
        type: "Refined Oil",
        title: "Soyabean Refined Oil",
        rating: 4.8,
        reviews: 1840,
        basePrice: "145",
        price: 145
    },
    {
        id: 103,
        image: "/sudhkolhu1.png",
        category: "Edibles",
        type: "Mustard Oil",
        title: "Sudh Kolhu Mustard Oil",
        rating: 4.9,
        reviews: 3120,
        basePrice: "195",
        salePrice: "175",
        price: 175,
        tag: "Premium"
    },
    {
        id: 104,
        image: "/sudhkolhu.png",
        category: "Edibles",
        type: "Refined Oil",
        title: "Rice Bran Refined Oil",
        rating: 4.7,
        reviews: 980,
        basePrice: "160",
        price: 160
    },
    {
        id: 105,
        image: "/sudhkolhu1.png",
        category: "Edibles",
        type: "Mustard Oil",
        title: "Shudh Hara Mustard Oil",
        rating: 4.8,
        reviews: 1560,
        basePrice: "170",
        price: 170
    },
    {
        id: 106,
        image: "/sudhkolhu.png",
        category: "Edibles",
        type: "Refined Oil",
        title: "Sunflower Refined Oil",
        rating: 4.9,
        reviews: 2100,
        basePrice: "155",
        price: 155,
        tag: "Healthy Heart"
    }
];

const productTypes = ["All", "Mustard Oil", "Refined Oil"];
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
    const [selectedType, setSelectedType] = useState("All");
    const [priceRange, setPriceRange] = useState(300);
    const [sortBy, setSortBy] = useState("featured");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        let result = oilProducts.filter(p => p.price <= priceRange);
        if (selectedType !== "All") {
            result = result.filter(p => p.type === selectedType);
        }
        return result.sort((a, b) => {
            switch (sortBy) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                case 'reviews': return b.reviews - a.reviews;
                default: return 0;
            }
        });
    }, [selectedType, priceRange, sortBy]);

    const FilterSidebar = () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-xs font-black tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Filter size={14} /> Oil Category
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
                <h3 className="text-xs font-black tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <SlidersHorizontal size={14} /> Price (₹/Ltr)
                </h3>
                <div className="px-1">
                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary-light"
                    />
                    <div className="flex justify-between mt-4 text-xs font-bold text-gray-500">
                        <span>₹0</span>
                        <span className="text-primary-light bg-primary/5 px-2 py-1 rounded">₹{priceRange}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={() => { setSelectedType("All"); setPriceRange(500); setSortBy("featured"); }}
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
                    src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Edible Oils Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary-light font-black tracking-[0.2em] mb-4 block">100% Purity guaranteed</span>
                        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-black text-white mb-6 tracking-tight">
                            Edible oil <span className="text-primary-light underline decoration-white/20">refined</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-200 font-medium max-w-2xl mx-auto"
                    >
                        Bringing the finest selection of cold-pressed and refined oils from India's heartlands to your kitchen.
                    </motion.p>
                </div>
            </section>

            {/* Quality Pillars */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Cold Pressed", desc: "Nutrients preserved through traditional Kachi Ghani processing.", icon: <Zap size={24} /> },
                        { title: "Lab Tested", desc: "Every batch undergoes 40+ rigorous quality checks for purity.", icon: <ShieldCheck size={24} /> },
                        { title: "Heart Healthy", desc: "Low in saturated fats and enriched with Vitamin A & D.", icon: <Heart size={24} /> }
                    ].map((pillar, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100/50">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-light shadow-sm">
                                {pillar.icon}
                            </div>
                            <div>
                                <h4 className="font-black text-primary-dark text-sm tracking-tight">{pillar.title}</h4>
                                <p className="text-xs text-gray-500 font-medium">{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white min-h-[800px]">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar Desktop */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 sticky top-32">
                                <FilterSidebar />
                            </div>
                        </aside>

                        {/* Product Area */}
                        <div className="flex-grow">
                            {/* Toolbar */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-gray-100"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                                    <p className="text-sm font-black text-gray-400 tracking-widest">
                                        Showing <span className="text-primary-dark">{filteredProducts.length}</span> Varieties
                                    </p>
                                    <button
                                        onClick={() => setIsSidebarOpen(true)}
                                        className="lg:hidden flex items-center gap-2 text-xs font-black tracking-widest bg-gray-100 px-6 py-3 rounded-full text-primary-dark"
                                    >
                                        <Filter size={14} /> Filters
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsSortOpen(!isSortOpen)}
                                            className="flex items-center gap-2 text-xs font-black text-gray-500 tracking-widest hover:text-primary-dark transition-colors"
                                        >
                                            Sort <ChevronDown size={14} className={`transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isSortOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute right-0 top-full mt-4 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 z-30 overflow-hidden"
                                                >
                                                    {sortOptions.map(option => (
                                                        <button
                                                            key={option.value}
                                                            onClick={() => { setSortBy(option.value); setIsSortOpen(false); }}
                                                            className={`w-full text-left px-5 py-3 text-[10px] font-black tracking-widest transition-colors ${sortBy === option.value ? 'text-primary-light bg-primary/5' : 'text-gray-400 hover:text-primary-dark hover:bg-gray-50'}`}
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
                                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-primary-light text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:text-primary-light'}`}
                                        >
                                            <LayoutGrid size={18} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-primary-light text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:text-primary-light'}`}
                                        >
                                            <List size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Product Grid */}
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={selectedType + sortBy}
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                                >
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <motion.div
                                                key={product.id}
                                                variants={itemVariants}
                                                layout
                                            >
                                                <ProductCard {...product} />
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="col-span-full py-20 text-center bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                                            <p className="text-gray-400 font-black tracking-widest text-sm mb-4">No varieties found</p>
                                            <button
                                                onClick={() => { setSelectedType("All"); setPriceRange(500); }}
                                                className="bg-white px-8 py-3 rounded-full shadow-sm text-xs font-black tracking-widest text-primary-light border border-gray-100"
                                            >
                                                Show All Products
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
                            className="fixed inset-0 bg-primary-dark/40 backdrop-blur-sm z-[200] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 35 }}
                            className="fixed top-0 left-0 h-full w-[320px] bg-white z-[201] p-10 overflow-y-auto shadow-[20px_0_60px_rgba(0,0,0,0.1)]"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <span className="font-black text-primary-dark tracking-widest text-xl">Refine selection</span>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-300 p-2 hover:text-primary-dark transition-colors">
                                    <X size={28} />
                                </button>
                            </div>
                            <FilterSidebar />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <NewsletterBanner />
        </div>
    );
}
