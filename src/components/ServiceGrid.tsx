import { Headset, ShieldCheck, Gem, Truck, Award, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Headset size={32} className="text-primary" />,
        title: "Customer service",
        description: "Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration."
    },
    {
        icon: <ShieldCheck size={32} className="text-primary" />,
        title: "Security",
        description: "When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. Use only tamper-proof and discrete packaging."
    },
    {
        icon: <Gem size={32} className="text-primary" />,
        title: "Best value",
        description: "We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products."
    },
    {
        icon: <Truck size={32} className="text-primary" />,
        title: "Delivery insurance",
        description: "If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge."
    },
    {
        icon: <Award size={32} className="text-primary" />,
        title: "Highest quality",
        description: "All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers to revise quality standards."
    },
    {
        icon: <Handshake size={32} className="text-primary" />,
        title: "Trust",
        description: "With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests."
    }
];

export default function ServiceGrid() {
    return (
        <section className="py-16 bg-[#F2F6F4] overflow-hidden">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-16 sm:mb-20"
                >
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black mb-8 leading-tight tracking-tighter text-primary-dark">
                        What makes us the <span className="text-secondary underline decoration-primary-light">#1</span> online Ananta dispensary in India?
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-medium">
                        We prioritize quality, security, and customer satisfaction above all else. Here are the six core pillars of our service that make us stand out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-premium transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-primary-light/10 group-hover:border-primary-light transition-all duration-300">
                                <motion.div
                                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {service.icon}
                                </motion.div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-black mb-4 tracking-tighter text-primary-dark group-hover:text-primary-light transition-colors">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
