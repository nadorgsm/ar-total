
import React from 'react';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { TranslationKey } from '../constants/translations';

const serviceOptions: { value: string; labelKey: TranslationKey }[] = [
    { value: 'kitchen', labelKey: 'serviceOptionKitchen' },
    { value: 'electrical', labelKey: 'serviceOptionElectrical' },
    { value: 'tiles', labelKey: 'serviceOptionTiles' },
    { value: 'gypsum', labelKey: 'serviceOptionGypsum' },
    { value: 'plumbing', labelKey: 'serviceOptionPlumbing' },
    { value: 'other', labelKey: 'serviceOptionOther' },
];

export const Contact: React.FC = () => {
    const { t } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const selectedServiceOption = serviceOptions.find(opt => opt.value === service);
        const serviceText = selectedServiceOption ? t(selectedServiceOption.labelKey) : 'Not specified';

        const subject = t('formSubject');
        const body = [
            `${t('formLabelName')}: ${name}`,
            `${t('formLabelEmail')}: ${email}`,
            `${t('formLabelService')}: ${serviceText}`,
            '',
            `${t('formLabelMessage')}:`,
            message
        ].join('\n');

        const mailtoUrl = `mailto:info@artotaalinstallateur.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoUrl;
        
        // Reset form
        setName('');
        setEmail('');
        setService('');
        setMessage('');
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary inline-block relative pb-3 mb-4">
                        {t('contactTitle')}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray max-w-2xl mx-auto">{t('contactSubtitle')}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-full flex items-center justify-center"><i className="fas fa-map-marker-alt text-xl text-primary"></i></div>
                            <div>
                                <h3 className="font-montserrat text-lg font-bold text-primary">{t('contactLocationTitle')}</h3>
                                <p className="text-gray">{t('contactLocationAddress')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-full flex items-center justify-center"><i className="fas fa-phone-alt text-xl text-primary"></i></div>
                            <div>
                                <h3 className="font-montserrat text-lg font-bold text-primary">{t('contactCallUsTitle')}</h3>
                                <p className="text-gray">0639378246</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-full flex items-center justify-center"><i className="fas fa-envelope text-xl text-primary"></i></div>
                            <div>
                                <h3 className="font-montserrat text-lg font-bold text-primary">{t('contactEmailUsTitle')}</h3>
                                <p className="text-gray">info@artotaalinstallateur.nl</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-light-gray rounded-full flex items-center justify-center"><i className="fas fa-clock text-xl text-primary"></i></div>
                            <div>
                                <h3 className="font-montserrat text-lg font-bold text-primary">{t('contactHoursTitle')}</h3>
                                <p className="text-gray">{t('contactHoursDesc')}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-semibold text-dark text-sm">{t('formFullName')}</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-3 border border-light-gray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-semibold text-dark text-sm">{t('formEmail')}</label>
                                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border border-light-gray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="service" className="block mb-2 font-semibold text-dark text-sm">{t('formService')}</label>
                                <select id="service" value={service} onChange={e => setService(e.target.value)} className="w-full p-3 border border-light-gray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white" required>
                                    <option value="">{t('formSelectService')}</option>
                                    {serviceOptions.map(option => (
                                        <option key={option.value} value={option.value}>{t(option.labelKey)}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block mb-2 font-semibold text-dark text-sm">{t('formProjectDetails')}</label>
                                <textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} className="w-full p-3 border border-light-gray rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all" required></textarea>
                            </div>
                            <button type="submit" className="mt-6 w-full bg-primary text-white py-3 px-7 rounded-full font-semibold uppercase tracking-wider text-sm border-2 border-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">{t('formSubmitBtn')}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
