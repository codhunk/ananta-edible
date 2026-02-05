import { motion } from 'framer-motion';

export default function EducationGrid() {
    const posts = [
        {
            date: "January 24, 2026",
            title: "How to Identify Pure Kachi Ghani Mustard Oil",
            excerpt: "Learn the simple home tests to check the purity of your mustard oil and ensure your family's health.",
            image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            date: "January 20, 2026",
            title: "Best Practices for Storing Edible Oils",
            excerpt: "Proper storage is key to maintaining the nutritional value and freshness of your oils for longer.",
            image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            date: "January 19, 2026",
            title: "Understanding FSSAI Standards for Edible Oils",
            excerpt: "What does the FSSAI mark mean? A guide to understanding food safety standards in India.",
            image: "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ];

    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
                >
                    <h2 className="text-3xl font-black uppercase text-primary-dark tracking-tighter">HEALTH INSIGHTS</h2>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#"
                        className="text-primary-light font-black text-xs uppercase tracking-widest border-b-2 border-primary-light/20 hover:border-primary-light"
                    >
                        Show All
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col h-full group"
                        >
                            <div className="rounded-[32px] overflow-hidden mb-6 aspect-video bg-gray-200 relative">
                                <motion.img
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: 0.8 }}
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/10 transition-colors pointer-events-none"></div>
                            </div>
                            <p className="text-xs uppercase font-black text-gray-400 tracking-[0.2em] mb-3">{post.date}</p>
                            <h3 className="text-xl font-black mb-4 text-primary-dark group-hover:text-primary-light transition-colors line-clamp-2 leading-tight h-14 uppercase tracking-tighter">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-medium">
                                {post.excerpt}
                            </p>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="#"
                                className="text-primary-light font-black uppercase tracking-[0.2em] text-xs sm:text-sm border-b-2 border-primary-light/20 hover:border-primary-light inline-block w-fit"
                            >
                                Read More
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
