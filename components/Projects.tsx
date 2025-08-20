
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { TranslationKey } from '../constants/translations';

interface Project {
    imgSrc: string;
    imgAlt: string;
    titleKey: TranslationKey;
    descKey: TranslationKey;
}

const projects: Project[] = [
    {
        imgSrc: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        imgAlt: "Moderne Keuken",
        titleKey: "project1Title",
        descKey: "project1Desc",
    },
    {
        imgSrc: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        imgAlt: "Badkamer Renovatie",
        titleKey: "project2Title",
        descKey: "project2Desc",
    },
    {
        imgSrc: "https://plus.unsplash.com/premium_photo-1711471916670-3cb17dd717c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE9wJTIwbWFhdCUyMEdpcHNwbGF0ZW4lMjBQbGFmb25kJTIwJTIwT250d2VycCUyMGVuJTIwaW5zdGFsbGF0aWUlMjB2YW4lMjBkZWNvcmF0aWVmJTIwcGxhZm9uZCUyMG1ldCUyMGdlJUMzJUFGbnRlZ3JlZXJkZSUyMHZlcmxpY2h0aW5nfGVufDB8fDB8fHww",
        imgAlt: "Gipsplaten Plafond",
        titleKey: "project3Title",
        descKey: "project3Desc",
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useLanguage();
    return (
        <div className="rounded-lg overflow-hidden shadow-lg relative group cursor-pointer">
            <img src={project.imgSrc} alt={project.imgAlt} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
                <div className="text-white text-center p-5 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="font-montserrat text-xl font-bold">{t(project.titleKey)}</h3>
                    <p className="text-sm mt-2">{t(project.descKey)}</p>
                </div>
            </div>
        </div>
    );
};

export const Projects: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 bg-light-gray">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                     <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary inline-block relative pb-3 mb-4">
                        {t('projectsTitle')}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                    </h2>
                    <p className="text-gray max-w-2xl mx-auto">{t('projectsSubtitle')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
