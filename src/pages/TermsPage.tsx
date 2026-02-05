import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Book, ShieldAlert, Award, AlertCircle, Scale, PenTool } from 'lucide-react';

const TermsPage = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const sections = [
        { id: 'introduction', label: '1. Introduction', icon: <Book size={18} /> },
        { id: 'ip-rights', label: '2. Intellectual Property', icon: <PenTool size={18} /> },
        { id: 'restrictions', label: '3. Restrictions', icon: <ShieldAlert size={18} /> },
        { id: 'content', label: '4. Your Content', icon: <Award size={18} /> },
        { id: 'warranties', label: '5. No Warranties', icon: <AlertCircle size={18} /> },
        { id: 'liability', label: '6. Limitation of Liability', icon: <Scale size={18} /> },
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
                        <h1 className="text-4xl sm:text-5xl font-black text-primary-dark mb-6 tracking-tight">Terms & Conditions</h1>
                        <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Last Updated: February 2026</p>
                    </motion.div>
                </div>
            </div>

            <div className="container-custom px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-1">
                            <p className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Contents</p>
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
                                    These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Ananta accessible at ananta.com.
                                    These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here.
                                </p>
                            </section>

                            <section id="ip-rights" className="mb-12 scroll-mt-32">
                                <h3>2. Intellectual Property Rights</h3>
                                <p>
                                    Other than the content you own, under these Terms, Ananta and/or its licensors own all the intellectual property rights and materials contained in this Website.
                                    You are granted limited license only for purposes of viewing the material contained on this Website.
                                </p>
                            </section>

                            <section id="restrictions" className="mb-12 scroll-mt-32">
                                <h3>3. Restrictions</h3>
                                <p>
                                    You are specifically restricted from all of the following:
                                </p>
                                <ul>
                                    <li>publishing any Website material in any other media;</li>
                                    <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                                    <li>publicly performing and/or showing any Website material;</li>
                                    <li>using this Website in any way that is or may be damaging to this Website;</li>
                                    <li>using this Website in any way that impacts user access to this Website;</li>
                                </ul>
                            </section>

                            <section id="content" className="mb-12 scroll-mt-32">
                                <h3>4. Your Content</h3>
                                <p>
                                    In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website.
                                    By displaying Your Content, you grant Ananta a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                                </p>
                            </section>

                            <section id="warranties" className="mb-12 scroll-mt-32">
                                <h3>5. No Warranties</h3>
                                <p>
                                    This Website is provided "as is," with all faults, and Ananta express no representations or warranties, of any kind related to this Website or the materials contained on this Website.
                                </p>
                            </section>

                            <section id="liability" className="mb-12 scroll-mt-32">
                                <h3>6. Limitation of Liability</h3>
                                <p>
                                    In no event shall Ananta, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.
                                    Ananta, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                                </p>
                            </section>

                            <section id="law" className="mb-12 scroll-mt-32">
                                <h3>7. Governing Law & Jurisdiction</h3>
                                <p>
                                    These Terms will be governed by and interpreted in accordance with the laws of the State of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
                                </p>
                            </section>

                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsPage;
