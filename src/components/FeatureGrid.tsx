import { Truck, ShieldCheck, BadgePercent } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Truck size={40} className="text-primary" />,
        title: "Reliable Shipping",
        description: "Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt-in for shipping insurance. For orders over $149, shipping is free!"
    },
    {
        icon: <ShieldCheck size={40} className="text-primary" />,
        title: "You're Safe With Us",
        description: "Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency."
    },
    {
        icon: <BadgePercent size={40} className="text-primary" />,
        title: "Best Quality & Pricing",
        description: "Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { className: "transition", stiffness: 100, damping: 15 }
    }
};

export default function FeatureGrid() {
    return (
        <section className="py-14 bg-white overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container-custom"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="flex gap-6 items-start group"
                        >
                            <div className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm relative transition-all group-hover:shadow-lg group-hover:border-primary/20">
                                <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 group-hover:bg-primary/10 transition-colors"></div>
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                            </div>
                            <div>
                                <h3 className="text-xl mb-3 text-primary-dark font-black tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
