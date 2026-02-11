import { motion } from "framer-motion";

const aboutIns = [
    {
        image: '/card_img1.png', // Shipping/Truck icon
        heading: 'Reliable Logistics',
        description: 'Ananta provides seamless nationwide delivery right to your doorstep! We ensure every batch is handled with care for maximum freshness.',
    },
    {
        image: '/card_img2.png', // Secure/Shield icon
        heading: 'Certified Purity',
        description: 'Our state-of-the-art laboratory tests every batch for moisture, acidity, and chemical-free processing. You are safe with our FSSAI certified oils.',
    },
    {
        image: '/card_img3.png', // Quality/Trophy icon
        heading: 'Premium Quality',
        description: 'We take pride in our "Farm-to-Fork" model. Our prices are optimized to ensure your family receives premium, healthy nutrients at an honest value.',
    }
];

export default function FeatureGrid() {
    return (
        <div className="bg-[#F2F6F4] py-12 sm:py-16 md:py-20 overflow-hidden">
            <div className="container-custom">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-12 md:mb-16"
                >
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-4 tracking-tight">
                        Why Choose <span className="text-primary-light">Ananta</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Discover what makes us the preferred choice for thousands of families across India.
                    </p>
                </motion.div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {aboutIns.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="w-full"
                        >
                            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full p-8 sm:p-12 flex items-start gap-4 border border-white/20 backdrop-blur-sm">
                                {/* Icon Container */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1 + 0.3,
                                        type: "spring"
                                    }}
                                    viewport={{ once: true }}
                                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 rounded-2xl flex items-center justify-center p-3 text-primary-dark"
                                >
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-contain text-primary-dark"
                                        alt={item.heading}
                                    // style={{ filter: "hue-rotate(90deg) saturate(1.5)" }}
                                    />
                                </motion.div>

                                {/* Content */}
                                <div className="flex-1">
                                    <motion.h3
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                                        viewport={{ once: true }}
                                        className="text-lg sm:text-xl font-black text-primary-dark mb-2 tracking-tight"
                                    >
                                        {item.heading}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                                        viewport={{ once: true }}
                                        className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium"
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 sm:mt-16 text-center"
                >
                    <div className="inline-flex items-center justify-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white shadow-xl rounded-full border border-gray-100">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-light rounded-full animate-pulse" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-bounce" />
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-dark rounded-full" />
                        <span className="text-xs sm:text-sm text-primary-dark font-black tracking-widest ml-2">
                            Trusted by 10,000+ families
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
