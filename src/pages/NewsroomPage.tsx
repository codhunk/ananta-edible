import { motion } from 'framer-motion';
import { Newspaper, Calendar, ArrowRight, Download, Share2 } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const news = [
    {
        title: "Ananta Expands Global Reach with New Export Hub in Dubai",
        date: "Oct 24, 2023",
        category: "Corporate",
        image: "https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Revolutionizing Mustard Oil Purity: A New R&D Milestone",
        date: "Sep 12, 2023",
        category: "Innovation",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Ananta Foundation Launches Rural Education Initiative",
        date: "Aug 05, 2023",
        category: "Impact",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const NewsroomPage = () => {
    return (
        <PageLayout
            title="Newsroom"
            subtitle="The latest stories, updates, and media highlights from the world of Ananta."
            category="Quick Links"
        >
            <div className="space-y-24">
                {/* Featured News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-primary-dark">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-10 space-y-4">
                                <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 tracking-widest">
                                    <Calendar size={12} />
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-black text-primary-dark leading-tight group-hover:text-primary-light transition-colors">
                                    {item.title}
                                </h3>
                                <div className="pt-4 flex items-center justify-between">
                                    <span className="text-[10px] font-black tracking-widest text-primary-light flex items-center gap-2">
                                        Read more <ArrowRight size={14} />
                                    </span>
                                    <Share2 size={16} className="text-gray-300 hover:text-primary-light transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Media Kit Section */}
                <div className="bg-primary-dark rounded-[56px] p-12 sm:p-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-2xl sm:text-2xl lg:text-4xl font-black tracking-tight leading-none">
                                Press <span className="text-primary-light">Assets</span>
                            </h2>
                            <p className="text-white/60 text-lg font-medium">
                                High-resolution logos, executive bios, and brand guidelines for media use. Everything you need to tell the Ananta story.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Brand Logos", size: "45 MB", icon: <Download size={20} /> },
                                { title: "Executive Photos", size: "120 MB", icon: <Download size={20} /> },
                                { title: "Brand Guidelines", size: "12 MB", icon: <Download size={20} /> },
                                { title: "Press Releases", size: "Archive", icon: <Newspaper size={20} /> }
                            ].map((asset, i) => (
                                <motion.button
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between group hover:bg-white/10 transition-all text-left"
                                >
                                    <div>
                                        <p className="font-black text-xs tracking-widest">{asset.title}</p>
                                        <p className="text-[10px] text-white/40 font-bold">{asset.size}</p>
                                    </div>
                                    <div className="text-primary-light group-hover:scale-110 transition-transform">
                                        {asset.icon}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Media Contact */}
                <div className="text-center py-12">
                    <p className="text-sm font-black text-gray-400 tracking-[0.4em] mb-4">Media inquiries</p>
                    <p className="text-2xl font-black text-primary-dark underline decoration-primary-light decoration-4 underline-offset-8">press@anantaoils.com</p>
                </div>
            </div>
        </PageLayout>
    );
};

export default NewsroomPage;
