import { MapPin, Phone, Mail, Send, Clock, Globe, ChevronDown, MessageSquare, ShieldCheck, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    } as const;

    const faqs = [
        {
            question: "How can I place a bulk order?",
            answer: "You can place a bulk order by filling out the contact form below or emailing us directly at sales@anantaedible.com. Our team will get back to you with a customized quote within 24 hours."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship our premium products globally. For international export inquiries, please contact our export division at export@anantaedible.com."
        },
        {
            question: "Are your products FSSAI certified?",
            answer: "Absolutely. All Ananta products are FSSAI certified and manufactured under strict quality control standards to ensure the highest food safety."
        },
        {
            question: "Can I visit your manufacturing facility?",
            answer: "Facility visits are possible by prior appointment for business partners. Please contact us via phone or email to schedule a visit."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 overflow-x-hidden">
            {/* Elegant Header Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-[#0F172A] py-20 sm:py-32 relative overflow-hidden"
            >
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                        alt="background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/80 to-[#0F172A]"></div>
                </div>

                <div className="container-custom relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.25em] text-primary-light bg-primary/10 rounded-full border border-primary/20 uppercase">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                            Let's Build Something <span className="text-primary-light italic">Great</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 font-medium">
                            Have questions about our premium edible products or seeking a long-term partnership? Our professional team is here to assist you.
                        </p>

                        <div className="flex justify-center items-center gap-2 text-sm font-bold tracking-widest text-gray-500">
                            <a href="/" className="hover:text-primary-light transition-colors uppercase">Home</a>
                            <span className="text-white/20 px-2">•</span>
                            <span className="text-white uppercase">Contact Us</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <main className="container-custom px-4 -mt-16 relative z-20 pb-24">
                {/* Stats/Badge Row */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {[
                        { icon: <ShieldCheck className="text-primary" />, label: "Priority Response", sub: "Within 24 Business Hours" },
                        { icon: <MessageSquare className="text-primary" />, label: "Expert Support", sub: "Consult with Specialists" },
                        { icon: <Headphones className="text-primary" />, label: "Global Reach", sub: "Connect from Anywhere" }
                    ].map((badge, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                            }}
                            className="bg-white p-6 rounded-2xl shadow-premium flex items-center gap-4 border border-gray-100 cursor-default transition-all duration-300"
                        >
                            <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/10 transition-colors">{badge.icon}</div>
                            <div>
                                <h4 className="font-black text-gray-900 leading-none mb-1 group-hover:text-primary transition-colors">{badge.label}</h4>
                                <p className="text-xs text-gray-500 font-medium">{badge.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Info Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                {
                                    icon: <MapPin />,
                                    title: "Factory",
                                    content: "Ananta Edible, Agra, UP, India 282001",
                                    color: "bg-blue-50 text-blue-600"
                                },
                                {
                                    icon: <Mail />,
                                    title: "Email",
                                    content: "sales@anantaedible.com",
                                    secondary: "export@anantaedible.com",
                                    color: "bg-purple-50 text-purple-600"
                                },
                                {
                                    icon: <Phone />,
                                    title: "Phone",
                                    content: "+91 74549 57272",
                                    secondary: "+91 144 234567",
                                    color: "bg-green-50 text-green-600"
                                },
                                {
                                    icon: <Clock />,
                                    title: "Hours",
                                    content: "Mon - Sat: 9 AM - 7 PM",
                                    secondary: "Sunday: Closed",
                                    color: "bg-amber-50 text-amber-600"
                                }
                            ].map((info, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                                        borderColor: "rgba(var(--primary-rgb), 0.3)"
                                    }}
                                    className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-start group transition-all duration-300 cursor-pointer"
                                >
                                    <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-xs font-black tracking-[0.2em] text-gray-400 mb-3 uppercase group-hover:text-primary transition-colors">{info.title}</h3>
                                    <p className="text-base text-gray-900 font-bold leading-tight mb-1 group-hover:translate-x-1 transition-transform">{info.content}</p>
                                    {info.secondary && <p className="text-sm text-gray-500 font-medium group-hover:translate-x-1 transition-transform delay-75">{info.secondary}</p>}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social & Support Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-primary rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl shadow-primary/20"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xl text-white/70 mb-2 flex items-center gap-2">
                                    <Globe size={24} /> Stay Connected
                                </h3>
                                <p className="text-white/50 text-sm mb-6 font-medium">Follow us on social media for latest updates and news.</p>
                                <div className="flex gap-4">
                                    {['FB', 'TW', 'IG', 'LN'].map((soc) => (
                                        <motion.button
                                            key={soc}
                                            whileHover={{
                                                scale: 1.15,
                                                rotate: 5,
                                                backgroundColor: "rgba(255, 255, 255, 1)",
                                                color: "var(--primary-color, #f97316)"
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-xs transition-all"
                                        >
                                            {soc}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        </motion.div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-[40px] p-6 lg:p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-3">Send us a <span className="text-primary italic">Message</span></h2>
                                    <p className="text-gray-500 text-sm font-medium">Fill out the form below and we'll connect you with the right department.</p>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.1em] text-gray-400 uppercase ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold placeholder:text-gray-300 ring-0"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.1em] text-gray-400 uppercase ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="yourname@gmail.com"
                                            className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold placeholder:text-gray-300 ring-0"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.1em] text-gray-400 uppercase ml-1">Subject</label>
                                        <select className="w-full bg-gray-50 border border-transparent rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold text-gray-400 appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Bulk Order Request</option>
                                            <option>Distributorship Query</option>
                                            <option>Career Opportunities</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black tracking-[0.1em] text-gray-400 uppercase ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="How can we help you?"
                                            className="w-full bg-gray-50 border border-transparent rounded-[32px] px-6 py-5 text-sm focus:bg-white focus:border-primary/30 focus:outline-none transition-all resize-none font-bold placeholder:text-gray-300 ring-0"
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2 pt-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto bg-primary text-white font-black px-12 py-5 rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group tracking-widest text-xs uppercase"
                                        >
                                            Send Your Message
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </motion.button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <span className="text-primary font-black tracking-widest text-xs uppercase mb-3 block">Clarifications</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <motion.button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    whileHover={{ paddingLeft: "2.5rem" }}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group transition-all duration-300"
                                >
                                    <span className={`font-black text-sm sm:text-base transition-colors duration-300 ${activeFaq === i ? 'text-primary' : 'text-gray-700 group-hover:text-primary'}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gray-400 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`}
                                    />
                                </motion.button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-6 text-gray-500 text-sm font-medium leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </main>

            {/* Premium Map Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full h-[500px] relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-primary/20 pointer-events-none z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.252436856341!2d78.04182337524462!3d27.461399376324422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974876cffd801f1%3A0xf002d5d8279b21e8!2sAnanta%20Edible%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770232947834!5m2!1sen!2sin"
                    className="w-full h-full border-0 transition-all duration-1000"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Map Info Overlay */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-40px)] max-w-lg">
                    <div className="bg-[#0F172A] p-6 rounded-3xl shadow-2xl flex items-center justify-between border border-white/10 backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="text-white  text-sm">Main Manufacturing Unit</h4>
                                <p className="text-gray-400 text-xs">Agra, Uttar Pradesh</p>
                            </div>
                        </div>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white text-[10px] font-black tracking-widest transition-all uppercase"
                        >
                            Directions
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
