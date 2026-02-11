import { motion } from 'framer-motion';

export default function StrainGrid() {
    const strains = [
        {
            title: "Cold Pressed",
            description: "Extracted at low temperatures to retain natural aroma, flavor, and essential nutrients. Best for traditional Indian cooking.",
            linkText: "Shop Cold Pressed",
            link: "#",
            image: "/coldpress.png"
        },
        {
            title: "Refined",
            description: "Processed to be light, odorless, and suitable for high-heat cooking like deep frying. Versatile for all cuisines.",
            linkText: "Shop Refined",
            link: "#",
            image: "/refined.png"
        },
        {
            title: "Fortified",
            description: "Enriched with Vitamins A & D to support immunity and overall health. A healthy choice for the whole family.",
            linkText: "Shop Fortified",
            link: "#",
            image: "/fortified.png"
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container-custom px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {strains.map((strain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white border border-gray-100 rounded-[32px] p-8 sm:p-10 flex flex-col h-full group hover:shadow-premium transition-all duration-500"
                        >
                            <div className="aspect-square w-full rounded-[24px] bg-gray-50 flex items-center justify-center mb-8 overflow-hidden relative">
                                <motion.img
                                    src={strain.image}
                                    alt={strain.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 z-10"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                            </div>
                            <h3 className="text-2xl sm:text-2xl lg:text-4xl font-black mb-4 text-primary-dark tracking-tighter group-hover:text-primary transition-colors">{strain.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                {strain.description}
                            </p>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href={strain.link}
                                className="text-primary-light font-black tracking-[0.2em] text-xs sm:text-sm border-b-2 border-primary-light/20 hover:border-primary-light transition-all inline-block w-fit"
                            >
                                {strain.linkText}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
