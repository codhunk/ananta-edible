import { ClipboardList, ShoppingBag, Wallet, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: <ClipboardList size={40} />,
        title: "REGISTER",
        description: "Create an account for bulk or retail orders. It's quick, simple, and helps you track your shipments."
    },
    {
        icon: <ShoppingBag size={40} />,
        title: "SELECT OILS",
        description: "Browse our premium range of Kachi Ghani Mustard Oil, Soybean Oil, and Sunflower Oil."
    },
    {
        icon: <Wallet size={40} />,
        title: "SECURE PAYMENT",
        description: "Pay securely via net banking, UPI, or cards. We ensure 100% safe transactions for all orders."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "FAST DELIVERY",
        description: "Your order is hygienically packed and dispatched immediately. Track your oil all the way to your doorstep."
    }
];

export default function OrderSteps() {
    return (
        <section className="py-8 sm:py-14 bg-[#01140D] text-white overflow-hidden">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 uppercase leading-tight tracking-tighter">HOW TO ORDER <br /> <span className="text-primary-light">PURE ANANTA OILS</span></h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto px-4 font-bold uppercase tracking-widest text-xs sm:text-sm">
                        Ordering pure, healthy oils online is simple and secure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 sm:gap-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center relative group"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                                className="absolute top-0 right-1/2 translate-x-12 -translate-y-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary font-black text-xs ring-4 ring-[#01140D] z-10 shadow-lg"
                            >
                                {index + 1}
                            </motion.div>
                            <div className="w-24 h-24 bg-white/5 rounded-[32px] flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary-light transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(112,232,120,0.1)]">
                                <div className="absolute inset-0 bg-primary-light/0 group-hover:bg-primary-light/5 transition-colors"></div>
                                <motion.div
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    className="text-primary-light drop-shadow-[0_0_10px_rgba(112,232,120,0.3)] z-10"
                                >
                                    {step.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary-light transition-colors">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 sm:mt-20 flex justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary !bg-primary-light !px-12 !py-4 shadow-2xl shadow-primary-light/20 !text-xs !font-black uppercase tracking-[0.2em]"
                    >
                        Choose Healthy Oils
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
