import { motion } from 'framer-motion';
import { Factory, Droplets, FlaskConical, Container, ShieldCheck, ChevronRight, Briefcase } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const industrySolutions = [
    {
        title: "Bulk Refining",
        desc: "State-of-the-art refining for various edible oils with guaranteed low FFA and maximum retention of micronutrients.",
        icon: <Droplets size={32} />,
        stats: { value: 1000, suffix: " TPD Capacity" }
    },
    {
        title: "Contract Packaging",
        desc: "Automated bottling and packaging lines for various formats—from 200ml pet bottles to 15L tins.",
        icon: <Container size={32} />,
        stats: { value: 10, suffix: "+ Packing Lines" }
    },
    {
        title: "By-product Supply",
        desc: "High-grade mustard de-oiled cake (DOC) and other nutritional by-products for the feed industry.",
        icon: <FlaskConical size={32} />,
        stats: { value: 100, suffix: "% Premium Grade" }
    }
];

const IndustryEssentialsPage = () => {
    return (
        <PageLayout
            title="Industry Essentials"
            subtitle="Powering the B2B edible oil ecosystem with world-class infrastructure and unyielding standards."
            category="Businesses"
        >
            <div className="space-y-24">
                {/* Infrastructure Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Infrastructure for <span className="text-primary-light">scale</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            The Ananta Industry Essentials vertical provides end-to-end B2B solutions. We don't just produce oil; we provide the backbone for dozens of other food brands and industrial partners through our cutting-edge refineries and logistics network.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-primary-dark text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
                                <Factory size={20} className="text-primary-light" />
                                <span className="text-xs font-black tracking-widest">ISO 22000 Certified</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] rounded-[64px] overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Industrial Refinery"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                            <p className="text-3xl font-black text-white">
                                <AnimatedCounter value={5000} suffix="+" />
                            </p>
                            <p className="text-[10px] font-black text-white/60 tracking-widest">MT monthly capacity</p>
                        </div>
                    </motion.div>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industrySolutions.map((sol, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group"
                        >
                            <div className="text-primary-light mb-8 group-hover:scale-110 transition-transform origin-left">
                                {sol.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary-dark mb-4 tracking-tight">
                                {sol.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-6">
                                {sol.desc}
                            </p>
                            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                <span className="text-[10px] font-black text-primary-light tracking-widest">
                                    <AnimatedCounter value={sol.stats.value} suffix={sol.stats.suffix} />
                                </span>
                                <ChevronRight size={16} className="text-gray-300 group-hover:text-primary-light transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Technical Reliability */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-[56px] p-12 sm:p-20 border border-gray-100"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">
                                Quality <span className="text-primary-light">guaranteed</span>
                            </h2>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Our in-house laboratories and continuous monitoring systems ensure that every drop of oil and every pack leaving our facility meets strict moisture, FFA, and iodine value standards.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Zero Liquid Discharge (ZLD) Facility",
                                    "Automated Scada Control Systems",
                                    "Dedicated Logistics Fleet",
                                    "Real-time Batch Tracking"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-primary-light/10 flex items-center justify-center">
                                            <ShieldCheck size={14} className="text-primary-light" />
                                        </div>
                                        <span className="text-sm font-black text-primary-dark tracking-wide">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-square bg-white rounded-3xl overflow-hidden shadow-sm group">
                                    <img
                                        src={`https://images.pexels.com/photos/${100 + i}/pexels-photo-${100 + i}.jpeg?auto=compress&cs=tinysrgb&w=200`}
                                        alt="Refinery View"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* B2B Contact CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-dark rounded-[48px] p-12 sm:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="space-y-6 max-w-xl text-center md:text-left">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-none">
                            Scale your <span className="text-primary-light">vision</span>
                        </h2>
                        <p className="text-white/60 text-lg font-medium">
                            Partner with Ananta for your refining and packaging needs. Reliable, scalable, and pure.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/bulk-orders">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-light text-white px-10 py-5 rounded-full font-black tracking-widest text-xs shadow-2xl flex items-center gap-3"
                            >
                                <Briefcase size={18} />
                                Business Inquiry
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default IndustryEssentialsPage;
