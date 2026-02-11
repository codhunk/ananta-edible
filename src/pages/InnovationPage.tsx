import { motion } from 'framer-motion';
import { Beaker, Recycle, Microchip, Layers, ShieldCheck } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const techAdvantages = [
    {
        icon: <Microchip size={32} />,
        title: "Precision Refining",
        desc: "Automated multi-stage refining process that preserves molecular integrity while removing impurities."
    },
    {
        icon: <Layers size={32} />,
        title: "Cold-Filtration",
        desc: "Proprietary low-temperature filtration techniques to maintain the natural pungency and antioxidants."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Smart Quality IoT",
        desc: "Real-time monitoring of 150+ parameters across the production line to ensure consistent quality."
    },
    {
        icon: <Recycle size={32} />,
        title: "Sustainable Tech",
        desc: "Zero-waste manufacturing facilities utilizing bio-mass and solar energy for complete carbon neutrality."
    }
];

const milestones = [
    { year: "2015", event: "Inaugurated our first fully automated mustard oil plant." },
    { year: "2018", event: "Developed proprietary cold-pressing technology for higher nutrient retention." },
    { year: "2021", event: "Integrated AI-driven supply chain management for 24-hour freshness." },
    { year: "2023", event: "Achieved 100% solar-powered refining status for flagship units." }
];

const InnovationPage = () => {
    return (
        <PageLayout
            title="Innovation"
            subtitle="Pioneering the future of healthy cooking through cutting-edge technology and deep research."
            category="Company"
        >
            <div className="space-y-24">
                {/* R&D Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            The Science of <span className="text-primary-light">Purity</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            At Ananta, innovation isn't just about machines—it's about people and the planet. Our state-of-the-art R&D laboratory in Alwar is dedicated to discovering healthier ways to bring the goodness of nature to your kitchen.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-primary-light/10 rounded-3xl flex items-center justify-center text-primary-light shadow-inner">
                                <Beaker size={40} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-2xl font-black text-primary-dark tracking-tight">
                                    <AnimatedCounter value={50} suffix="+" /> Scientists
                                </p>
                                <p className="text-sm font-black text-gray-400 tracking-widest">Dedicated to nutri-genomics</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-[48px] overflow-hidden shadow-2xl border border-gray-100 ring-8 ring-primary/5">
                            <img
                                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Laboratory"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block"
                        >
                            <p className="text-4xl font-black text-primary-light mb-1">
                                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                            </p>
                            <p className="text-xs font-black text-gray-400 tracking-widest leading-none">Purity Certified</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Tech Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techAdvantages.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:border-primary-light/30 hover:shadow-xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className="text-primary-light mb-6 group-hover:scale-110 transition-transform origin-left">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-black text-primary-dark mb-4 tracking-tighter">
                                {tech.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Milestones Timeline */}
                <div className="bg-primary/5 rounded-[56px] p-12 sm:p-20 border border-primary/10">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">
                            Journey of <span className="text-primary-light">Progression</span>
                        </h2>
                    </div>
                    <div className="relative space-y-12">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-light/20 hidden sm:block"></div>

                        {milestones.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative pl-0 sm:pl-16 flex flex-col sm:flex-row gap-4 sm:items-center"
                            >
                                <div className="absolute left-3.5 w-2 h-2 rounded-full bg-primary-light ring-4 ring-primary-light/20 hidden sm:block"></div>
                                <span className="text-3xl font-black text-primary-light/40 font-mono tracking-tighter italic">
                                    {m.year}
                                </span>
                                <p className="text-lg font-black text-primary-dark tracking-tight">
                                    {m.event}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sustainability Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-12 p-12 bg-white rounded-[40px] border border-gray-100 shadow-xl"
                >
                    <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 flex-shrink-0">
                        <Recycle size={48} />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                        <h4 className="text-2xl font-black text-primary-dark">Ecological responsibility</h4>
                        <p className="text-gray-600 font-medium">Our innovation laboratory is committed to reducing plastic usage by 40% in our packaging by 2026. We are testing biodegradable alternatives for our flagship bottles.</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-light text-white px-8 py-4 rounded-2xl font-black tracking-widest text-xs whitespace-nowrap shadow-xl shadow-primary-light/20"
                    >
                        View Report
                    </motion.button>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default InnovationPage;
