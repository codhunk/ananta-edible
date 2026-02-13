import { motion, useInView, animate } from 'framer-motion';
import { Linkedin, Twitter, Mail, Quote, ExternalLink, Users } from 'lucide-react';
import CertificationLogos from '../components/CertificationLogos';
import NewsletterBanner from '../components/NewsletterBanner';
import { useEffect, useRef, useState } from 'react';

// Counter Component
const Counter = ({ from = 0, to, suffix = "", duration = 1.5 }: { from?: number, to: number, suffix?: string, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (node) node.textContent = Math.round(value) + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [from, to, suffix, duration, inView]);

    return <span ref={nodeRef} className="tabular-nums">{from}{suffix}</span>;
};

export default function AboutPage() {
    const [isAnkitExpanded, setIsAnkitExpanded] = useState(false);
    const [isMayankExpanded, setIsMayankExpanded] = useState(false);

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
                <section className="py-12 sm:py-24 relative px-4 sm:px-8 lg:px-12">
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
                                        src="/ankit_md.jpeg"
                                        alt="Director"
                                        className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-dark/90 to-transparent p-8 ">
                                        <p className="text-white font-black text-xl tracking-tighter">Ankit Bansal</p>
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
                                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                                    <div className="w-16 h-[2px] bg-primary-light"></div>
                                    <span className="text-primary-light font-black tracking-widest text-sm uppercase">Director's message</span>
                                </div>

                                <h2 className="text-2xl sm:text-2xl lg:text-3xl font-black text-primary-dark mb-10 leading-tight text-center lg:text-left">
                                    Building a legacy of <span className="text-primary hover:text-primary-dark transition-colors duration-300">purity</span> & <span className="text-primary hover:text-primary-dark transition-colors duration-300">trust</span>.
                                </h2>

                                <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-serif italic relative pl-12">
                                    <Quote className="absolute left-0 top-0 text-primary-light/20 w-8 h-8 transform -scale-x-100" />
                                    <div className={`${!isAnkitExpanded ? 'max-h-[150px] sm:max-h-none overflow-hidden sm:overflow-visible relative' : ''}`}>
                                        <p>
                                            "At Ananta, we hold the conviction that good health begins in the kitchen. For over two decades, our mission has been simple: to provide Indian families with edible oils that are as pure as nature intended."
                                        </p>
                                        <p>
                                            "We have invested in state-of-the-art cold press technology and rigorous quality control processes to ensure that every drop of oil retains its natural aroma, flavor, and nutritional value. We don't just manufacture oil; we bottle health and trust."
                                        </p>
                                        {!isAnkitExpanded && (
                                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent sm:hidden"></div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setIsAnkitExpanded(!isAnkitExpanded)}
                                        className="text-primary font-bold text-sm tracking-widest hover:text-primary-dark transition-colors sm:hidden mt-2"
                                    >
                                        {isAnkitExpanded ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>

                                <div className="mt-12 hidden lg:flex items-center gap-6 justify-center lg:justify-start">
                                    <div>
                                        <p className="font-bold text-primary-dark text-xl text-center lg:text-left">Ankit Bansal</p>
                                        <p className="text-xs text-gray-400 font-bold tracking-widest uppercase text-center lg:text-left">Founder & Managing Director</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className="py-4 sm:py-8 relative px-4 sm:px-8 lg:px-12">
                    <div className="container-custom px-4">
                        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 items-center sm:items-start">

                            {/* Director's Message */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-7/12 lg:pt-8"
                            >
                                <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                                    <div className="w-16 h-[2px] bg-primary-light order-2 lg:order-1"></div>
                                    <span className="text-primary-light font-black tracking-widest text-sm uppercase order-1 lg:order-2">Director's message</span>
                                </div>

                                <h2 className="text-2xl sm:text-2xl lg:text-3xl font-black text-primary-dark mb-10 leading-tight text-center lg:text-right">
                                    Expanding horizons through <span className="text-primary hover:text-primary-dark transition-colors duration-300">innovation</span> & <span className="text-primary hover:text-primary-dark transition-colors duration-300">quality</span>.
                                </h2>

                                <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-serif italic relative pl-12">
                                    <Quote className="absolute left-0 top-0 text-primary-light/20 w-8 h-8 transform -scale-x-100" />
                                    <div className={`${!isMayankExpanded ? 'max-h-[150px] sm:max-h-none overflow-hidden sm:overflow-visible relative' : ''}`}>
                                        <p>
                                            "Our vision extends beyond being just a manufacturer. We aim to redefine the standards of hygiene and transparency in the edible oil industry, bringing global best practices to every Indian household."
                                        </p>
                                        <p>
                                            "From choosing the finest seeds to delivering a leak-proof package, every step is a testament to our commitment to excellence. We believe in growth that is sustainable, ethical, and centered around consumer well-being."
                                        </p>
                                        {!isMayankExpanded && (
                                            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent sm:hidden"></div>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setIsMayankExpanded(!isMayankExpanded)}
                                        className="text-primary font-bold text-sm tracking-widest hover:text-primary-dark transition-colors sm:hidden mt-2"
                                    >
                                        {isMayankExpanded ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>

                                <div className="mt-12 hidden lg:flex items-center gap-6 justify-center lg:justify-end">
                                    <div>
                                        <p className="font-bold text-primary-dark text-lg text-center lg:text-right">Mayank Bansal</p>
                                        <p className="text-xs text-gray-400 font-bold tracking-widest uppercase text-center lg:text-right">Founder & Managing Director</p>
                                    </div>
                                </div>
                            </motion.div>
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
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary-dark/90 to-transparent p-8 ">
                                        <p className="text-white font-black text-xl tracking-tighter">Mayank Bansal</p>
                                        <p className="text-primary-light font-bold text-sm tracking-widest mt-1">Founder & Managing Director</p>
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
                                { number: 11, suffix: "+", label: "Years of Excellence" },
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
                <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
                    {/* Professional Background Watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-200/20 select-none pointer-events-none uppercase tracking-[0.2em] whitespace-nowrap z-0">
                        Ananta Team
                    </div>

                    <div className="container-custom px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16 sm:mb-24"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-black tracking-widest text-[10px] mb-4 uppercase border border-primary/20">
                                <Users size={12} /> The minds behind Ananta
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary-dark tracking-tight">Our awesome team</h2>
                            <div className="w-12 h-1.5 bg-primary mx-auto mt-8 rounded-full"></div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
                        >
                            {[
                                {
                                    name: "Sandeep Agrawal",
                                    role: "GM Sales",
                                    quote: "Efficient extraction processes ensure maximum nutrition retention.",
                                    img: "sales.jpeg",
                                    socials: [
                                        { icon: <Linkedin size={18} />, url: "https://in.linkedin.com/in/sandeep-agrawal-b2a1122a8" },
                                        { icon: <Twitter size={18} />, url: "https://x.com/San1981Agrawal" },
                                        { icon: <Mail size={18} />, url: "mailto:sandeepagrawal.mtr@gmail.com" }
                                    ]
                                },
                                {
                                    name: "Ankit Bansal",
                                    role: "MD @ Ananta",
                                    quote: "Every batch is tested for consistency and purity standards.",
                                    img: "/ankit_md.jpeg",
                                    socials: [
                                        { icon: <Linkedin size={18} />, url: "#" },
                                        { icon: <Twitter size={18} />, url: "#" },
                                        { icon: <Mail size={18} />, url: "mailto:ankit@anantaedible.com" }
                                    ]
                                },
                                {
                                    name: "Mahesh Raghav",
                                    role: "Head Accountant",
                                    quote: "Ensuring our products reach distributors on time, every time.",
                                    img: "mahesh_accountant.jpeg",
                                    socials: [
                                        { icon: <Linkedin size={18} />, url: "#" },
                                        { icon: <Mail size={18} />, url: "mailto:mahesh@anantaedible.com" }
                                    ]
                                },
                                {
                                    name: "Rajesh Kumar",
                                    role: "GM Operations",
                                    quote: "Safety and hygiene are our top priorities in the factory.",
                                    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
                                    socials: [
                                        { icon: <Linkedin size={18} />, url: "#" },
                                        { icon: <Mail size={18} />, url: "mailto:rajesh@anantaedible.com" }
                                    ]
                                },
                            ].map((member) => (
                                <motion.div
                                    key={member.name}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -12,
                                        transition: { duration: 0.4, ease: "circOut" }
                                    }}
                                    className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group border border-gray-100/50 flex flex-col relative"
                                >
                                    <div className="aspect-square relative overflow-hidden bg-gray-100">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110"
                                        />

                                        {/* Professional Content Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                <div className="flex gap-2.5 mb-5">
                                                    {member.socials.map((social, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href={social.url}
                                                            whileHover={{ scale: 1.15, backgroundColor: "white", color: "var(--primary-color, #f97316)" }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="w-10 h-10 bg-white/10 rounded-full text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center shadow-2xl"
                                                        >
                                                            {social.icon}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                                <p className="text-white/70 text-xs italic leading-relaxed font-serif line-clamp-2">
                                                    "{member.quote}"
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-7 text-center bg-white relative z-10 flex flex-col items-center flex-grow">
                                        <h4 className="text-xl font-black text-primary-dark mb-1.5 group-hover:text-primary transition-colors duration-300">{member.name}</h4>
                                        <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-100 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-300">
                                            <p className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase group-hover:text-primary-dark">{member.role}</p>
                                        </div>

                                        {/* Dynamic accent element */}
                                        <div className="mt-auto pt-6 flex flex-col items-center">
                                            <div className="w-8 h-1 bg-primary/20 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-700"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="text-center mt-8 mb-8">
                            <a href="/contact" className="inline-flex items-center gap-2 text-primary font-bold tracking-widest text-sm hover:gap-4 transition-all">
                                Join our team <ExternalLink size={16} />
                            </a>
                        </div>

                    </div>
                    <CertificationLogos />
                </section>

                <NewsletterBanner />
            </main>
        </div>
    );
}

