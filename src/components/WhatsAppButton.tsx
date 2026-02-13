"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Package } from "lucide-react";

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showPulsing, setShowPulsing] = useState(true);

    const phoneNumber = "917454957272";
    const displayNumber = "+91 7454957272";
    const message = "Hello, I would like to know more about Ananta Edibles products.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    // Automatically open after a short delay on first load, then close after 5 seconds
    // This draws attention without being a permanent hindrance
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        const closeTimer = setTimeout(() => {
            setIsOpen(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(closeTimer);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-10 z-[9999] flex flex-col items-end gap-3">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="flex flex-col items-end gap-3 mb-1"
                    >
                        {/* Header / Info Label */}
                        <div className="bg-white text-black text-[9px] md:text-xs font-bold px-3 py-2 md:px-4 md:py-2.5 rounded-full shadow-lg border border-primary-dark/20 tracking-wider flex items-center gap-2">
                            <Package size={18} className="text-yellow-400 font-bold" />
                            For Bulk Order enquiry
                        </div>

                        {/* Phone Call Link */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`tel:${displayNumber}`}
                            className="flex items-center gap-2 bg-white text-gray-800 px-3 py-2 md:px-4 md:py-2 rounded-full shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="bg-primary/10 p-1 md:p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
                                <Phone size={12} className="text-red-500 font-bold" />
                            </div>
                            <span className="text-xs md:text-sm font-bold">{displayNumber}</span>
                        </motion.a>

                        {/* Chat With Us Link (WhatsApp) */}
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-gray-800 px-3 py-2 md:px-4 md:py-2 rounded-full shadow-md hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="bg-[#25D366]/10 p-1 md:p-1.5 rounded-full group-hover:bg-[#25D366]/20 transition-colors">
                                <MessageCircle size={12} className="text-[#25D366] font-bold" />
                            </div>
                            <span className="text-xs md:text-sm font-bold">Chat With Us</span>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <div className="relative">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowPulsing(false);
                    }}
                    className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? "bg-gray-100 text-gray-600" : "bg-[#25D366] text-white"
                        }`}
                    aria-label={isOpen ? "Close contact options" : "Open contact options"}
                >
                    {isOpen ? (
                        <X size={24} className="md:w-[28px] md:h-[28px]" />
                    ) : (
                        <div className="relative">
                            <svg viewBox="0 0 24 24" width="28" height="28" className="md:w-[32px] md:h-[32px]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                    )}
                </motion.button>

                {/* Pulsing indicator when closed */}
                {!isOpen && showPulsing && (
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-[#25D366] rounded-full -z-10 opacity-50"
                    />
                )}
            </div>
        </div>
    );
};

export default WhatsAppButton;

