import { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import FeatureGrid from '../components/FeatureGrid';
import CertificationLogos from '../components/CertificationLogos';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import Referral from '../components/Referral';
import OrderSteps from '../components/OrderSteps';
import ServiceGrid from '../components/ServiceGrid';
import StrainGrid from '../components/StrainGrid';

import NewsletterBanner from '../components/NewsletterBanner';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
    const [showAllProducts, setShowAllProducts] = useState(false);
    const filters = ['Mustard Oil', 'Refined Oils', 'Health Packs', 'Bulk Supply', 'Shop All'];

    return (
        <div className="bg-background font-sans text-gray-900 selection:bg-primary-light selection:text-white overflow-x-hidden">

            <main>
                <HeroCarousel />
                <FeatureGrid />
                <CertificationLogos />
                <ProductSection />
                <Testimonials />
                <Referral />
                <OrderSteps />
                <ServiceGrid />

                {/* Category Filters Section */}
                <section className="py-12 bg-white overflow-hidden">
                    <div className="container-custom px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row items-center justify-between gap-8 border-b border-gray-100 pb-12"
                        >
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <span className="text-gray-400 font-black tracking-[0.2em] text-xs sm:text-sm">Filter by interest</span>
                                {filters.map((filter, i) => (
                                    <motion.button
                                        key={filter}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-black tracking-widest border transition-all ${i === 0
                                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-white border-gray-100 text-gray-400 hover:border-primary-light hover:text-primary-light'
                                            }`}
                                    >
                                        {filter}
                                    </motion.button>
                                ))}
                            </div>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="#"
                                className="text-primary-light font-black tracking-[0.2em] text-xs sm:text-sm border-b-2 border-primary-light/20 hover:border-primary-light whitespace-nowrap"
                            >
                                Show All Items
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Second Product Grid (Choose Healthy Oils) */}
                <section className="pb-24 bg-white overflow-hidden">
                    <div className="container-custom px-4">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black mb-16 tracking-tighter text-primary-dark">
                            Choose <br className="sm:hidden" /> healthy <span className="text-primary-light underline decoration-primary-light/20">oils</span>
                        </h2>

                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12"
                        >
                            <AnimatePresence mode="popLayout">
                                {[
                                    "/sudhkolhu.png",
                                    "/sudhkolhu1.png",
                                    "/sudhkolhu.png",
                                    "/sudhkolhu1.png",
                                    "/sudhkolhu.png",
                                    "/sudhkolhu1.png",
                                    "/sudhkolhu.png",
                                    "/sudhkolhu1.png",
                                ].slice(0, showAllProducts ? 8 : 4).map((img, i) => (
                                    <motion.div
                                        key={i}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: showAllProducts && i >= 4 ? (i - 4) * 0.1 : i * 0.1
                                        }}
                                    >
                                        <ProductCard
                                            image={img}
                                            category="Edible Oil"
                                            title="Premium Kachi Ghani Mustard Oil - 5L"
                                            rating={4.8}
                                            reviews={120}
                                            basePrice="₹950.00"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Explore More Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex justify-center"
                        >
                            {!showAllProducts && (
                                <motion.button
                                    onClick={() => setShowAllProducts(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full font-black tracking-widest text-sm hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-2xl"
                                >
                                    Explore More
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                </motion.button>
                            )}
                        </motion.div>
                    </div>
                </section>

                <StrainGrid />
                <NewsletterBanner />
            </main>
        </div>
    );
}
