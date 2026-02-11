import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Zap, Wheat, Apple } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const categories = [
    {
        title: "Premium Flour",
        desc: "Stone-ground Chakki Atta and specialty flours made from the finest grains of Central India.",
        icon: <Wheat size={32} />,
        image: "https://images.pexels.com/photos/1015601/pexels-photo-1015601.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-orange-50",
        textColor: "text-orange-900"
    },
    {
        title: "Artisanal Spices",
        desc: "Single-origin, unadulterated spices that retain their natural essential oils and aroma.",
        icon: <Zap size={32} />,
        image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-red-50",
        textColor: "text-red-900"
    },
    {
        title: "Organic Staples",
        desc: "A wide range of pulses and grains grown using 100% sustainable agricultural practices.",
        icon: <Apple size={32} />,
        image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-green-50",
        textColor: "text-green-900"
    }
];

const FoodEssentialsPage = () => {
    return (
        <PageLayout
            title="Food Essentials"
            subtitle="Extending our purity heritage to the everyday staples that define your kitchen."
            category="Businesses"
        >
            <div className="space-y-24">
                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Purity in every <span className="text-primary-light">staple</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Ananta is evolving beyond oils. We are pioneering a new era of food essentials by applying our rigorous 'Purity Protocols' to everyday staples. Our mission is to ensure that every ingredient on your shelf is as pure as nature intended.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                                        <img src={`https://images.pexels.com/photos/${1000 + i}/pexels-photo-${1000 + i}.jpeg?auto=compress&cs=tinysrgb&w=100`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs font-black text-gray-400 tracking-widest">
                                Trusted by <AnimatedCounter value={2} suffix="M+" /> Households
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-video rounded-[56px] overflow-hidden shadow-2xl relative group"
                    >
                        <img
                            src="https://images.pexels.com/photos/4033324/pexels-photo-4033324.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Food Essentials"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors"></div>
                    </motion.div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className={`absolute top-6 left-6 p-4 rounded-2xl ${cat.color} ${cat.textColor} shadow-xl`}>
                                    {cat.icon}
                                </div>
                            </div>
                            <div className="p-10 space-y-4">
                                <h3 className="text-2xl font-black text-primary-dark tracking-tight">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    {cat.desc}
                                </p>
                                <div className="pt-4">
                                    <button className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-primary-light hover:text-primary transition-colors">
                                        Explore range <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Integration with Bulk Orders */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-white flex flex-col items-center text-center space-y-8 relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:scale-110 transition-transform duration-[20s]"></div>
                    <div className="relative z-10 space-y-8">
                        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/20">
                            <ShoppingBag size={18} className="text-primary-light" />
                            <span className="text-[10px] font-black tracking-[0.2em]">B2B & institutional sales</span>
                        </div>
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight max-w-4xl mx-auto leading-none">
                            High quality <span className="text-primary-light">supplies</span> for your business
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg">
                            We provide bulk supplies of our food essentials to restaurants, food chains, and industrial kitchens across the country.
                        </p>
                        <div className="pt-8 flex flex-wrap justify-center gap-4">
                            <Link to="/bulk-orders">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary-light text-white px-10 py-5 rounded-full font-black tracking-widest text-xs shadow-2xl hover:bg-primary transition-all"
                                >
                                    Request Bulk Quote
                                </motion.button>
                            </Link>
                            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-black tracking-widest text-xs hover:bg-white/20 transition-all">
                                Download Catalog
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default FoodEssentialsPage;
