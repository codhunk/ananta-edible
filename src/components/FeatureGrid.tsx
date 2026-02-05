import { Truck, ShieldCheck, BadgePercent } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Truck size={40} className="text-primary" />,
        title: "Nationwide Logistics",
        description: "We ensure timely delivery of bulk and retail orders across India with our efficient supply chain network."
    },
    {
        icon: <ShieldCheck size={40} className="text-primary" />,
        title: "FSSAI Certified & Lab Tested",
        description: "Every batch is rigorously tested for purity and safety. We adhere to the highest food safety standards and regulations."
    },
    {
        icon: <BadgePercent size={40} className="text-primary" />,
        title: "Manufacturing Direct Pricing",
        description: "Get the best market rates directly from the manufacturer. No middlemen, just pure quality at the best price."
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
