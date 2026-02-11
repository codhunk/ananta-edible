"use client";
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Server, Globe } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const sections = [
        { id: 'introduction', label: '1. Introduction', icon: <FileText size={18} /> },
        { id: 'collection', label: '2. Information We Collect', icon: <Eye size={18} /> },
        { id: 'usage', label: '3. How We Use Information', icon: <Server size={18} /> },
        { id: 'cookies', label: '4. Cookies', icon: <Globe size={18} /> },
        { id: 'security', label: '5. Data Security', icon: <Lock size={18} /> },
        { id: 'third-party', label: '6. Third-Party Links', icon: <Shield size={18} /> },
    ];

    return (
        <div className="bg-gray-50/50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="container-custom px-4 py-16 sm:py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-black text-primary-dark mb-6 tracking-tight">Privacy Policy</h1>
                        <p className="text-gray-500 text-sm tracking-widest font-bold">Last updated: February 2026</p>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-1">
                            <p className="px-4 py-2 text-xs font-bold text-gray-400 tracking-wider mb-2">Contents</p>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 rounded-xl hover:bg-white hover:shadow-sm hover:text-primary-dark transition-all text-left group"
                                >
                                    <span className="text-gray-400 group-hover:text-primary-dark transition-colors">{section.icon}</span>
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-grow bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
                    >
                        <div className="prose prose-lg prose-headings:font-black prose-headings:text-primary-dark prose-headings:scroll-mt-32 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary-dark prose-li:text-gray-600 max-w-none">

                            <section id="introduction" className="mb-12 scroll-mt-32">
                                <h3>1. Introduction</h3>
                                <p>
                                    Welcome to Ananta ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.
                                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                                    (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                                </p>
                            </section>

                            <section id="collection" className="mb-12 scroll-mt-32">
                                <h3>2. Information We Collect</h3>
                                <p>
                                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                                </p>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 not-prose space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Identity Data:</span> includes first name, last name, username or similar identifier.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Contact Data:</span> includes billing address, delivery address, email address and telephone numbers.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Financial Data:</span> includes bank account and payment card details.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Transaction Data:</span> includes details about payments to and from you and other details of products and services you have purchased from us.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="usage" className="mb-12 scroll-mt-32">
                                <h3>3. How We Use Your Information</h3>
                                <p>
                                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                                </p>
                                <ul>
                                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                    <li>Where we need to comply with a legal or regulatory obligation.</li>
                                </ul>
                            </section>

                            <section id="cookies" className="mb-12 scroll-mt-32">
                                <h3>4. Cookies</h3>
                                <p>
                                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                                    If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                                </p>
                            </section>

                            <section id="security" className="mb-12 scroll-mt-32">
                                <h3>5. Data Security</h3>
                                <p>
                                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                                    In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                                </p>
                            </section>

                            <section id="third-party" className="mb-12 scroll-mt-32">
                                <h3>6. Third-Party Links</h3>
                                <p>
                                    This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
                                    We do not control these third-party websites and are not responsible for their privacy statements.
                                </p>
                            </section>

                            <div className="border-t border-gray-100 pt-8 mt-12">
                                <p className="text-sm text-gray-500">
                                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:info@ananta.com" className="font-bold text-primary hover:text-primary-dark">info@ananta.com</a>
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
