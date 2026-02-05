import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const certifications = [
    {
        name: "FSSAI",
        fullName: "Food Safety and Standards Authority of India",
        logo: "/fssai.png"
    },
    {
        name: "ISO 9001:2015",
        fullName: "Quality Management System",
        logo: "/iso9001.png"
    },
    {
        name: "ISO 22000",
        fullName: "Food Safety Management",
        logo: "/iso22000.png"
    },
    {
        name: "HACCP",
        fullName: "Hazard Analysis Critical Control Point",
        logo: "/haccp.png"
    },
    {
        name: "BIS",
        fullName: "Bureau of Indian Standards",
        logo: "/bis.png"
    },
    {
        name: "Agmark",
        fullName: "Agricultural Marketing",
        logo: "/agmark.png"
    }
];

export default function CertificationLogos() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    // Auto-scroll every 3 seconds
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % certifications.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % certifications.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
        setIsAutoPlay(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
    };

    return (
        <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
            <div className="container-custom px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3">
                        Certified & Compliant
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                        Authorized by leading regulatory bodies in India
                    </p>
                </motion.div>

                {/* Desktop Grid View - Hidden on mobile */}
                <div className="hidden lg:grid grid-cols-6 gap-6 xl:gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -8, scale: 1.08 }}
                            className="bg-gray-50 rounded-2xl p-6 xl:p-8 shadow-md hover:shadow-xl transition-all group border-2 border-gray-100 hover:border-primary-light"
                        >
                            <div className="mb-3 xl:mb-4 flex justify-center items-center h-20 xl:h-24">
                                <img
                                    src={cert.logo}
                                    alt={cert.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform drop-shadow-md"
                                />
                            </div>
                            <h4 className="font-black text-gray-900 text-sm xl:text-base mb-1 xl:mb-2 text-center">
                                {cert.name}
                            </h4>
                            <p className="text-gray-600 text-xs text-center leading-tight">
                                {cert.fullName}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile/Tablet Carousel View */}
                <div className="lg:hidden relative">
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {certifications.map((cert, idx) => (
                                <div
                                    key={idx}
                                    className="min-w-full px-4 sm:px-8"
                                >
                                    <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg border-2 border-gray-100 max-w-md mx-auto">
                                        <div className="mb-6 flex justify-center items-center h-32 sm:h-40">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="max-h-full max-w-full object-contain drop-shadow-lg"
                                            />
                                        </div>
                                        <h4 className="font-black text-gray-900 text-xl sm:text-2xl mb-3 text-center">
                                            {cert.name}
                                        </h4>
                                        <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                                            {cert.fullName}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
                        aria-label="Previous certification"
                    >
                        <ChevronLeft size={20} className="text-primary-dark" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10"
                        aria-label="Next certification"
                    >
                        <ChevronRight size={20} className="text-primary-dark" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {certifications.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                        ? 'bg-primary-light w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to certification ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-8 sm:mt-10 text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto font-medium px-4"
                >
                    All our products are manufactured in compliance with national and international food safety standards.
                    Certificates available upon request.
                </motion.p>
            </div>
        </section>
    );
}
