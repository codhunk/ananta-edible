import { motion } from 'framer-motion';
import { Package, Truck, Store, Zap, ShieldCheck, Star } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const segments = [
    {
        title: "Personal Care",
        desc: "Premium herbal and oil-based personal care products that harness the power of nature.",
        icon: <Star size={32} />,
        image: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-purple-50",
        textColor: "text-purple-900"
    },
    {
        title: "Home Care",
        desc: "Eco-friendly and effective home cleaning solutions designed for healthy living spaces.",
        icon: <ShieldCheck size={32} />,
        image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-blue-50",
        textColor: "text-blue-900"
    },
    {
        title: "Wellness Products",
        desc: "Nutraceuticals and wellness supplements crafted with high-purity natural extracts.",
        icon: <Zap size={32} />,
        image: "https://images.pexels.com/photos/3644913/pexels-photo-3644913.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "bg-green-50",
        textColor: "text-green-900"
    }
];

const FmcgPage = () => {
    return (
        <PageLayout
            title="FMCG"
            subtitle="Scaling our legacy of purity into a diverse range of fast-moving consumer goods."
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
                            Everyday <span className="text-primary-light">excellence</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            The Ananta FMCG vertical is dedicated to bringing high-quality, purity-focused products to every corner of your home. By leveraging our deep understanding of natural extracts and our robust distribution network, we are redefining what 'quality' means in everyday items.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <p className="text-3xl font-black text-primary-dark tracking-tight">
                                    <AnimatedCounter value={500000} suffix="+" />
                                </p>
                                <p className="text-[10px] font-black text-gray-400 tracking-widest leading-none">Retail touchpoints</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-3xl font-black text-primary-dark tracking-tight">
                                    <AnimatedCounter value={50} suffix="+" />
                                </p>
                                <p className="text-[10px] font-black text-gray-400 tracking-widest leading-none">Tier-1 cities</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-square bg-gray-100 rounded-[64px] overflow-hidden relative"
                    >
                        <img
                            src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="FMCG Logistics"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
                            <Truck size={32} className="text-primary-light mb-2" />
                            <p className="text-xs font-black text-primary-dark tracking-widest">Next-day delivery enabled</p>
                        </div>
                    </motion.div>
                </div>

                {/* Segments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {segments.map((seg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-all group"
                        >
                            <div className="p-10 space-y-6">
                                <div className={`${seg.color} ${seg.textColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    {seg.icon}
                                </div>
                                <h3 className="text-2xl font-black text-primary-dark tracking-tight">
                                    {seg.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                    {seg.desc}
                                </p>
                            </div>
                            <div className="h-48 overflow-hidden">
                                <img src={seg.image} alt={seg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Distribution Strength */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-none">
                                Powerhouse of <span className="text-primary-light">distribution</span>
                            </h2>
                            <p className="text-white/60 text-lg font-medium leading-relaxed">
                                Our FMCG vertical is backed by one of India's most efficient distribution networks. From hyper-local kirana stores to global modern trade channels, we ensure Ananta products are always within reach.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <Store size={24} className="text-primary-light" />
                                    <span className="text-xs font-black tracking-widest">Multi-channel presence</span>
                                </div>
                                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <Package size={24} className="text-primary-light" />
                                    <span className="text-xs font-black tracking-widest">Smart warehousing</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-video bg-white/10 rounded-2xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all border border-white/5">
                                    <img src={`https://images.pexels.com/photos/${2000 + i}/pexels-photo-${2000 + i}.jpeg?auto=compress&cs=tinysrgb&w=200`} alt="Distribution" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Partner CTA */}
                <div className="text-center bg-gray-50 rounded-[48px] p-12 sm:p-20 space-y-8 border border-gray-100">
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">Become a <span className="text-primary-light">partner</span></h3>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">Join our growing network of distributors and retailers. Let's bring quality FMCG products to every home together.</p>
                    <div className="pt-4 flex justify-center gap-4">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-light text-white px-10 py-5 rounded-full font-black tracking-widest text-xs shadow-2xl"
                            >
                                Inquire Now
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary-dark border border-gray-200 px-10 py-5 rounded-full font-black tracking-widest text-xs shadow-sm"
                        >
                            Partner FAQ
                        </motion.button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default FmcgPage;
