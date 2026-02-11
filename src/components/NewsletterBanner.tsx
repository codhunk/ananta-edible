import { motion } from 'framer-motion';

export default function NewsletterBanner() {
    return (
        <section className="py-4 sm:py-10 bg-background relative z-10 overflow-hidden">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-primary-dark rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-16 text-center relative overflow-hidden flex flex-col items-center shadow-2xl"
                >
                    {/* Background Highlight */}
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-b from-primary-light/20 to-transparent"
                    ></motion.div>

                    <div className="relative z-10 max-w-2xl w-full">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl sm:text-2xl lg:text-4xl font-black text-white mb-6 leading-tight tracking-tighter"
                        >
                            Unlock <span className="text-secondary text-shadow">20% off</span> your <br className="hidden lg:block" /> first order
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-gray-400 text-sm sm:text-lg mb-10 sm:mb-12 font-bold tracking-widest"
                        >
                            Reveal coupon code by entering your email
                        </motion.p>

                        <div className="w-full h-px bg-white/10 mb-10 sm:mb-12"></div>

                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <motion.input
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                type="email"
                                placeholder="Email Address"
                                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-light placeholder:text-gray-600 font-bold text-sm tracking-widest"
                            />
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary-light hover:bg-white hover:text-primary text-white font-black px-10 py-4 rounded-full transition-all duration-300 whitespace-nowrap tracking-[0.2em] text-xs sm:text-sm shadow-xl shadow-primary-light/20"
                            >
                                Reveal coupon
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
