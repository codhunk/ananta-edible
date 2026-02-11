import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import NewsletterBanner from '../components/NewsletterBanner';

interface FaqItem {
    question: string;
    answer: string;
    category: string;
}

const faqs: FaqItem[] = [
    {
        category: "Product Quality",
        question: "Is Ananta mustard oil 100% pure?",
        answer: "Yes, our mustard oil is processed using the traditional Kachi Ghani method without any chemical refining or blending. We perform 40+ quality tests to ensure 100% purity and zero adulteration."
    },
    {
        category: "Product Quality",
        question: "Are your oils cold-pressed?",
        answer: "Yes, our Kachi Ghani Mustard Oil is cold-pressed at low temperatures to retain its natural pungency, aroma, and nutritional properties."
    },
    {
        category: "Ordering & Delivery",
        question: "Do you offer bulk ordering for businesses?",
        answer: "Absolutely! We have a dedicated B2B division for wholesale, institutional, and industrial requirements. You can visit our Bulk Orders page for more details."
    },
    {
        category: "Ordering & Delivery",
        question: "What is the shelf life of your products?",
        answer: "Most of our edible oils have a shelf life of 9-12 months from the date of packaging when stored in a cool, dry place away from direct sunlight."
    },
    {
        category: "Company",
        question: "Where are your factories located?",
        answer: "Our primary manufacturing facilities are located in Agra (Uttar Pradesh) and Rajasthan, strategically placed near the source of the highest quality oilseeds."
    }
];

const FAQPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const categories = ["All", ...Array.from(new Set(faqs.map(item => item.category)))];

    const filteredFaqs = faqs.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container-custom px-4">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-primary font-black tracking-widest text-xs mb-4"
                    >
                        <HelpCircle size={16} /> Help Center
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark tracking-tight mb-8"
                    >
                        How can we <span className="text-primary-light">help?</span>
                    </motion.h1>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative group"
                    >
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search for questions (e.g. 'Mustard Oil purity', 'Bulk delivery')..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-full py-5 pl-16 pr-8 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                        />
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Category Filter */}
                    <div className="lg:w-1/4">
                        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 sticky top-32">
                            <h3 className="text-[10px] font-black tracking-[0.2em] text-gray-400 mb-6 px-4">Categories</h3>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`w-full text-left px-6 py-4 rounded-2xl text-xs font-black tracking-widest transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/30 translate-x-2' : 'text-gray-500 hover:bg-gray-50 hover:text-primary'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="lg:w-3/4">
                        <div className="space-y-4">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${expandedIndex === idx ? 'border-primary shadow-xl shadow-primary/5' : 'border-gray-100 hover:border-primary/30'}`}
                                    >
                                        <button
                                            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                                            className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                        >
                                            <span className={`text-base sm:text-lg font-black tracking-tight transition-colors ${expandedIndex === idx ? 'text-primary' : 'text-primary-dark group-hover:text-primary-light'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`p-2 rounded-xl transition-all ${expandedIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                                                <ChevronDown size={18} />
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {expandedIndex === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="px-8 pb-8"
                                                >
                                                    <div className="pt-4 border-t border-gray-50">
                                                        <p className="text-gray-600 leading-relaxed font-medium">
                                                            {faq.answer}
                                                        </p>
                                                        <div className="mt-6 flex items-center gap-4">
                                                            <span className="text-[10px] font-black text-gray-400 tracking-widest">Was this helpful?</span>
                                                            <div className="flex gap-2">
                                                                <button className="text-[10px] font-black px-3 py-1 bg-gray-50 rounded-lg hover:bg-primary-light hover:text-white transition-colors">Yes</button>
                                                                <button className="text-[10px] font-black px-3 py-1 bg-gray-50 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors">No</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="py-20 text-center bg-white rounded-[48px] border border-dashed border-gray-200">
                                    <p className="text-gray-400 font-black tracking-[0.2em]">No results found for your search.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Still have questions? */}
                <section className="mt-24 text-center">
                    <h3 className="text-2xl font-black text-primary-dark mb-4 tracking-tight">Still have questions?</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto font-medium">Can't find the answer you're looking for? Please contact our friendly team.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-primary text-white font-black tracking-widest text-xs py-5 px-10 rounded-full shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                            Contact Support
                        </button>
                        <button className="bg-white text-primary-dark border border-gray-100 font-black tracking-widest text-xs py-5 px-10 rounded-full hover:bg-gray-50 transition-all">
                            Visit Help Center
                        </button>
                    </div>
                </section>
            </div>
            <NewsletterBanner />
        </div>
    );
};

export default FAQPage;
