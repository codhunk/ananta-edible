import { motion } from 'framer-motion';
import { Users, Droplets, Sun, Heart, ArrowRight } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
    { label: "Farmers Empowered", value: 50000, suffix: "+", icon: <Users size={24} /> },
    { label: "Carbon Neutral Plants", value: 100, suffix: "%", icon: <Sun size={24} /> },
    { label: "Water Saved (Liters)", value: 2000000, suffix: "+", icon: <Droplets size={24} /> },
    { label: "Rural Students Supported", value: 10000, suffix: "+", icon: <Heart size={24} /> }
];

const pillars = [
    {
        title: "Sustainable Sourcing",
        desc: "We source our seeds directly from farmers, ensuring fair trade and promoting chemical-free agriculture.",
        color: "bg-green-50",
        textColor: "text-green-900"
    },
    {
        title: "Renewable Energy",
        desc: "Our production units run on 100% solar and bio-mass energy, significantly reducing our carbon footprint.",
        color: "bg-blue-50",
        textColor: "text-blue-900"
    },
    {
        title: "Community Well-being",
        desc: "Through the Ananta Foundation, we provide healthcare and education in the rural heartlands of Rajasthan.",
        color: "bg-orange-50",
        textColor: "text-orange-900"
    }
];

const ImpactPage = () => {
    return (
        <PageLayout
            title="Our Impact"
            subtitle="Creating a sustainable ecosystem where every stakeholder thrives—from the soil to the soul."
            category="Company"
        >
            <div className="space-y-24">
                {/* Impact Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tighter leading-tight">
                            Beyond the <span className="text-primary-light">Bottle</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            At Ananta, we believe that business growth and social responsibility go hand in hand. Our impact is measured not just in sales, but in the smiles of the farmers we work with and the health of the planet we inhabit.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-primary-light mb-2">{stat.icon}</div>
                                    <p className="text-2xl font-black text-primary-dark">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-[10px] font-black text-gray-400 tracking-widest leading-none mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[64px] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Farming Communities"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute -top-12 -right-12 w-32 h-32 bg-primary-light rounded-full flex items-center justify-center p-6 text-white text-center font-black text-[10px] leading-tight tracking-widest shadow-2xl"
                        >
                            100% Organic Practices
                        </motion.div>
                    </motion.div>
                </div>

                {/* Sustainability Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${pillar.color} p-10 rounded-[48px] border border-transparent hover:border-white/50 transition-all group`}
                        >
                            <h3 className={`text-2xl font-black ${pillar.textColor} mb-4 tracking-tighter`}>
                                {pillar.title}
                            </h3>
                            <p className={`${pillar.textColor}/70 font-medium leading-relaxed`}>
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Sustainability Roadmap */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="relative z-10 space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight">
                                Roadmap to <span className="text-primary-light">2030</span>
                            </h2>
                            <p className="text-white/60 max-w-2xl mx-auto font-medium">
                                We've set ambitious goals to lead the edible oil industry in sustainability and social impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { year: "2025", goal: "Plastic-Neutral status across all retail packaging units." },
                                { year: "2027", goal: "Reach 100,000 farmers with digital literacy and smart-farming tools." },
                                { year: "2030", goal: "Achieve net-zero carbon emissions across the entire supply chain." }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4 border-l-2 border-primary-light/30 pl-8">
                                    <span className="text-3xl font-black text-primary-light italic">{item.year}</span>
                                    <p className="text-lg font-medium leading-relaxed">{item.goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <div className="text-center">
                    <p className="text-sm font-black text-gray-400 tracking-[0.4em] mb-8">Want to join the movement?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-4 mx-auto bg-primary-light text-white px-10 py-5 rounded-full font-black tracking-widest text-sm shadow-2xl transition-all"
                    >
                        Partner With Us
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </PageLayout>
    );
};

export default ImpactPage;
