import { motion } from 'framer-motion';
import { TrendingUp, PieChart, FileText, Download, ShieldCheck, Users } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const financialHighlights = [
    { label: "Revenue Growth", value: 24, suffix: "%", color: "text-green-500" },
    { label: "EBITDA Margin", value: 18.5, suffix: "%", decimals: 1, color: "text-blue-500" },
    { label: "Market Cap", value: 2400, prefix: "₹", suffix: " Cr+", color: "text-primary-light" }
];

const InvestorsPage = () => {
    return (
        <PageLayout
            title="Investors"
            subtitle="Creating sustainable value through ethical governance and operational excellence."
            category="Company"
        >
            <div className="space-y-24">
                {/* Financial Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {financialHighlights.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-12 rounded-[48px] border border-gray-100 shadow-xl shadow-gray-200/50 text-center space-y-4"
                        >
                            <p className="text-sm font-black text-gray-400 tracking-widest leading-none">{stat.label}</p>
                            <p className={`text-5xl font-black ${stat.color} tracking-tighter`}>
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                    decimals={stat.decimals || 0}
                                />
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Governance Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Governed by <span className="text-primary-light">Integrity</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Our board of directors brings together decades of experience in food technology, finance, and global supply chain management. We maintain a zero-tolerance policy towards unethical practices, ensuring that your investment is protected by the highest standards of corporate governance.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Transparent Audit Trails", icon: <ShieldCheck size={20} /> },
                                { title: "Inclusive Stakeholder Value", icon: <Users size={20} /> },
                                { title: "Sustainable Growth Mandate", icon: <TrendingUp size={20} /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <div className="text-primary-light">{item.icon}</div>
                                    <span className="text-xs font-black text-primary-dark tracking-widest">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-white relative overflow-hidden flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <PieChart size={240} className="text-primary-light opacity-50" />
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-6xl font-black tracking-tighter leading-none">AAA</p>
                                <p className="text-[10px] font-black tracking-[0.4em] opacity-40">Credit rating</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="space-y-8">
                    <h3 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight text-center">Shareholder <span className="text-primary-light">resources</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Annual Report 2022-23",
                            "FY23 Q4 Results",
                            "ESG Framework",
                            "Investor Presentation"
                        ].map((doc, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all flex flex-col items-center gap-4 group"
                            >
                                <div className="p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:text-primary-light transition-colors">
                                    <FileText size={24} />
                                </div>
                                <span className="text-xs font-black text-primary-dark text-center">{doc}</span>
                                <Download size={16} className="text-gray-200 group-hover:text-primary-light transition-colors" />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Investor CTA */}
                <div className="text-center bg-gray-50 rounded-[48px] p-12 sm:p-20 border border-gray-100">
                    <p className="text-sm font-black text-gray-400 tracking-[0.4em] mb-4">Contact investor relations</p>
                    <p className="text-2xl font-black text-primary-dark underline decoration-primary-light decoration-4 underline-offset-8">investors@anantaoils.com</p>
                </div>
            </div>
        </PageLayout>
    );
};

export default InvestorsPage;
