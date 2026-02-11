import { motion } from 'framer-motion';
import { Star, Heart, Award, ShieldCheck, Zap, Handshake } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const highlights = [
    { title: "Quality Synergy", desc: "Merging Ananta's sourcing purity with Fortune's world-class processing.", icon: <Award size={24} /> },
    { title: "Household Trust", desc: "A brand that resonates in every Indian kitchen, now powered by Ananta.", icon: <Heart size={24} /> },
    { title: "Innovation Led", desc: "Continuous R&D to bring healthier, tastier options to your table.", icon: <Zap size={24} /> }
];

const FortuneFoodsPage = () => {
    return (
        <PageLayout
            title="Fortune Foods"
            subtitle="The legendary partnership bringing health and happiness to millions of Indian homes."
            category="Quick Links"
        >
            <div className="space-y-24">
                {/* Brand Story Hero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 text-primary-light">
                            <Star size={24} className="fill-current" />
                            <Star size={24} className="fill-current" />
                            <Star size={24} className="fill-current" />
                        </div>
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Legacy of <span className="text-primary-light">Trust</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Ananta's association with the 'Fortune' brand represents a pinnacle of food industry collaboration. By combining our deep roots in Rajasthan's oilseed heartlands with Fortune's legendary consumer trust, we deliver products that are not just ingredients, but the foundation of healthy family meals.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-[40px] border border-primary/10">
                            <p className="text-primary-dark font-black text-xs tracking-widest mb-4 flex items-center gap-2">
                                <ShieldCheck size={16} /> FSSAI & ISO Certified Quality
                            </p>
                            <p className="text-gray-500 text-sm font-medium">Every drop of Fortune oil processed at our facility undergoes <AnimatedCounter value={40} suffix="+" /> quality checks.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[64px] overflow-hidden shadow-2xl h-[500px]"
                    >
                        <img
                            src="https://images.pexels.com/photos/4033105/pexels-photo-4033105.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Fortune Foods Partnership"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                                    <Handshake size={40} className="text-primary-light" />
                                </div>
                                <div className="text-white">
                                    <p className="text-2xl font-black tracking-tight">Strength in unity</p>
                                    <p className="text-white/60 text-xs font-bold tracking-widest">A partnership for purity</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Integration Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-12 bg-white rounded-[48px] border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-all space-y-6"
                        >
                            <div className="text-primary-light">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-primary-dark tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tighter mb-8 relative z-10">Experience the <span className="text-primary-light">Fortune</span> of purity</h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary-dark px-12 py-6 rounded-full font-black tracking-[0.3em] text-xs shadow-2xl relative z-10"
                    >
                        Explore Fortune Range
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default FortuneFoodsPage;
