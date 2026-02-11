import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Zap, Users2, Sparkles, Smile, Briefcase } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCounter from '../components/AnimatedCounter';

const values = [
    {
        icon: <Heart size={32} />,
        title: "Empathy First",
        desc: "We prioritize the well-being of our employees and the communities we serve."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Uncompromising Integrity",
        desc: "Transparency and honesty are the foundations of every relationship at Ananta."
    },
    {
        icon: <Zap size={32} />,
        title: "Relentless Innovation",
        desc: "We encourage curiosity and the brave pursuit of better ways to do things."
    },
    {
        icon: <Sparkles size={32} />,
        title: "Shared Excellence",
        desc: "Success is a team sport. We celebrate collective wins and learn from shared challenges."
    }
];

const gallery = [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
];

const PeoplePage = () => {
    return (
        <PageLayout
            title="Our People"
            subtitle="The passionate minds and dedicated hands building the Ananta legacy every single day."
            category="Company"
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
                            The Heart of <span className="text-primary-light">Ananta</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed font-medium">
                            Ananta is more than a workplace; it's a mission shared by over 500 professionals. From our master oil-pressers to our delivery partners, every individual plays a vital role in our journey of purity.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 bg-primary/5 px-6 py-3 rounded-full border border-primary/10">
                                <Users2 size={20} className="text-primary-light" />
                                <span className="text-sm font-black text-primary-dark">
                                    <AnimatedCounter value={500} suffix="+" /> Experts
                                </span>
                            </div>
                            <div className="flex items-center gap-3 bg-yellow-50 px-6 py-3 rounded-full border border-yellow-100">
                                <Smile size={20} className="text-yellow-600" />
                                <span className="text-sm font-black text-yellow-900">Happy culture</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-[56px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-gray-100"
                    >
                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Team Collaboration"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <div className="bg-gray-50 rounded-[56px] p-12 sm:p-20">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">
                            Driven by <span className="text-primary-light">Values</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                            Our values aren't just words on a wall; they're the guiding principles that define every decision we make.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="text-primary-light mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-black text-primary-dark mb-4 tracking-tighter">
                                    {v.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    {v.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Culture Gallery */}
                <div className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">
                            Life at <span className="text-primary-light">Ananta</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {gallery.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-square rounded-[32px] overflow-hidden border border-gray-100 shadow-lg grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                            >
                                <img src={img} alt="Team" className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Join Our Team CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-primary-light rounded-[48px] p-12 sm:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="space-y-6 max-w-xl text-center md:text-left">
                        <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-none">
                            Write our next <span className="text-primary-dark">Chapter</span>
                        </h2>
                        <p className="text-white/80 text-lg font-medium">
                            We're always looking for hungry, humble, and smart individuals who want to redefine the food industry.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary-dark px-12 py-5 rounded-full font-black tracking-[0.2em] text-sm shadow-2xl flex items-center gap-4 py-6"
                    >
                        <Briefcase size={20} />
                        View Openings
                    </motion.button>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default PeoplePage;
