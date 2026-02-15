import { useState } from 'react';
import { Star, Share2, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
    const [activeImage, setActiveImage] = useState(0);
    const [activeTab, setActiveTab] = useState('Description');

    const product = {
        title: "Sudhdhya Kolhu Kachi Ghani Mustard Oil",
        rating: 4.9,
        reviews: 245,
        category: "Mustard Oil",
        sku: "ANA-SK-001",
        tags: ["Traditional", "Cold Pressed", "Best Seller"],
        description: "Experience the authentic taste of tradition with our Sudhdhya Kolhu Kachi Ghani Mustard Oil. Cold-pressed using traditional methods to retain its natural pungency and health benefits, this oil is perfect for a wide range of culinary applications.",
        images: [
            "/assets/products/sudhdhya_kolhu.png",
            "/assets/products/sudhdhya_kolhu.png",
            "/assets/products/sudhdhya_kolhu.png",
            "/assets/products/sudhdhya_kolhu.png"
        ]
    };

    const relatedProducts = [
        {
            image: "/assets/products/Refined_Oil_bottle.png",
            category: "Refined Oil",
            title: "Ananta Premium Refined Oil Bottle",
            rating: 4.7,
            reviews: 189
        },
        {
            image: "/assets/products/Saaz_Gold.png",
            category: "Mustard Oil",
            title: "Saaz Gold Pure Mustard Oil Bottle",
            rating: 4.9,
            reviews: 312
        },
        {
            image: "/assets/products/sarso_tin.png",
            category: "Traditional",
            title: "Sarso Tin Pure Mustard Oil - 15L",
            rating: 4.6,
            reviews: 156
        },
        {
            image: "/assets/products/chamanfresh.png",
            category: "Refined Oil",
            title: "Chaman Fresh Refined Oil Can",
            rating: 4.7,
            reviews: 178
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
                            <div className="aspect-square rounded-[32px] sm:rounded-[48px] bg-gray-50 border border-gray-100 overflow-hidden group relative">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImage}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        src={product.images[activeImage]}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-6 sm:p-20"
                                    />
                                </AnimatePresence>


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
                            </motion.div>



                            <div className="w-full h-px bg-gray-100 mb-10 lg:block hidden"></div>



                            {/* Perks */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-2 gap-y-6 sm:gap-y-8 mb-12 sm:mb-16 text-left px-4 lg:px-0"
                            >
                                {[
                                    { label: "100% Pure Kachi Ghani" },
                                    { label: "No Preservatives" },
                                    { label: "Traditional Extraction" },
                                    { label: "High Pungency" }
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
                            {['Description', 'Specifications', 'Reviews'].map((tab) => (
                                <motion.button
                                    key={tab}
                                    whileHover={{ y: -2 }}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-6 text-[10px] sm:text-xs font-black tracking-[0.3em] transition-all relative ${activeTab === tab ? 'text-primary-dark' : 'text-gray-400 hover:text-primary'}`}
                                >
                                    {tab}
                                    {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-primary-light rounded-full" />}
                                </motion.button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'Description' && (
                                <motion.div
                                    key="description"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="space-y-6"
                                >
                                    <p className="text-sm sm:text-lg text-gray-500 leading-tight text-center lg:text-left font-medium">
                                        Our Sudhdhya Kolhu Kachi Ghani Mustard Oil is the gold standard of purity. Sourced from the finest mustard seeds, it undergoes a traditional cold-pressed extraction process to ensure every drop is packed with natural nutrients and that signature pungent aroma that defines authentic Indian cooking.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                        <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                                            <h4 className="text-sm font-black text-primary-dark tracking-widest mb-4 uppercase">Health Benefits</h4>
                                            <ul className="text-xs text-gray-500 space-y-3 font-bold tracking-wide">
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Rich in Monounsaturated Fatty Acids</li>
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Promotes Heart Health & Digestion</li>
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Natural Antimicrobial Properties</li>
                                            </ul>
                                        </div>
                                        <div className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                                            <h4 className="text-sm font-black text-primary-dark tracking-widest mb-4 uppercase">Culinary Uses</h4>
                                            <ul className="text-xs text-gray-500 space-y-3 font-bold tracking-wide">
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Deep Frying & Sautéing</li>
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Pickle Preparation</li>
                                                <li className="flex items-start gap-2"><span className="text-primary-light">•</span> Marination & Salad Dressings</li>
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Specifications' && (
                                <motion.div
                                    key="specifications"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="overflow-x-auto"
                                >
                                    <table className="w-full text-left border-collapse mt-4">
                                        <tbody>
                                            {[
                                                ['Extraction Method', 'Traditional Cold Pressed (Kachi Ghani)'],
                                                ['Seeds Used', 'Grade A Black Mustard Seeds'],
                                                ['Shelf Life', '12 Months from Packaging'],
                                                ['Net Volume', '1 Liter / 5 Liters / 15 Liters'],
                                                ['Storage', 'Store in a cool, dry place away from sunlight']
                                            ].map(([label, value], i) => (
                                                <tr key={i} className="border-b border-gray-50 group hover:bg-gray-50/30 transition-colors">
                                                    <td className="py-4 pr-10 text-[10px] sm:text-xs font-black text-gray-400 tracking-[0.3em] uppercase w-1/3 leading-tight">{label}</td>
                                                    <td className="py-4 text-xs sm:text-sm font-black text-primary-dark tracking-wide">{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </motion.div>
                            )}

                            {activeTab === 'Reviews' && (
                                <motion.div
                                    key="reviews"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-center py-10"
                                >
                                    <div className="flex justify-center mb-6">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-secondary text-secondary" />)}
                                    </div>
                                    <p className="text-gray-500 font-bold tracking-widest text-xs">Customer reviews coming soon...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
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
