
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useLanguage } from './hooks/useLanguage';
import { useEffect } from 'react';

const App: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = t('pageTitle');
    }, [t]);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
};

export default App;
