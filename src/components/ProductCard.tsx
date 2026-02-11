import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProductCardProps {
    image: string;
    category: string;
    title: string;
    rating: number;
    reviews: number;
    basePrice: string;
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
            className={`group bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-premium relative flex flex-col h-full cursor-pointer ${unavailable ? 'opacity-75' : ''}`}
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

            <div className="aspect-square w-full h-full rounded-xl bg-gray-50 flex items-center justify-center mb-4 overflow-hidden relative">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                {unavailable && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-10">
                        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-medium border border-white/20">Out Of Stock</span>
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-grow">
                <p className="text-xs font-bold text-gray-400 tracking-widest mb-1">{category}</p>
                <h4 className="text-base font-bold text-primary-dark mb-2 line-clamp-2 leading-snug h-12 group-hover:text-primary-light transition-colors">{title}</h4>

                <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < Math.floor(rating) ? "fill-secondary text-secondary" : "text-gray-200"} />
                        ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">|</span>
                    <span className="text-xs text-gray-500 font-medium">{reviews} Reviews</span>
                </div>

                <div className="mt-auto">
                    <div className="flex gap-1 mb-4 flex-wrap">
                        {['1L', '5L', '15L'].map(size => (
                            <button key={size} className="text-xs px-2 py-1 border border-gray-100 rounded bg-gray-50 hover:bg-primary-light hover:text-white transition-colors font-medium">{size}</button>
                        ))}
                    </div>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/product')}
                        className={`w-full btn-primary !py-2.5 !text-xs !bg-primary ${unavailable ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                        Explore Product
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
