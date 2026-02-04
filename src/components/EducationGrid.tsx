import { motion } from 'framer-motion';

export default function EducationGrid() {
    const posts = [
        {
            date: "January 24, 2023",
            title: "12 Mistakes To Avoid When Buying Cannabis Online",
            excerpt: "Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home.",
            image: "https://via.placeholder.com/600x400?text=Education+1"
        },
        {
            date: "January 20, 2023",
            title: "How To Store Your Products and Keep it Fresh and Potent?",
            excerpt: "Packaging has advanced dramatically in recent years, making it easier to maintain the quality of your medicinal products.",
            image: "https://via.placeholder.com/600x400?text=Education+2"
        },
        {
            date: "January 19, 2023",
            title: "The Ultimate Guide to Checking Quality – 10 Industry Leading Tips",
            excerpt: "Quality is a term used to describe products that meet specific standards of excellence. It is essential to understand what it means.",
            image: "https://via.placeholder.com/600x400?text=Education+3"
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
                    <h2 className="text-3xl font-black uppercase text-primary-dark tracking-tighter">WEED EDUCATION</h2>
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
