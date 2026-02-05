import { motion } from 'framer-motion';

export default function Referral() {
    return (
        <section className="py-8 sm:py-14 overflow-hidden">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-auto sm:h-80 bg-primary-dark rounded-[32px] sm:rounded-[40px] relative overflow-hidden flex items-center p-8 sm:p-12 lg:p-20 group shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-30">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-primary-light to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"
                        ></motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], x: [0, -40, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-secondary to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"
                        ></motion.div>
                    </div>

                    <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-4 uppercase leading-none tracking-tighter"
                            >
                                REFER A BUSINESS
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl sm:text-2xl text-white font-black uppercase tracking-widest"
                            >
                                And get <span className="text-secondary underline decoration-primary-light">Discount!</span>
                            </motion.p>
                        </div>

                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-light hover:bg-white hover:text-primary text-white font-black px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-primary-light/20 uppercase tracking-[0.2em] text-xs sm:text-sm z-20"
                        >
                            Refer Here
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
