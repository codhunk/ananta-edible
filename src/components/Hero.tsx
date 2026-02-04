import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[500px] bg-primary overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary-light/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/30 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            </div>

            <div className="container-custom relative z-10 py-12 flex flex-col lg:flex-row items-center justify-between min-h-[500px]">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-white">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase"
                    >
                        Best Seller
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white uppercase"
                    >
                        BEST DISPENSARY TO <br /> BUY WEED ONLINE
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-300 mb-8"
                    >
                        Vitamins & Supplements
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-8 mb-10"
                    >
                        <div className="text-xl font-semibold">
                            Get <span className="text-secondary">25% off</span>
                        </div>
                        <div className="h-6 w-[1px] bg-white/20"></div>
                        <div className="text-xl font-semibold">
                            Free Shipping
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="btn-primary !px-6 !py-2.5"
                    >
                        Shop All
                    </motion.button>
                </div>

                {/* 3D Visuals / Image section */}
                <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[350px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full scale-90">
                            <motion.div
                                initial={{ opacity: 0, rotateX: 60 }}
                                animate={{ opacity: 1, rotateX: 45 }}
                                transition={{ duration: 1 }}
                                className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-white/5 backdrop-blur-sm border border-white/10 origin-bottom-right rotate-45 transform-gpu"
                            ></motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-20 w-40 h-56 bg-gray-800/80 rounded-lg shadow-2xl overflow-hidden border border-white/10"
                            >
                                <img src="https://via.placeholder.com/200x300?text=Premium+Flower" alt="Product" className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-10 left-20 w-36 h-48 bg-white rounded-lg shadow-2xl overflow-hidden border border-white/10"
                            >
                                <img src="https://via.placeholder.com/200x300?text=Edibles" alt="Product" className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-20 right-48 w-32 h-44 bg-gray-200 rounded-lg shadow-2xl overflow-hidden border border-white/10 rotate-12"
                            >
                                <img src="https://via.placeholder.com/200x300?text=Sativa" alt="Product" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
