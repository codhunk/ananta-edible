import { motion } from 'framer-motion';

export default function StrainGrid() {
    const strains = [
        {
            title: "Cold Pressed",
            description: "Extracted at low temperatures to retain natural aroma, flavor, and essential nutrients. Best for traditional Indian cooking.",
            linkText: "Shop Cold Pressed",
            link: "#"
        },
        {
            title: "Refined",
            description: "Processed to be light, odorless, and suitable for high-heat cooking like deep frying. Versatile for all cuisines.",
            linkText: "Shop Refined",
            link: "#"
        },
        {
            title: "Fortified",
            description: "Enriched with Vitamins A & D to support immunity and overall health. A healthy choice for the whole family.",
            linkText: "Shop Fortified",
            link: "#"
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
                                <motion.div
                                    whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-primary opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 z-10"
                                >
                                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,22C12,22 13,18 16,15C19,12 22,12 22,12C22,12 18,11 15,14C12,17 12,22 12,22M12,22C12,22 11,18 8,15C5,12 2,12 2,12C2,12 6,11 9,14C12,17 12,22 12,22M12,22C12,22 12,17 12,13C12,9 12,2 12,2C12,2 11,9 11,13C11,17 12,22 12,22M12,22C12,22 13,17 15,14C17,11 20,4 20,4C20,4 16,11 14,14C12,17 12,22 12,22M12,22C12,22 11,17 9,14C7,11 4,4 4,4C4,4 8,11 10,14C12,17 12,22 12,22Z" />
                                    </svg>
                                </motion.div>
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-primary-dark uppercase tracking-tighter group-hover:text-primary transition-colors">{strain.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                                {strain.description}
                            </p>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href={strain.link}
                                className="text-primary-light font-black uppercase tracking-[0.2em] text-xs sm:text-sm border-b-2 border-primary-light/20 hover:border-primary-light transition-all inline-block w-fit"
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
