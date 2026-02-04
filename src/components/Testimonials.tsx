import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        author: "Vikki Starr",
        date: "January 15, 2023",
        content: "Absolutely love Ananta; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family.",
        rating: 4,
        avatar: "https://i.pravatar.cc/150?u=vikki"
    },
    {
        author: "Terry Baskey",
        date: "January 5, 2023",
        content: "Best damn place to buy your premium organic products at great prices. The quality is unmatched.",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?u=terry"
    }
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl lg:text-5xl text-primary-dark mb-12 sm:mb-16 uppercase font-black tracking-tighter"
                >
                    Customer Testimonials
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/3 bg-primary-dark rounded-[32px] p-8 sm:p-10 text-white flex flex-col justify-between min-h-[350px] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-black mb-8 leading-tight uppercase text-secondary">VOTED BEST ONLINE DISPENSARY IN INDIA</h3>
                            <div className="w-full h-px bg-white/10 mb-8"></div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-3xl font-black tracking-tighter uppercase">Ananta Review</span>
                            </div>
                            <p className="text-xs text-gray-400 uppercase tracking-[0.2em] font-black mb-4 underline decoration-primary-light underline-offset-4">Excellent</p>
                            <div className="flex gap-1 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-secondary text-secondary" />)}
                            </div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">| on <span className="text-white">135</span> Reviews</p>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-2/3 flex items-center gap-4 sm:gap-6 relative">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -left-2 sm:-left-4 z-10 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all border border-gray-100"
                        >
                            <ChevronLeft size={20} />
                        </motion.button>

                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white border border-gray-100 rounded-[32px] p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-premium transition-all duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-6 border-b border-gray-50 pb-6">
                                        <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full ring-4 ring-primary-light/5" />
                                        <div className="flex flex-col">
                                            <span className="font-black text-primary-dark uppercase tracking-tight">{t.author}</span>
                                            <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">{t.date}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, starIdx) => (
                                            <Star key={starIdx} size={14} className={starIdx < t.rating ? "fill-secondary text-secondary" : "text-gray-200"} />
                                        ))}
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow font-medium">"{t.content}"</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -right-2 sm:-right-4 z-10 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-primary transition-all border border-gray-100"
                        >
                            <ChevronRight size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
