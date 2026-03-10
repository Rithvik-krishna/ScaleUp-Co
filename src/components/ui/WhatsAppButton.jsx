import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/918095177537"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-shadow duration-300 flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <MessageCircle className="w-8 h-8 fill-current relative z-10" />
        </motion.a>
    );
};

export default WhatsAppButton;
