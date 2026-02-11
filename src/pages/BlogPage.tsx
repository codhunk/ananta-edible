import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const blogPosts = [
    {
        id: 1,
        title: "How to Identify Pure Kachi Ghani Mustard Oil",
        excerpt: "Learn the simple home tests to check the purity of your mustard oil and ensure your family's health with authentic products.",
        date: "February 2, 2026",
        author: "Rajesh Kumar",
        readTime: "5 min read",
        image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Quality Guide"
    },
    {
        id: 2,
        title: "Understanding FSSAI Standards for Edible Oils",
        excerpt: "What does the FSSAI mark mean? A comprehensive guide to understanding food safety standards in India.",
        date: "January 28, 2026",
        author: "Dr. Priya Sharma",
        readTime: "8 min read",
        image: "https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Food Safety"
    },
    {
        id: 3,
        title: "5 Health Benefits of Cold-Pressed Oils",
        excerpt: "Discover why cold-pressed oils retain more nutrients and how they can boost your family's health.",
        date: "January 15, 2026",
        author: "Nutritionist Meera",
        readTime: "4 min read",
        image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Health"
    },
    {
        id: 4,
        title: "Refined vs. Cold-Pressed: Which Oil is Right for You?",
        excerpt: "A comprehensive breakdown of the differences between refined and cold-pressed oils and their best uses in cooking.",
        date: "January 5, 2026",
        author: "Chef Arjun",
        readTime: "6 min read",
        image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600",
        category: "Cooking Tips"
    },
    {
        id: 5,
        title: "Our Journey to Sustainable Packaging",
        excerpt: "We are proud to announce our shift towards 100% eco-friendly packaging starting this March.",
        date: "December 20, 2025",
        author: "Ananta Team",
        readTime: "3 min read",
        image: "https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Company News"
    },
    {
        id: 6,
        title: "Best Practices for Storing Edible Oils",
        excerpt: "Proper storage is key to maintaining the nutritional value and freshness of your oils for longer periods.",
        date: "December 12, 2025",
        author: "Storage Expert",
        readTime: "10 min read",
        image: "https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Storage Tips"
    }
];

export default function BlogPage() {
    return (
        <div className="w-full bg-background min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary-dark/80 z-10" />
                <img
                    src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1920"
                    alt="Blog Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-2xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tight"
                    >
                        The Ananta Blog
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto px-2"
                    >
                        Health insights, quality tips, and industry news from India's trusted edible oil manufacturer.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-12 sm:py-24 bg-white">
                <div className="container-custom px-4 sm:px-6">

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    >
                        {blogPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-dark tracking-wider">
                                        {post.category}
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="flex-grow p-6 sm:p-8 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-light transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-primary-dark">
                                                <User size={14} />
                                            </div>
                                            {post.author}
                                        </div>

                                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary-dark group-hover:bg-primary-light group-hover:text-white group-hover:border-primary-light transition-all duration-300">
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="container-custom relative z-10 text-center"
                >
                    <h2 className="text-2xl sm:text-2xl lg:text-4xl font-bold mb-6">Stay Updated</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                        Subscribe to our newsletter for the latest articles, product launches, and exclusive offers.
                    </p>
                    <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 sm:gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light backdrop-blur-sm w-full"
                        />
                        <button className="btn-primary !py-3 whitespace-nowrap w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
