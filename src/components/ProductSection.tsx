import { useState, useRef } from 'react';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState('Traditional Oils');
    const carouselRef = useRef<HTMLDivElement>(null);
    const tabs = ['Traditional Oils', 'Refined Oils', 'Bulk Packs'];

    const products = [
        {
            image: "/assets/products/sudhdhya_kolhu.png",
            category: "Traditional",
            title: "Sudhdhya Kolhu Kachi Ghani Mustard Oil",
            rating: 4.8,
            reviews: 245,
            tag: "Best Seller"
        },
        {
            image: "/assets/products/Refined_Oil_bottle.png",
            category: "Refined",
            title: "Ananta Premium Refined Oil Bottle",
            rating: 4.7,
            reviews: 189,
            tag: "Popular"
        },
        {
            image: "/assets/products/Saaz_Gold.png",
            category: "Premium",
            title: "Saaz Gold Pure Mustard Oil Bottle",
            rating: 4.9,
            reviews: 312,
            tag: "Premium"
        },
        {
            image: "/assets/products/sarso_tin.png",
            category: "Traditional",
            title: "Sarso Tin Pure Mustard Oil - 15L",
            rating: 4.6,
            reviews: 156,
            tag: "Bulk"
        },
        {
            image: "/assets/products/Sudhdhya_kalho_Tin.png",
            category: "Traditional",
            title: "Sudhdhya Kalho Kachi Ghani Tin - 15L",
            rating: 4.8,
            reviews: 203,
            tag: "Health+"
        },
        {
            image: "/assets/products/chamanfresh.png",
            category: "Refined",
            title: "Chaman Fresh Refined Oil Can",
            rating: 4.7,
            reviews: 178,
            tag: "Fresh"
        },
        {
            image: "/assets/products/furious.png",
            category: "Premium",
            title: "Furious Premium Mustard Oil Pack",
            rating: 4.8,
            reviews: 142,
            tag: "Powerful"
        },
        {
            image: "/assets/products/Golden_city_plastic_Tin.png",
            category: "Traditional",
            title: "Golden City Plastic Tin Mustard Oil",
            rating: 4.6,
            reviews: 95,
            tag: "Value"
        },
        {
            image: "/assets/products/Saaz_gold_Tin.png",
            category: "Premium",
            title: "Saaz Gold Premium Mustard Oil Tin",
            rating: 4.9,
            reviews: 218,
            tag: "Royal"
        },
        {
            image: "/assets/products/sasz.png",
            category: "Traditional",
            title: "Sasz Traditional Kachi Ghani Oil",
            rating: 4.7,
            reviews: 134,
            tag: "Heritage"
        },
        {
            image: "/assets/products/Sudhdhya_kalho__Round_Bottle.png",
            category: "Traditional",
            title: "Sudhdhya Kalho Round Bottle Mustard Oil",
            rating: 4.8,
            reviews: 167,
            tag: "New"
        }
    ];

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };


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
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                        INDIA'S MOST TRUSTED <br /> EDIBLE OIL BRAND
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
                            className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black tracking-widest transition-all duration-300 border ${activeTab === tab
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                : 'bg-white border-gray-100 text-gray-500 hover:border-primary-light hover:text-primary-light'
                                }`}
                        >
                            {tab}
                        </motion.button>
                    ))}
                </div>


                {/* Carousel Container with Navigation */}
                <div className="relative group/carousel">
                    <div
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-8 scrollbar-hide px-4 -mx-4 items-stretch"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Promo Card - Now inside the scrollable container */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] xl:w-[360px] 2xl:w-[400px] rounded-3xl bg-primary-dark p-8 xl:p-10 2xl:p-12 flex flex-col items-center justify-between text-center text-white relative overflow-hidden group shadow-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>

                            <div className="relative z-10 w-full flex flex-col items-center h-full">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="mb-6"
                                >
                                    <img src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=300" alt="Promo" className="w-32 h-32 sm:w-40 sm:h-40 object-contain group-hover:rotate-12 transition-transform duration-500 drop-shadow-2xl" />
                                </motion.div>
                                <h3 className="text-xl sm:text-2xl font-black mb-4 tracking-tighter">View our <br /> <span className="text-secondary">best sellers</span></h3>
                                <p className="text-xs text-gray-400 mb-8 leading-relaxed font-bold tracking-widest">
                                    Premium quality locally sourced mustard oils.
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    href="#"
                                    className="mt-auto bg-white/10 backdrop-blur-md border border-white/20 px-8 py-2 rounded-full text-primary-light font-black tracking-[0.2em] text-xs hover:bg-white hover:text-primary transition-all shadow-lg"
                                >
                                    View All
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Product Cards */}
                        <AnimatePresence mode="popLayout">
                            {products.map((product, index) => (
                                <div key={`${activeTab}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[320px] xl:w-[360px] 2xl:w-[400px]">
                                    <ProductCard {...product} />
                                </div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows - Adjusted for better visibility and relative to container */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-lg border-2 border-gray-100 flex items-center justify-center text-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl group hover:scale-110 md:flex hidden"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-[-2px] transition-transform" />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-lg border-2 border-gray-100 flex items-center justify-center text-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl group hover:scale-110 md:flex hidden"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-[2px] transition-transform" />
                    </button>
                </div>
            </div>


        </section >
    );
}
