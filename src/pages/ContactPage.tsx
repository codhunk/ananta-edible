import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">


            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full bg-primary-dark py-12 sm:py-20 relative overflow-hidden"
            >
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <img
                        src="https://images.unsplash.com/photo-1542223175-75bc9dd570ED?q=80&w=2000&auto=format&fit=crop"
                        alt="background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="container-custom relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center items-center gap-2 text-xs sm:text-sm text-gray-400 font-black uppercase tracking-[0.2em]"
                    >
                        <a href="/" className="hover:text-primary-light transition-colors">Home</a>
                        <span className="text-white/20">/</span>
                        <span className="text-white">Contact Us</span>
                    </motion.div>
                </div>
            </motion.div>

            <main className="container-custom px-4 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Info Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-4 space-y-6 sm:space-y-8"
                    >
                        {[
                            { icon: <MapPin size={28} />, title: "Factory Location", content: "Plot No. 123, Industrial Area, Alwar, Rajasthan, 301001" },
                            { icon: <Mail size={28} />, title: "Inquiries", content: "sales@ananta.com", secondary: "export@ananta.com" },
                            { icon: <Phone size={28} />, title: "Contact", content: "+91 98765 43210", secondary: "+91 144 234567" }
                        ].map((info, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-premium text-center flex flex-col items-center group transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    {info.icon}
                                </div>
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-300 mb-3 group-hover:text-primary transition-colors">{info.title}</h3>
                                <p className="text-sm sm:text-base text-primary-dark leading-relaxed font-black uppercase tracking-tight italic">
                                    {info.content}
                                </p>
                                {info.secondary && (
                                    <p className="text-sm sm:text-base text-primary-dark leading-relaxed font-black uppercase tracking-tight mt-1">{info.secondary}</p>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8"
                    >
                        <div className="bg-white border border-gray-100 rounded-[40px] p-8 lg:p-20 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl sm:text-4xl font-black text-primary-dark mb-4 uppercase tracking-tighter">Partner with <span className="text-primary-light">Us</span></h2>
                                <p className="text-gray-400 text-sm sm:text-base mb-12 sm:mb-16 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left font-medium">
                                    For bulk orders, distributorship inquiries, or general questions, please fill out the form below.
                                </p>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                                    <motion.div variants={itemVariants} className="md:col-span-1">
                                        <label className="block text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all font-bold placeholder:text-gray-300"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="md:col-span-1">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="Hello@gmail.com"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all font-bold placeholder:text-gray-300"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="md:col-span-2">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all font-bold placeholder:text-gray-300"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="md:col-span-2">
                                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Your message..."
                                            className="w-full bg-gray-50 border border-gray-100 rounded-3xl px-6 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition-all resize-none font-bold placeholder:text-gray-300"
                                        ></textarea>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="md:col-span-2 mt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full sm:w-auto bg-primary text-white font-black px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group uppercase tracking-[0.2em] text-xs"
                                        >
                                            Send Message
                                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </motion.button>
                                    </motion.div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Map Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full h-[350px] sm:h-[500px] bg-gray-50 relative shadow-inner p-4"
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.252436856341!2d78.04182337524462!3d27.461399376324422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974876cffd801f1%3A0xf002d5d8279b21e8!2sAnanta%20Edible%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1770232947834!5m2!1sen!2sin"
                    className="w-full h-full border-0 hover:scale-105 transition-all duration-1000"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </motion.section>

            <Footer />
        </div>
    );
}
