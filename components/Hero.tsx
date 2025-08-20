
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="bg-hero-pattern bg-no-repeat bg-center bg-cover min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4 text-center text-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-5 animate-fadeInDown">
                        {t('heroTitle')}
                    </h2>
                    <p className="text-lg md:text-xl mb-8 animate-fadeInUp">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex justify-center gap-5 flex-col sm:flex-row animate-fadeInUp" style={{ animationDelay: '1s' }}>
                        <a href="#services" className="inline-block bg-primary text-white py-3 px-7 rounded-full font-semibold uppercase tracking-wider text-sm border-2 border-primary hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                            {t('heroBtnServices')}
                        </a>
                        <a href="#contact" className="inline-block bg-accent text-white py-3 px-7 rounded-full font-semibold uppercase tracking-wider text-sm border-2 border-accent hover:bg-transparent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                            {t('heroBtnQuote')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
