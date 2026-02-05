import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import CertificationLogos from '../components/CertificationLogos';
import ProductSection from '../components/ProductSection';
import Testimonials from '../components/Testimonials';
import Referral from '../components/Referral';
import OrderSteps from '../components/OrderSteps';
import ServiceGrid from '../components/ServiceGrid';
import StrainGrid from '../components/StrainGrid';

import NewsletterBanner from '../components/NewsletterBanner';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
    const filters = ['Mustard Oil', 'Refined Oils', 'Health Packs', 'Bulk Supply', 'Shop All'];

    return (
        <div className="bg-background font-sans text-gray-900 selection:bg-primary-light selection:text-white overflow-x-hidden">

            <main>
                <Hero />
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
                                <span className="text-gray-400 font-black uppercase tracking-[0.2em] text-xs sm:text-sm">Filter by Interest</span>
                                {filters.map((filter, i) => (
                                    <motion.button
                                        key={filter}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest border transition-all ${i === 0
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
                                className="text-primary-light font-black uppercase tracking-[0.2em] text-xs sm:text-sm border-b-2 border-primary-light/20 hover:border-primary-light whitespace-nowrap"
                            >
                                Show All Items
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Second Product Grid (Choose your weed) */}
                <section className="pb-24 bg-white overflow-hidden">
                    <div className="container-custom px-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-black mb-16 uppercase tracking-tighter text-primary-dark"
                        >
                            CHOOSE <br className="sm:hidden" /> HEALTHY <span className="text-primary-light underline decoration-primary-light/20">OILS</span>
                        </motion.h2>

                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {[
                                    "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
                                    "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=400"
                                ].map((img, i) => (
                                    <ProductCard
                                        key={i}
                                        image={img}
                                        category="Edible Oil"
                                        title="Premium Kachi Ghani Mustard Oil - 5L"
                                        rating={4.8}
                                        reviews={120}
                                        basePrice="₹950.00"
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                <StrainGrid />
                <NewsletterBanner />
            </main>
            <Footer />
        </div>
    );
}
