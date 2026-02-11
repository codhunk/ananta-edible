import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
    id: number;
    image: string;
    heading: string;
    subheading: string;
    ctaText: string;
    ctaLink: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: '/banner1.png',
        heading: 'Premium Quality Mustard Oil',
        subheading: 'Pure, Traditional & Authentic - Extracted from the finest seeds since 1995',
        ctaText: 'Explore Products',
        ctaLink: '/shop'
    },
    {
        id: 2,
        image: '/banner2.png',
        heading: 'Cold-Pressed Excellence',
        subheading: 'Traditional Kachi Ghani process preserves natural nutrients and authentic flavor',
        ctaText: 'Learn More',
        ctaLink: '/about'
    },
    {
        id: 3,
        image: '/banner3.png',
        heading: 'Healthy Cooking Starts Here',
        subheading: 'Rich in omega-3, vitamins, and antioxidants for your family\'s wellness',
        ctaText: 'View Benefits',
        ctaLink: '/shop'
    },
    {
        id: 4,
        image: '/banner4.png',
        heading: 'Bulk Supply Available',
        subheading: 'FSSAI Certified - Trusted by restaurants, hotels, and food businesses',
        ctaText: 'Get Quote',
        ctaLink: '/bulk-order'
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // 4 second interval

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    return (
        <section
            className="relative w-full h-[400px] sm:h-[450px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].heading}
                            className="w-full h-full object-fill"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 "></div>
                    </div>

                    {/* Content */}
                    {/* <div className="container-custom relative z-10 h-full flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-2xl text-white"
                        >
                           
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 lg:mb-4 xl:mb-6 leading-tight"
                            >
                                {slides[currentSlide].heading}
                            </motion.h1>

                          
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-200 mb-4 lg:mb-6 xl:mb-8 leading-relaxed"
                            >
                                {slides[currentSlide].subheading}
                            </motion.p>

                            <motion.a
                                href={slides[currentSlide].ctaLink}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block px-5 sm:px-6 xl:px-8 2xl:px-10 py-2 sm:py-3 xl:py-4 2xl:py-5 bg-secondary text-primary-dark rounded-full font-bold text-xs sm:text-sm xl:text-base 2xl:text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                {slides[currentSlide].ctaText}
                            </motion.a>
                        </motion.div>
                    </div> */}
                </motion.div>
            </AnimatePresence>


            {/* Ananta Edible Brand Banner - Enhanced */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-30"
            >
                <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/30 rounded-2xl px-5 py-3 sm:px-6 sm:py-3.5 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                        {/* Logo Badge */}
                        <div className="relative">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-secondary to-yellow-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20">
                                <span className="text-primary-dark font-black text-base sm:text-lg">A</span>
                            </div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-secondary/30 rounded-full blur-md -z-10"></div>
                        </div>

                        {/* Brand Text */}
                        <div className="flex flex-col">
                            <h3 className="text-white font-black text-sm sm:text-base tracking-widest leading-none mb-0.5">
                                Ananta
                            </h3>
                            <div className="flex items-center gap-1.5">
                                <div className="h-px w-3 bg-secondary"></div>
                                <p className="text-secondary text-xs sm:text-sm font-bold tracking-wider">
                                    Edible
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>



            {/* Navigation Arrows - Bottom Right Corner */}
            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 z-20 flex items-center gap-2 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border-2 border-white/30 rounded-full p-1.5 shadow-2xl">
                <button
                    onClick={goToPrevious}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 group hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-[-2px] transition-transform" />
                </button>

                <button
                    onClick={goToNext}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 group hover:scale-110"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-[2px] transition-transform" />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentSlide
                            ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-secondary'
                            : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
