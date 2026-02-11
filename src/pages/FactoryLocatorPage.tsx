import { motion } from 'framer-motion';
import { MapPin, Factory, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const factories = [
    {
        name: "Agra Mother Plant",
        location: "Agra, Uttar Pradesh",
        type: "Refinery & Packaging",
        capacity: { value: 1500, suffix: " TPD" },
        specialty: "Pure Mustard Oil Specialist"
    },
    {
        name: "Rajasthan Hub",
        location: "Alwar, Rajasthan",
        type: "Sourcing & Crushing",
        capacity: { value: 800, suffix: " TPD" },
        specialty: "Cold Press Extraction"
    },
    {
        name: "North Logistics Center",
        location: "Ghaziabad, NCR",
        type: "Regional Distribution",
        capacity: { value: 5000, suffix: " MT Storage" },
        specialty: "Smart Warehousing"
    }
];

const FactoryLocatorPage = () => {
    return (
        <PageLayout
            title="Our Presence"
            subtitle="Strategically located across the heart of India's oilseed bowl for maximum efficiency."
            category="Quick Links"
        >
            <div className="space-y-24">
                {/* Map Summary Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Strategic <span className="text-primary-light">Network</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Ananta's facility network is optimized for 'Farm-to-Fork' speed. By placing our processing units closest to the source in Rajasthan and UP, and our distribution hubs near high-demand centers, we ensure that the oil reaches your kitchen at the peak of its freshness.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <Zap size={20} className="text-primary-light" />
                                <span className="text-[10px] font-black tracking-widest text-primary-dark">Zero Downtime</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <ShieldCheck size={20} className="text-primary-light" />
                                <span className="text-[10px] font-black tracking-widest text-primary-dark">Audited Weekly</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-video bg-gray-100 rounded-[20px] overflow-hidden shadow-2xl relative"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.252436856341!2d78.04182337524462!3d27.461399376324422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974876cffd801f1%3A0xf002d5d8279b21e8!2sAnanta%20Edible%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770232947834!5m2!1sen!2sin"
                            className="w-full h-full border-0 hover:scale-105 transition-all duration-1000"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute inset-0 bg-primary-dark/10 pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(100%-4px)] pointer-events-none">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                                className="w-12 h-12 bg-primary-light rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white"
                            >
                                <MapPin size={24} fill="currentColor" />
                            </motion.div>
                            <div className="w-1.5 h-1.5 bg-primary-dark/40 rounded-full mx-auto mt-1 blur-[1px]"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Factory Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {factories.map((factory, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 group hover:shadow-2xl transition-all"
                        >
                            <div className="p-10 space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="p-4 bg-primary/5 rounded-2xl text-primary-light group-hover:bg-primary-light group-hover:text-white transition-colors">
                                        <Factory size={24} />
                                    </div>
                                    <span className="text-[10px] font-black text-gray-400 tracking-widest leading-none">
                                        <AnimatedCounter value={factory.capacity.value} suffix={factory.capacity.suffix} />
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-primary-dark tracking-tight">{factory.name}</h3>
                                    <div className="flex items-center gap-2 text-primary-light font-bold text-xs">
                                        <MapPin size={12} />
                                        {factory.location}
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm font-medium leading-relaxed">{factory.specialty}</p>
                                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                    <span className="text-[10px] font-black text-gray-400 tracking-widest">{factory.type}</span>
                                    <ChevronRight size={16} className="text-gray-200 group-hover:text-primary-light transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Facility Visit CTA */}
                <div className="text-center bg-gray-50 rounded-[48px] p-12 sm:p-20 border border-gray-100 space-y-8">
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">Visit Our <span className="text-primary-light">Facilities</span></h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">We maintain an open-door policy for our industrial partners. Book a plant visit to witness our commitment to hygiene and technology firsthand.</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary-dark text-white px-10 py-5 rounded-full font-black tracking-widest text-xs shadow-2xl"
                    >
                        Request Plant Visit
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default FactoryLocatorPage;
