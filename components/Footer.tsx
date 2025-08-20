
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
    const { t } = useLanguage();
    
    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for subscribing!');
        (e.target as HTMLFormElement).reset();
    }

    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    <div>
                        <h3 className="font-montserrat text-lg font-bold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent">{t('footerAbout')}</h3>
                        <p className="text-gray-400 text-sm">{t('footerAboutDesc')}</p>
                        <div className="flex space-x-3 mt-5">
                            <a href="#" className="w-9 h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"><i className="fab fa-facebook-f text-sm"></i></a>
                            <a href="#" className="w-9 h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"><i className="fab fa-instagram text-sm"></i></a>
                            <a href="#" className="w-9 h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"><i className="fab fa-linkedin-in text-sm"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-montserrat text-lg font-bold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent">{t('footerServicesTitle')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('footerService1')}</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('footerService2')}</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('footerService3')}</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('footerService4')}</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-montserrat text-lg font-bold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent">{t('footerQuickLinksTitle')}</h3>
                         <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('navHome')}</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('navServices')}</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('navProjects')}</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300">{t('navContact')}</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-montserrat text-lg font-bold mb-5 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-0.5 after:bg-accent">{t('footerNewsletterTitle')}</h3>
                        <p className="text-gray-400 mb-4 text-sm">{t('footerNewsletterDesc')}</p>
                        <form onSubmit={handleNewsletterSubmit}>
                            <div className="flex">
                                <input type="email" placeholder={t('footerNewsletterPlaceholder')} className="w-full text-sm p-2 bg-white bg-opacity-20 border border-transparent rounded-l-md focus:outline-none focus:bg-opacity-30 text-white placeholder-gray-300" required />
                                <button type="submit" className="bg-accent text-white py-2 px-4 rounded-r-md font-semibold text-sm hover:bg-primary transition-colors duration-300">{t('footerNewsletterBtn')}</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center pt-8 mt-8 border-t border-white border-opacity-10 text-gray-400 text-xs">
                    <p dangerouslySetInnerHTML={{ __html: t('footerCopyright') }}></p>
                </div>
            </div>
        </footer>
    );
};
