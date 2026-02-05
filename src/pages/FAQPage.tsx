import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Truck, RotateCcw, Search } from 'lucide-react';
import Footer from '../components/Footer';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSection {
    title: string;
    icon: React.ReactNode;
    items: FaqItem[];
}

const faqs: FaqSection[] = [
    {
        title: "General Questions",
        icon: <HelpCircle className="text-secondary" size={24} />,
        items: [
            {
                question: "What makes Ananta products unique?",
                answer: "Ananta focuses on premium, organic cannabis products sourced directly from trusted growers. We prioritize purity, potency, and sustainable farming practices to ensure you get the best experience possible."
            },
            {
                question: "Are your products lab tested?",
                answer: "Yes, absolutely. All our products undergo rigorous third-party lab testing for potency, purity, and safety. We believe in complete transparency and quality assurance."
            },
            {
                question: "Do you have a physical store?",
                answer: "Currently, we operate exclusively online to provide the best prices and discreet delivery directly to your door."
            }
        ]
    },
    {
        title: "Shipping & Delivery",
        icon: <Truck className="text-secondary" size={24} />,
        items: [
            {
                question: "How long does shipping take?",
                answer: "Standard shipping typically takes 3-5 business days. We also offer express shipping options which usually arrive within 1-2 business days depending on your location."
            },
            {
                question: "Is the packaging discreet?",
                answer: "Yes, your privacy is our priority. All orders are shipped in plain, unmarked packaging with no indication of the contents inside."
            },
            {
                question: "Do you ship internationally?",
                answer: "Currently, we only ship within India where our products are legally permitted. We are working on expanding our reach in the future."
            }
        ]
    },
    {
        title: "Returns & Refunds",
        icon: <RotateCcw className="text-secondary" size={24} />,
        items: [
            {
                question: "What is your return policy?",
                answer: "We offer a 30-day satisfaction guarantee. If you are not completely satisfied with your unopened product, you may return it within 30 days for a full refund."
            },
            {
                question: "How do I initiate a return?",
                answer: "Please contact our support team via email or WhatsApp with your order number. We will guide you through the return process."
            }
        ]
    }
];

const FAQPage = () => {
    const [openQuestion, setOpenQuestion] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleQuestion = (question: string) => {
        setOpenQuestion(openQuestion === question ? null : question);
    };

    // Filter logic
    const filteredFaqs = faqs.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <div className="bg-gray-50/50 min-h-screen flex flex-col">
            {/* Hero */}
            <div className="bg-primary-dark py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container-custom px-4 relative z-10 text-center max-w-2xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight"
                    >
                        How can we help?
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="text-gray-400" size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for answers..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="container-custom px-4 py-16 sm:py-24 max-w-3xl mx-auto flex-grow">
                <div className="space-y-12">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((section, sectionIdx) => (
                            <motion.div
                                key={sectionIdx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: sectionIdx * 0.1 }}
                                className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                                    <div className="bg-secondary/10 p-3 rounded-2xl text-secondary">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-black text-primary-dark tracking-tight">{section.title}</h2>
                                </div>

                                <div className="space-y-4">
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="bg-gray-50 rounded-2xl overflow-hidden transition-all hover:bg-gray-50/80">
                                            <button
                                                onClick={() => toggleQuestion(item.question)}
                                                className="w-full flex justify-between items-center p-5 text-left group"
                                            >
                                                <span className={`font-bold transition-colors ${openQuestion === item.question ? 'text-primary-dark' : 'text-gray-700 group-hover:text-primary-dark'}`}>
                                                    {item.question}
                                                </span>
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openQuestion === item.question ? 'bg-primary-dark text-white' : 'bg-white text-gray-400'}`}>
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform duration-300 ${openQuestion === item.question ? 'rotate-180' : ''}`}
                                                    />
                                                </div>
                                            </button>
                                            <AnimatePresence>
                                                {openQuestion === item.question && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    >
                                                        <div className="px-5 pb-6 text-gray-500 text-sm leading-relaxed">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-400 font-medium">No results found for "{searchQuery}".</p>
                        </div>
                    )}
                </div>

                {/* Still have questions? */}
                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-black text-primary-dark mb-4">Still have questions?</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                    <button className="bg-primary text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all transform hover:-translate-y-1">
                        Contact Support
                    </button>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default FAQPage;
