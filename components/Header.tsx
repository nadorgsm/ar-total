
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const NavLink: React.FC<{ href: string; labelKey: any; onClick?: () => void }> = ({ href, labelKey, onClick }) => {
    const { t } = useLanguage();
    return (
        <a href={href} onClick={onClick} className="font-semibold text-dark hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            {t(labelKey)}
        </a>
    );
};

const LanguageButton: React.FC<{ lang: 'nl' | 'en'; flag: string; label: string; }> = ({ lang, flag, label }) => {
    const { language, setLanguage } = useLanguage();
    return (
        <button
            onClick={() => setLanguage(lang)}
            className={`p-0.5 rounded-full transition-all duration-300 ${language === lang ? 'ring-2 ring-primary' : ''}`}
            aria-label={label}
        >
            <img src={`https://flagcdn.com/w20/${flag}.png`} srcSet={`https://flagcdn.com/w40/${flag}.png 2x`} alt={label} className="w-5 h-5 rounded-full object-cover" />
        </button>
    );
};

const MobileLanguageButton: React.FC<{ lang: 'nl' | 'en'; flag: string; label: string; onClick: () => void; }> = ({ lang, flag, label, onClick }) => {
    const { setLanguage } = useLanguage();
    
    const handleClick = () => {
        setLanguage(lang);
        onClick();
    }
    
    return (
         <button onClick={handleClick} className="lang-item border border-light-gray p-2 rounded-lg" data-lang={lang} aria-label={label}>
            <img src={`https://flagcdn.com/w20/${flag}.png`} srcSet={`https://flagcdn.com/w40/${flag}.png 2x`} alt={label} className="w-5 h-5 rounded-full object-cover"/>
        </button>
    );
}

export const Header: React.FC = () => {
    const { t } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }
    
    useEffect(() => {
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);


    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <a href="#home" className="flex items-center space-x-2">
                        <i className="fas fa-tools text-primary text-3xl"></i>
                        <h1 className="font-montserrat font-bold text-xl md:text-2xl text-primary">AR <span className="text-accent">TOTAALINSTALLATEUR</span></h1>
                    </a>
                    <div className="flex items-center">
                        <nav className="hidden md:flex items-center space-x-8">
                            <NavLink href="#home" labelKey="navHome" />
                            <NavLink href="#services" labelKey="navServices" />
                            <NavLink href="#projects" labelKey="navProjects" />
                            <NavLink href="#contact" labelKey="navContact" />
                        </nav>
                        
                        <div className="hidden md:flex items-center ml-4 border-l pl-4 space-x-3">
                            <LanguageButton lang="nl" flag="nl" label="Nederlands" />
                            <LanguageButton lang="en" flag="gb" label="English" />
                        </div>
                        
                        <div className="md:hidden ml-4">
                            <button id="mobile-menu-button" className="text-dark text-2xl" onClick={toggleMobileMenu}>
                                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden bg-white border-t border-light-gray ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <NavLink href="#home" labelKey="navHome" onClick={closeMobileMenu}/>
                    <NavLink href="#services" labelKey="navServices" onClick={closeMobileMenu}/>
                    <NavLink href="#projects" labelKey="navProjects" onClick={closeMobileMenu}/>
                    <NavLink href="#contact" labelKey="navContact" onClick={closeMobileMenu}/>
                </nav>
            
                <div className="md:hidden py-3 flex items-center justify-center gap-4">
                   <MobileLanguageButton lang="nl" flag="nl" label="Nederlands" onClick={closeMobileMenu}/>
                   <MobileLanguageButton lang="en" flag="gb" label="English" onClick={closeMobileMenu}/>
                </div>
            </div>
        </header>
    );
};
