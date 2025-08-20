
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Language } from '../types';
import { translations } from '../constants/translations';
import type { TranslationKey } from '../constants/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('nl');

    const t = useCallback((key: TranslationKey): string => {
        return translations[language][key] || translations['en'][key];
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
