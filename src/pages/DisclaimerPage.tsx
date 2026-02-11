import { motion } from 'framer-motion';
import { Gavel, AlertCircle, Info, ShieldAlert } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const legalSections = [
    {
        title: "Product Representation",
        content: "While we strive to ensure that all images and descriptions of products on this website are accurate, actual products may vary slightly in packaging and visual appearance. All health claims and nutritional values are based on laboratory testing and are subject to natural variations in agricultural produce.",
        icon: <Info size={24} className="text-blue-500" />
    },
    {
        title: "Limitation of Liability",
        content: "Ananta Edible Oils Pvt. Ltd. shall not be held liable for any indirect, incidental, or consequential damages arising out of the use or inability to use the products or information provided on this platform. The information provided is 'as is' without warranties of any kind.",
        icon: <Gavel size={24} className="text-primary-light" />
    },
    {
        title: "External Links",
        content: "Our website may contain links to third-party websites for your convenience. Ananta does not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites.",
        icon: <AlertCircle size={24} className="text-amber-500" />
    }
];

const DisclaimerPage = () => {
    return (
        <PageLayout
            title="Disclaimer"
            subtitle="Legal information and general terms regarding the use of our services and products."
            category="Legal"
        >
            <div className="max-w-4xl mx-auto space-y-16 py-12">
                {/* Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-12 bg-gray-50 rounded-[48px] border border-gray-100 flex items-center gap-8"
                >
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
                        <ShieldAlert size={40} className="text-primary-dark" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-primary-dark tracking-tight mb-2">Legal <span className="text-primary-light">Notice</span></h2>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed">
                            Please read this document carefully. By accessing our platform, you agree to the terms outlined below.
                        </p>
                    </div>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {legalSections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-md transition-shadow space-y-4"
                        >
                            <div className="flex items-center gap-4">
                                {section.icon}
                                <h3 className="text-xl font-black text-primary-dark tracking-wide">{section.title}</h3>
                            </div>
                            <p className="text-gray-600 font-medium leading-relaxed pl-10">
                                {section.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Last Updated */}
                <div className="text-center pt-8">
                    <p className="text-[10px] font-black text-gray-300 tracking-[0.4em]">Last Updated: October 2023</p>
                </div>
            </div>
        </PageLayout>
    );
};

export default DisclaimerPage;
