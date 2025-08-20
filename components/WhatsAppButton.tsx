
import React from 'react';

export const WhatsAppButton: React.FC = () => {
    return (
        <a 
            href="https://wa.me/31639378246" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-5 left-5 z-40 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp text-3xl"></i>
        </a>
    );
};
