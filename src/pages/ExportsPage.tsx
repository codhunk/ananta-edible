import { motion } from 'framer-motion';
import { Globe2, Ship, ShieldCheck, BadgeCheck, FileCheck, ArrowUpRight, Mail } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const markets = [
    { country: "United States", regions: "East & West Coast", type: "Retail & Bulk" },
    { country: "United Kingdom", regions: "All Major Cities", type: "Organic Specialty" },
    { country: "Middle East", regions: "UAE, Saudi Arabia, Kuwait", type: "Culinary Grade" },
    { country: "Australia", regions: "Sydney, Melbourne, Perth", type: "Premium Retail" }
];

const certifications = [
    { name: "FSSAI Certified", desc: "Food Safety and Standards Authority of India", icon: <BadgeCheck className="text-primary-light" /> },
    { name: "APEDA Member", desc: "Agricultural & Processed Food Products Export Development Authority", icon: <FileCheck className="text-blue-500" /> },
    { name: "ISO 22000", desc: "International Standard for Food Safety Management", icon: <ShieldCheck className="text-green-500" /> }
];

const ExportsPage = () => {
    return (
        <PageLayout
            title="Global Exports"
            subtitle="Taking the authentic taste of Rajasthan's golden fields to over 20+ countries worldwide."
            category="Businesses"
        >
            <div className="space-y-24">
                {/* Global Presence Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Rajasthan to the <span className="text-primary-light">World</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Ananta is a leading exporter of premium mustard oil and food products from India. Our commitment to purity and international quality standards has made us a trusted partner for global retailers and ethnic food distributors. We bridge the gap between traditional Indian flavors and modern global palates.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
                                <p className="text-3xl font-black text-primary-dark tracking-tight">
                                    <AnimatedCounter value={20} suffix="+" />
                                </p>
                                <p className="text-[10px] font-black text-gray-400 tracking-widest">Countries reached</p>
                            </div>
                            <div className="bg-gray-50 px-8 py-4 rounded-3xl border border-gray-100">
                                <p className="text-3xl font-black text-primary-dark tracking-tight">
                                    <AnimatedCounter value={5} suffix="M+" />
                                </p>
                                <p className="text-[10px] font-black text-gray-400 tracking-widest">Global consumers</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-[56px] overflow-hidden shadow-2xl bg-primary-dark flex items-center justify-center p-12">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                                className="absolute opacity-20"
                            >
                                <Globe2 size={400} className="text-white" />
                            </motion.div>
                            <div className="relative text-center space-y-4">
                                <Ship size={64} className="text-primary-light mx-auto mb-6" />
                                <p className="text-white text-xl font-black tracking-widest">Export ready</p>
                                <p className="text-white/60 font-medium">LCL & FCL Logistics Support</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Markets Table */}
                <div className="bg-white rounded-[56px] border border-gray-100 shadow-xl overflow-hidden">
                    <div className="p-12 sm:p-16 border-b border-gray-100">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight text-center">
                            Our global <span className="text-primary-light">footprint</span>
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 tracking-[0.2em]">Market</th>
                                    <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 tracking-[0.2em]">Key regions</th>
                                    <th className="px-12 py-8 text-left text-[10px] font-black text-gray-400 tracking-[0.2em]">Primary demand</th>
                                    <th className="px-12 py-8 text-right text-[10px] font-black text-gray-400 tracking-[0.2em]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {markets.map((m, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-12 py-8">
                                            <p className="font-black text-primary-dark text-lg">{m.country}</p>
                                        </td>
                                        <td className="px-12 py-8">
                                            <p className="text-gray-500 font-medium">{m.regions}</p>
                                        </td>
                                        <td className="px-12 py-8">
                                            <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary-dark text-[10px] font-black tracking-widest rounded-full">
                                                {m.type}
                                            </span>
                                        </td>
                                        <td className="px-12 py-8 text-right text-green-500">
                                            <ShieldCheck size={20} className="ml-auto" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-12 bg-gray-50 rounded-[48px] border border-gray-100 flex flex-col items-center text-center space-y-6"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                                {cert.icon}
                            </div>
                            <h3 className="text-xl font-black text-primary-dark tracking-tight">{cert.name}</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Export Inquiry CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-light rounded-[56px] p-12 sm:p-20 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
                    <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tighter leading-tight max-w-4xl">
                            Ready to take Ananta to your <span className="text-primary-dark">country?</span>
                        </h2>
                        <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
                            We offer specialized export packaging, labeling compliance for international markets, and streamlined logistics. Let's discuss a partnership.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-8">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary-dark text-white px-12 py-6 rounded-full font-black tracking-widest text-xs shadow-2xl flex items-center gap-4"
                                >
                                    <Mail size={18} />
                                    Export Inquiry
                                </motion.button>
                            </Link>
                            <button className="flex items-center gap-2 text-xs font-black tracking-widest text-white hover:text-primary-dark transition-colors group">
                                Download export catalog <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default ExportsPage;
