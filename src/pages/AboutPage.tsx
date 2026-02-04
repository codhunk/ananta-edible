import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck, Award, Handshake } from 'lucide-react';
import Footer from '../components/Footer';
import NewsletterBanner from '../components/NewsletterBanner';

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">


            {/* Header / Breadcrumb */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-primary-dark py-12 sm:py-20 relative overflow-hidden"
            >
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 opacity-15 pointer-events-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
                        alt="Organic farming"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="container-custom relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
                    >
                        About Us
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center items-center gap-2 text-xs sm:text-sm text-gray-400 font-black uppercase tracking-widest"
                    >
                        <a href="/" className="hover:text-primary-light transition-colors">Home</a>
                        <span className="text-white/20">/</span>
                        <span className="text-white">About Us</span>
                    </motion.div>
                </div>
            </motion.div>

            <main>
                {/* Intro Section 1: Mission */}
                <section className="py-16 sm:py-24">
                    <div className="container-custom px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2"
                            >
                                <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-6 uppercase leading-tight tracking-tighter">
                                    100% Trusted <span className="text-primary-light underline decoration-primary-light/30">Organic</span> Food Store
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                                    At Ananta, we believe that nature provides everything we need for a balanced and healthy lifestyle. Our journey started with a simple goal: to make premium, high-quality organic products accessible to everyone.
                                </p>
                                <motion.p
                                    whileInView={{ scale: [1, 1.02, 1] }}
                                    className="text-gray-600 text-sm sm:text-lg leading-relaxed border-l-4 border-primary-light pl-6 py-2 bg-primary-light/5 rounded-r-2xl font-black uppercase tracking-tight"
                                >
                                    "Our mission is to nourish lives with pure, potent, and ethically sourced organic supplements."
                                </motion.p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-1/2 rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl aspect-video lg:aspect-square relative group"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1000&auto=format&fit=crop"
                                    alt="Healthy organic food"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Intro Section 2: Values */}
                <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
                    <div className="container-custom px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2"
                            >
                                <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-6 uppercase leading-tight tracking-tighter">
                                    Quality You Can <span className="text-primary-light">Taste</span>
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 font-medium">
                                    Every product in our catalog undergoes rigorous testing. From seed to shelf, we ensure that every ingredient is pure, potent, and accurately labeled.
                                </p>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-2 gap-4 sm:gap-8"
                                >
                                    {[
                                        { icon: <Leaf />, title: "100% Organic", desc: "Healthy & Fresh food" },
                                        { icon: <Award />, title: "Customer Choice", desc: "Highly rated on Google" },
                                        { icon: <Truck />, title: "Free Shipping", desc: "On all orders over $120" },
                                        { icon: <Headset />, title: "24/7 Support", desc: "Always here for you" },
                                        { icon: <ShieldCheck />, title: "Secure Pay", desc: "100% safe transactions" },
                                        { icon: <Handshake />, title: "15Y+ Trust", desc: "Industry leading experts" },
                                    ].map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariants}
                                            whileHover={{ y: -5, x: 5 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary-light/10 rounded-2xl flex items-center justify-center text-primary-light flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-primary-dark text-xs sm:text-sm uppercase tracking-tighter">{feature.title}</h4>
                                                <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest">{feature.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="w-full lg:w-1/2 rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl aspect-video lg:aspect-square relative group"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Farmer showing produce"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 sm:py-24">
                    <div className="container-custom text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-5xl font-black text-primary-dark mb-4 uppercase tracking-tighter">Our Awesome Team</h2>
                            <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-20 font-medium">
                                Meet the passionate experts behind Ananta who work tirelessly to bring you the finest organic products.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10"
                        >
                            {[
                                { name: "Jenny Wilson", role: "CEO & Founder", img: "https://i.pravatar.cc/300?u=jenny" },
                                { name: "Jane Cooper", role: "Worker", img: "https://i.pravatar.cc/300?u=jane" },
                                { name: "Cody Fisher", role: "Security Guard", img: "https://i.pravatar.cc/300?u=cody" },
                                { name: "Robert Fox", role: "Senior Farmer", img: "https://i.pravatar.cc/300?u=robert" },
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -15 }}
                                    className="bg-white border border-gray-100 rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group"
                                >
                                    <div className="aspect-[4/5] overflow-hidden relative">
                                        <motion.img
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.8 }}
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                    <div className="p-6 sm:p-8 text-center bg-white relative z-10">
                                        <h4 className="text-lg sm:text-2xl font-black text-primary-dark uppercase tracking-tighter group-hover:text-primary transition-colors">{member.name}</h4>
                                        <p className="text-xs sm:text-sm text-primary-light font-black uppercase tracking-[0.2em] mt-1">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <NewsletterBanner />
            </main>

            <Footer />
        </div>
    );
}

// Simple internal icon component for support
function Headset() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" />
            <path d="M21 16v2a2 2 0 0 1-2 2h-1" />
            <path d="M3 16v2a2 2 0 0 0 2 2h1" />
            <path d="M11 11 v4M13 11 v4" />
        </svg>
    );
}
