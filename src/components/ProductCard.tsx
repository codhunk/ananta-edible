import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
    image: string;
    category: string;
    title: string;
    rating: number;
    reviews: number;
    basePrice?: string;
    salePrice?: string;
    tag?: string;
    unavailable?: boolean;
}

export default function ProductCard({
    image, category, title, rating, reviews, tag, unavailable
}: ProductCardProps) {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onClick={() => !unavailable && navigate('/product')}
            className={`group bg-white rounded-3xl p-5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-light/10 relative flex flex-col h-full cursor-pointer ${unavailable ? 'opacity-75' : ''}`}
        >
            {tag && (
                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="absolute top-4 left-4 z-20 bg-secondary text-primary-dark text-xs font-bold px-2 py-1 rounded shadow-sm"
                >
                    {tag}
                </motion.div>
            )}

            <div className="aspect-square w-full rounded-2xl bg-gray-50 flex items-center justify-center mb-5 overflow-hidden relative group-hover:bg-white transition-colors duration-500 shadow-inner">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/5 transition-colors duration-500 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileHover={{ opacity: 1, scale: 1, y: 0 }}
                        className="bg-white text-primary-dark px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.2em] shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        VIEW DETAILS
                    </motion.div>
                </div>
                {unavailable && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest border border-white/20">OUT OF STOCK</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-grow">
                <p className="text-[10px] font-black text-primary-light/60 tracking-[0.3em] mb-2 uppercase">{category}</p>
                <h4 className="text-sm sm:text-base font-black text-primary-dark mb-3 line-clamp-2 leading-tight group-hover:text-primary-light transition-colors duration-300">{title}</h4>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-gray-200"} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">|</span>
                    <span className="text-xs text-gray-500 font-medium">{reviews} Reviews</span>
                </div>

            </div>
        </motion.div>
    );
}
