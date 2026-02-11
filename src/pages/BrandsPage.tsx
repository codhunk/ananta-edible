import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';
import { Award, ShieldCheck, Zap, Heart, Star, CheckCircle2, Users } from 'lucide-react';

const brands = [
    {
        name: "ANANTA GOLD",
        tagline: "The Benchmark of Purity",
        description: "Our flagship premium mustard oil brand, crafted for those who never compromise on health or taste. Extracted from the finest mustard seeds of Rajasthan.",
        usp: ["Cold-Pressed Process", "Zero Additives", "High Pungency", "Rich in Omega-3"],
        image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800",
        color: "bg-yellow-50",
        borderColor: "border-yellow-100",
        textColor: "text-yellow-900"
    },
    {
        name: "SUDH KOLHU",
        tagline: "Tradition in Every Drop",
        description: "Embodying the age-old wisdom of traditional oil extraction. Sudh Kolhu brings the authentic aroma and nutritional profile of cold-pressed oils.",
        usp: ["Traditional Wood-Pressing", "Nutrient Retention", "Chemical-Free", "Ancestral Recipe"],
        image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "bg-primary/5",
        borderColor: "border-primary/10",
        textColor: "text-primary-dark"
    },
    {
        name: "HEALTHY DELIGHT",
        tagline: "Modern Wellness for Daily Life",
        description: "A versatile range of refined oils including Soybean and Sunflower, designed to meet the dynamic cooking needs of the modern Indian family.",
        usp: ["Ultra-Refined", "Light & Odorless", "High Smoke Point", "Fortified with Vitamin A & D"],
        image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=800",
        color: "bg-blue-50",
        borderColor: "border-blue-100",
        textColor: "text-blue-900"
    }
];

const BrandsPage = () => {
    return (
        <PageLayout
            title="Our Brands"
            subtitle="Explore our range of premium products trusted by millions of families across India."
            category="Company"
        >
            <div className="space-y-24">
                {/* Introduction Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-8 tracking-tight">
                        Quality You Can <span className="text-primary-light">Trust</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-medium mb-12">
                        At Ananta Edible Oils, we take pride in our heritage of purity. Our brands represent a perfect fusion of traditional wisdom and modern manufacturing practices, ensuring that your health is always our top priority.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        {[
                            { value: 25, suffix: "+", label: "Years of Trust", icon: <Award size={20} /> },
                            { value: 50, suffix: "M+", label: "Happy Families", icon: <Heart size={20} /> },
                            { value: 100, suffix: "%", label: "Purity Guarantee", icon: <ShieldCheck size={20} /> },
                            { value: 500, suffix: "+", label: "Distributors", icon: <Users size={20} /> }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 bg-white rounded-[32px] border border-gray-100 shadow-sm">
                                <div className="text-primary-light mb-3 flex justify-center">{stat.icon}</div>
                                <p className="text-2xl font-black text-primary-dark">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className="text-[10px] font-black text-gray-400 tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 gap-12 sm:gap-16">
                    {brands.map((brand, idx) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 hover:shadow-primary/5 transition-all group`}
                        >
                            <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] overflow-hidden">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 p-10 sm:p-16 space-y-8">
                                <div className="space-y-4">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest ${brand.color} ${brand.textColor}`}>
                                        {brand.tagline}
                                    </span>
                                    <h3 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter">
                                        {brand.name}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                        {brand.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {brand.usp.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${brand.color} ${brand.textColor}`}>
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-xs font-black text-gray-400 tracking-widest leading-none">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="pt-4 flex items-center gap-3 text-primary-light font-black tracking-[0.3em] text-xs hover:text-primary transition-colors group"
                                >
                                    Learn More About {brand.name}
                                    <Zap size={16} className="group-hover:fill-primary transition-all" />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quality Commitment Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-dark rounded-[48px] p-12 sm:p-20 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                        <div className="flex justify-center gap-6">
                            {[Award, ShieldCheck, Heart, Star].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                                    className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary-light"
                                >
                                    <Icon size={32} />
                                </motion.div>
                            ))}
                        </div>
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight">
                            The Ananta <span className="text-primary-light">Seal</span>
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed font-medium">
                            Every brand in our portfolio carries the Ananta Seal of Excellence. This represents our unwavering commitment to purity, health, and authentic flavor. We don't just sell oil; we deliver health to your kitchen.
                        </p>
                        <div className="pt-8">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-primary-dark px-12 py-5 rounded-full font-black tracking-[0.3em] text-sm shadow-2xl hover:bg-gray-100 transition-all"
                            >
                                View All Products
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default BrandsPage;
