import { motion, useInView, animate } from 'framer-motion';
import { Linkedin, Twitter, Mail, ExternalLink, Quote } from 'lucide-react';
import CertificationLogos from '../components/CertificationLogos';
import NewsletterBanner from '../components/NewsletterBanner';
import { useEffect, useRef } from 'react';

// Counter Component
const Counter = ({ from = 0, to, suffix = "", duration = 2 }: { from?: number, to: number, suffix?: string, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-20%" });

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    if (node) node.textContent = Math.round(value) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [from, to, suffix, duration, inView]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
};

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
        <div className="min-h-screen bg-white overflow-x-hidden font-sans">
            {/* Header / Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-primary-dark py-20 sm:py-32 relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed"></div>
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 opacity-10"
                >
                    <img
                        src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1920&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="container-custom relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-2xl lg:text-4xl font-black text-white mb-6 tracking-tight leading-tight"
                    >
                        Purity in every drop.<br />Health in every meal.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center items-center gap-3 text-xs sm:text-sm text-gray-400 font-bold tracking-widest"
                    >
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span className="text-white/20">/</span>
                        <span className="text-primary-light">About Us</span>
                    </motion.div>
                </div>
            </motion.div>

            <main>
                {/* Director's Portfolio / Message */}
                <section className="py-12 sm:py-24 relative px-12">
                    <div className="container-custom px-4">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center sm:items-start">
                            {/* Director Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-3/12 relative group"
                            >
                                <div className="absolute top-4 -left-4 w-full h-full border-2 border-primary-light/50 rounded-tr-[80px] rounded-bl-[80px] z-0 hidden sm:block"></div>
                                <div className="relative z-10 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] bg-gray-100">
                                    <img
                                        src="/mayank_founder.jpeg"
                                        alt="Director"
                                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-dark/90 to-transparent p-10 ">
                                        <p className="text-white font-black text-2xl tracking-tighter">Mayank Bansal</p>
                                        <p className="text-primary-light font-bold text-sm tracking-widest mt-1">Founder & Managing Director</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Director's Message */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-7/12 lg:pt-8"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-[2px] bg-primary-light"></div>
                                    <span className="text-primary-light font-black tracking-widest text-sm">Director's message</span>
                                </div>

                                <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-10 leading-tight">
                                    Building a legacy of <span className="text-primary hover:text-primary-dark transition-colors duration-300">purity</span> & <span className="text-primary hover:text-primary-dark transition-colors duration-300">trust</span>.
                                </h2>

                                <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-serif italic relative pl-12">
                                    <Quote className="absolute left-0 top-0 text-primary-light/20 w-8 h-8 transform -scale-x-100" />
                                    <p>
                                        "At Ananta, we hold the conviction that good health begins in the kitchen. For over two decades, our mission has been simple: to provide Indian families with edible oils that are as pure as nature intended."
                                    </p>
                                    <p>
                                        "We have invested in state-of-the-art cold press technology and rigorous quality control processes to ensure that every drop of oil retains its natural aroma, flavor, and nutritional value. We don't just manufacture oil; we bottle health and trust."
                                    </p>
                                </div>

                                <div className="mt-12 flex items-center gap-6">
                                    {/* <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                        alt="Signature"
                                        className="h-12 opacity-60"
                                    />

                                     */}
                                    <div>
                                        <p className="font-bold text-primary-dark text-lg">Mayank Bansal</p>
                                        <p className="text-xs text-gray-400 font-bold tracking-widest">Founder & Managing Director</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values / Stats Strip */}
                <div className="bg-primary-dark text-white py-16 border-y border-white/5">
                    <div className="container-custom px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {[
                                { number: 25, suffix: "+", label: "Years of Excellence" },
                                { number: 50, suffix: "k+", label: "Metric Tons Supplied" },
                                { number: 100, suffix: "%", label: "FSSAI Certified" },
                                { number: 500, suffix: "+", label: "Distributors" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <p className="text-4xl sm:text-5xl font-black text-primary-light mb-2">
                                        <Counter to={stat.number} suffix={stat.suffix} />
                                    </p>
                                    <p className="text-xs sm:text-sm font-bold tracking-widest text-gray-400">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Our Awesome Team */}
                <section className="py-20 sm:py-32 bg-gray-50">
                    <div className="container-custom px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16 sm:mb-24"
                        >
                            <span className="text-primary font-black tracking-widest text-xs mb-3 block">The minds behind Ananta</span>
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight">Our awesome team</h2>
                            <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                        >
                            {[
                                {
                                    name: "Sandeep Agrawal",
                                    role: "General Manager Sales",
                                    quote: "Efficient extraction processes ensure maximum nutrition retention.",
                                    img: "sales.jpeg"
                                },
                                {
                                    name: "Ankit Bansal",
                                    role: "MD @ Ananta Edible",
                                    quote: "Every batch is tested for consistency and purity standards.",
                                    img: "/ankit_md.jpeg"
                                },

                                {
                                    name: "Rajesh Kumar",
                                    role: "General Manager Supply Chain",
                                    quote: "Ensuring our products reach distributors on time, every time.",
                                    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
                                },
                                {
                                    name: "Rajesh Kumar",
                                    role: "General Manager Operations",
                                    quote: "Safety and hygiene are our top priorities in the factory.",
                                    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
                                },
                            ].map((member, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col"
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                            <a href="#" className="p-3 bg-white rounded-full text-primary-dark hover:text-primary hover:scale-110 transition-all shadow-lg"><Linkedin size={18} /></a>
                                            <a href="#" className="p-3 bg-white rounded-full text-primary-dark hover:text-primary hover:scale-110 transition-all shadow-lg"><Twitter size={18} /></a>
                                            <a href="#" className="p-3 bg-white rounded-full text-primary-dark hover:text-primary hover:scale-110 transition-all shadow-lg"><Mail size={18} /></a>
                                        </div>
                                    </div>

                                    <div className="p-8 flex-grow flex flex-col items-center text-center relative">
                                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary-light/50 to-transparent absolute top-0"></div>
                                        <h4 className="text-xl font-black text-primary-dark mb-1">{member.name}</h4>
                                        <p className="text-xs font-bold text-primary tracking-widest mb-6">{member.role}</p>

                                        <div className="relative mt-auto">
                                            <Quote size={16} className="text-gray-300 absolute -top-3 -left-2 transform -scale-x-100" />
                                            <p className="text-gray-500 text-sm italic leading-relaxed px-2">
                                                {member.quote}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="text-center mt-16">
                            <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-sm hover:gap-4 transition-all">
                                Join our team <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </section>


                <CertificationLogos />
                <NewsletterBanner />
            </main>


        </div>
    );
}

// function Headset() {
//     return (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7z" />
//             <path d="M21 16v2a2 2 0 0 1-2 2h-1" />
//             <path d="M3 16v2a2 2 0 0 0 2 2h1" />
//             <path d="M11 11 v4M13 11 v4" />
//         </svg>
//     );
// }
