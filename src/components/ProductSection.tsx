import { useState } from 'react';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState('Best Sellers');
    const tabs = ['Best Sellers', 'Bundles & Promotions', 'On Sale'];

    const products = [
        {
            image: "https://via.placeholder.com/400?text=Flower+1",
            category: "Flower",
            title: "2 Oz Deal Watermelon Zkittlez + Purple Gushers",
            rating: 4.6,
            reviews: 135,
            basePrice: "$80.00 / gram",
            tag: "Sativa 100%"
        },
        {
            image: "https://via.placeholder.com/400?text=Concentrate+1",
            category: "Concentrates",
            title: "Mix And Match Shatter/Budder 28g (4 x 7G)",
            rating: 4.6,
            reviews: 135,
            basePrice: "$200.00",
            salePrice: "$102.00",
            unavailable: true,
            tag: "Indica 70%"
        },
        {
            image: "https://via.placeholder.com/400?text=Flower+2",
            category: "Flower",
            title: "2 Oz Deal Ahi Tuna + Master Tuna",
            rating: 4.6,
            reviews: 135,
            basePrice: "$200.00",
            salePrice: "$120.00",
            tag: "$60 ounce"
        }
    ];

    return (
        <section className="py-14 bg-background overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-black text-primary-dark uppercase tracking-tighter leading-tight">
                        BEST DISPENSARY TO BUY <br /> WEED ONLINE IN INDIA
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
                    {tabs.map((tab, idx) => (
                        <motion.button
                            key={tab}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest transition-all duration-300 border ${activeTab === tab
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                : 'bg-white border-gray-100 text-gray-500 hover:border-primary-light hover:text-primary-light'
                                }`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 rounded-3xl bg-primary-dark p-8 flex flex-col items-center justify-between text-center text-white relative overflow-hidden group shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>

                        <div className="relative z-10 w-full flex flex-col items-center h-full">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="mb-6"
                            >
                                <img src="https://via.placeholder.com/300?text=Best+Sellers" alt="Promo" className="w-32 h-32 sm:w-40 sm:h-40 object-contain group-hover:rotate-12 transition-transform duration-500 drop-shadow-2xl" />
                            </motion.div>
                            <h3 className="text-xl sm:text-2xl font-black mb-4 uppercase tracking-tighter">Shop our <br /> <span className="text-secondary">Best Sellers</span></h3>
                            <p className="text-xs text-gray-400 mb-8 leading-relaxed font-bold uppercase tracking-widest">
                                Premium quality selection verified by our experts.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="#"
                                className="mt-auto bg-white/10 backdrop-blur-md border border-white/20 px-8 py-2.5 rounded-full text-primary-light font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all shadow-lg"
                            >
                                View All
                            </motion.a>
                        </div>
                    </motion.div>

                    <AnimatePresence mode="popLayout">
                        {products.map((product, index) => (
                            <ProductCard key={`${activeTab}-${index}`} {...product} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
