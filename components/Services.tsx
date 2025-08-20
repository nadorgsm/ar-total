
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { TranslationKey } from '../constants/translations';

interface Service {
    imgSrc: string;
    imgAlt: string;
    iconClass: string;
    titleKey: TranslationKey;
    descKey: TranslationKey;
}

const services: Service[] = [
    {
        imgSrc: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        imgAlt: "Keuken Installatie",
        iconClass: "fas fa-utensils",
        titleKey: "service1Title",
        descKey: "service1Desc",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        imgAlt: "Elektrisch Onderhoud",
        iconClass: "fas fa-bolt",
        titleKey: "service2Title",
        descKey: "service2Desc",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        imgAlt: "Keramische Installatie",
        iconClass: "fas fa-tile",
        titleKey: "service3Title",
        descKey: "service3Desc",
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { t } = useLanguage();
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
            <div className="h-52 overflow-hidden">
                <img src={service.imgSrc} alt={service.imgAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-6">
                <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mb-5 -mt-14 ml-4 relative z-10 border-4 border-white">
                    <i className={`${service.iconClass} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-montserrat text-xl font-bold text-primary mb-3">{t(service.titleKey)}</h3>
                <p className="text-gray mb-5 text-sm">{t(service.descKey)}</p>
            </div>
        </div>
    );
};


export const Services: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary inline-block relative pb-3 mb-4">
                        {t('servicesTitle')}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray max-w-2xl mx-auto">{t('servicesSubtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
