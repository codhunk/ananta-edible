import { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, Share2, Heart, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState('28g');
    const [activeImage, setActiveImage] = useState(0);

    const product = {
        title: "2 Oz Deal Watermelon Zkittlez + Purple Gushers",
        price: "$80.00",
        rating: 4.8,
        reviews: 135,
        category: "Flower",
        sku: "AN-WZ-001",
        tags: ["Sativa 100%", "Premium", "Best Seller"],
        description: "A premium blend of Watermelon Zkittlez and Purple Gushers, offering a unique aromatic experience and potent effects. Grown with organic practices to ensure the highest quality and purity.",
        images: [
            "/assets/products/chamanfresh.png",
            "/assets/products/chamanfresh.png",
            "/assets/products/chamanfresh.png",
            "/assets/products/chamanfresh.png"
        ]
    };

    const weights = ['28g', '1/2lb', '1/4lb', '1lb'];

    const relatedProducts = [
        {
            image: "https://via.placeholder.com/400?text=Related+1",
            category: "Flower",
            title: "Blueberry Kush Premium Indica",
            rating: 4.7,
            reviews: 98,
            basePrice: "$65.00"
        },
        {
            image: "https://via.placeholder.com/400?text=Related+2",
            category: "Edibles",
            title: "Sour Watermelon Gummies 100mg",
            rating: 4.9,
            reviews: 210,
            basePrice: "$25.00"
        },
        {
            image: "https://via.placeholder.com/400?text=Related+3",
            category: "Concentrates",
            title: "Golden Resin Diamond Extract",
            rating: 4.6,
            reviews: 45,
            basePrice: "$120.00"
        },
        {
            image: "https://via.placeholder.com/400?text=Related+4",
            category: "Flower",
            title: "Pineapple Express Sativa",
            rating: 4.8,
            reviews: 156,
            basePrice: "$75.00"
        }
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">


            <main className="pb-12 sm:pb-24">
                {/* Breadcrumbs */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gray-50 py-3 sm:py-4 border-b border-gray-100"
                >
                    <div className="container-custom px-4">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black tracking-[0.2em] text-gray-400">
                            <a href="/" className="hover:text-primary transition-colors">Home</a>
                            <span>/</span>
                            <a href="#" className="hover:text-primary transition-colors">{product.category}</a>
                            <span>/</span>
                            <span className="text-primary-dark truncate max-w-[150px] sm:max-w-none underline decoration-primary-light/30">{product.title}</span>
                        </div>
                    </div>
                </motion.div>

                <div className="container-custom px-4 py-8 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                        {/* Gallery Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4 sm:space-y-8"
                        >
                            <div className="aspect-square rounded-[32px] sm:rounded-[48px] bg-gray-50 border border-gray-100 overflow-hidden group relative shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImage}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={product.images[activeImage]}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-6 sm:p-16"
                                    />
                                </AnimatePresence>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white shadow-2xl rounded-2xl flex items-center justify-center text-gray-300 hover:text-red-500 transition-colors z-20"
                                >
                                    <Heart size={24} />
                                </motion.button>

                                <div className="absolute inset-x-4 bottom-1/2 translate-y-1/2 flex justify-between pointer-events-none px-2 lg:px-6">
                                    <motion.button
                                        whileHover={{ x: -2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => setActiveImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                                        className="pointer-events-auto w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-primary-dark shadow-lg"
                                    >
                                        <ChevronLeft size={24} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ x: 2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => setActiveImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                                        className="pointer-events-auto w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-primary-dark shadow-lg"
                                    >
                                        <ChevronRight size={24} />
                                    </motion.button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-3 sm:gap-6">
                                {product.images.map((img, i) => (
                                    <motion.button
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        onClick={() => setActiveImage(i)}
                                        className={`aspect-square rounded-2xl sm:rounded-3xl border-2 transition-all p-2 sm:p-4 bg-gray-50 shadow-sm ${activeImage === i ? 'border-primary-light ring-4 ring-primary-light/10 bg-white' : 'border-transparent'}`}
                                    >
                                        <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col text-center lg:text-left"
                        >
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xs sm:text-sm font-black text-primary-light tracking-[0.4em] mb-4"
                            >
                                {product.category}
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-6 sm:mb-8 leading-tight tracking-tighter"
                            >
                                {product.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10"
                            >
                                <div className="flex bg-secondary/10 px-4 py-2 rounded-full gap-1 shadow-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} className={i < 4 ? "fill-secondary text-secondary" : "text-gray-200"} />
                                    ))}
                                </div>
                                <span className="text-xs sm:text-sm font-black text-gray-400 tracking-[0.2em] whitespace-nowrap">| {product.reviews} Reviews</span>
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="text-xs py-1.5 px-4 border-2 border-green-100 text-green-600 font-black bg-green-50 rounded-full lg:ml-auto tracking-widest shadow-sm shadow-green-100"
                                >
                                    In Stock
                                </motion.span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="text-3xl sm:text-4xl font-black text-primary-dark mb-10 sm:mb-12 flex items-baseline justify-center lg:justify-start gap-3"
                            >
                                {product.price}
                                <span className="text-xs sm:text-sm text-gray-400 font-bold tracking-[0.3em] not-italic">/ unit</span>
                            </motion.div>

                            <div className="w-full h-px bg-gray-100 mb-10 lg:block hidden"></div>

                            {/* Weight Selector */}
                            <div className="mb-10 sm:mb-16">
                                <motion.label
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="block text-xs font-black tracking-[0.3em] text-gray-400 mb-6"
                                >
                                    Select Weight
                                </motion.label>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                                    {weights.map((w, idx) => (
                                        <motion.button
                                            key={w}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.9 + idx * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedWeight(w)}
                                            className={`px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black tracking-widest border-2 transition-all text-[10px] sm:text-xs shadow-sm ${selectedWeight === w ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'bg-white border-gray-100 text-gray-400 hover:border-primary-light hover:text-primary-light'}`}
                                        >
                                            {w}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 sm:mb-16">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 }}
                                    className="flex items-center bg-gray-50 rounded-2xl border border-gray-100 p-1.5 w-full sm:w-auto justify-center shadow-inner"
                                >
                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors hover:bg-white rounded-xl shadow-sm"
                                    >
                                        <Minus size={20} />
                                    </motion.button>
                                    <span className="w-16 text-center font-black text-xl text-primary-dark">{quantity}</span>
                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors hover:bg-white rounded-xl shadow-sm"
                                    >
                                        <Plus size={20} />
                                    </motion.button>
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.2 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:flex-grow btn-primary !py-5 !text-xs sm:!text-sm shadow-2xl shadow-primary-light/30 flex items-center justify-center gap-4 font-black tracking-[0.3em]"
                                >
                                    <ShoppingCart size={20} />
                                    Add To Cart
                                </motion.button>
                            </div>

                            {/* Perks */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-y-6 sm:gap-y-8 mb-12 sm:mb-16 text-left px-4 lg:px-0"
                            >
                                {[
                                    { label: "Free Shipping" },
                                    { label: "Organic Grown" },
                                    { label: "Lab Tested" },
                                    { label: "Premium Grade" }
                                ].map((perk, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 sm:gap-4 text-[9px] sm:text-xs font-black text-gray-400 tracking-[0.2em] leading-none group"
                                    >
                                        <div className="w-8 h-8 bg-primary-light/10 rounded-xl flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        {perk.label}
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center lg:justify-start gap-12 border-t border-gray-100 pt-10"
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors text-[10px] font-black text-gray-400 tracking-[0.2em]"
                                >
                                    <Share2 size={16} />
                                    Share This
                                </motion.div>
                                <div className="text-[10px] font-black text-gray-400 tracking-[0.2em]">
                                    SKU: <span className="text-primary-dark underline decoration-primary-light/30 ml-2">{product.sku}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Tab Section */}
                <section className="py-16 sm:py-24 bg-white overflow-hidden">
                    <div className="container-custom px-4">
                        <div className="border-b border-gray-100 mb-12 flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-16">
                            {['Description', 'Specifications', 'Reviews'].map((tab, i) => (
                                <motion.button
                                    key={tab}
                                    whileHover={{ y: -2 }}
                                    className={`pb-6 text-[10px] sm:text-xs font-black tracking-[0.3em] transition-all relative ${i === 0 ? 'text-primary-dark' : 'text-gray-400 hover:text-primary'}`}
                                >
                                    {tab}
                                    {i === 0 && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary-light rounded-full" />}
                                </motion.button>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto lg:mx-0"
                        >
                            <p className="text-sm sm:text-lg text-gray-500 leading-relaxed mb-8 text-center lg:text-left font-medium">
                                Our Watermelon Zkittlez and Purple Gushers combo is carefully selected from the finest harvests. Each batch is curated to deliver an explosion of tropical flavors followed by a profound, long-lasting relaxation.
                            </p>
                            <motion.div
                                whileInView={{ scale: [1, 1.01, 1] }}
                                className="p-8 bg-primary-dark rounded-[32px] text-white/80 font-black tracking-widest text-[10px] leading-loose shadow-2xl border border-white/5"
                            >
                                "Experience the perfect balance of flavor and potency with our premium organic selections."
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden border-t border-gray-100">
                    <div className="container-custom px-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-12 sm:mb-20 tracking-tighter text-center lg:text-left"
                        >
                            Related <span className="text-primary-light">Products</span>
                        </motion.h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
                            {relatedProducts.map((p, i) => (
                                <ProductCard key={i} {...p} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
