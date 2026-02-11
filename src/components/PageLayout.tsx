import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NewsletterBanner from './NewsletterBanner';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
    subtitle?: string;
    category?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children, subtitle, category }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Page Header Hero */}
            <section className="bg-primary-dark pt-32 pb-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container-custom relative z-10 px-4">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-primary-light/60 text-xs font-bold tracking-widest mb-8">
                        <Link to="/" className="hover:text-primary-light transition-colors">Home</Link>
                        {category && (
                            <>
                                <span className="opacity-40">/</span>
                                <span className="text-white/40 cursor-default">{category}</span>
                            </>
                        )}
                        <span className="opacity-40">/</span>
                        <span className="text-white">{title}</span>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-black text-white tracking-tighter mb-4">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-primary-light/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed italic">
                                "{subtitle}"
                            </p>
                        )}
                    </motion.div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-1 -right-1 opacity-20 transform translate-x-1/4 translate-y-1/4 rotate-12">
                    <img src="/logo.jpeg" alt="" className="w-96 rounded-full blur-3xl" />
                </div>
            </section>

            {/* Breadcrumb Info Bar */}
            <div className="bg-gray-50 border-b border-gray-100 py-4">
                <div className="container-custom px-4">
                    <p className="text-[10px] font-black tracking-[0.3em] text-gray-400">
                        Ananta Edible Oil / {category ? `${category} / ` : ''}{title}
                    </p>
                </div>
            </div>

            {/* Page Content */}
            <main className="py-20">
                <div className="container-custom px-4">
                    {children}
                </div>
            </main>

            <NewsletterBanner />
        </div>
    );
};

export default PageLayout;
