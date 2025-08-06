
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';
import FadeIn from './FadeIn';

const ExperienceCard: React.FC<{ item: ExperienceItem; alignment: 'left' | 'right' }> = ({ item, alignment }) => {
    const { title, company, period, location, description, type } = item;

    const typeStyles = {
        Work: {
            badge: 'bg-sky-500/10 text-sky-400',
            border: 'border-sky-500/30',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.095a1.23 1.23 0 00.41-1.412a9.99 9.99 0 00-1.07-3.292A10.034 10.034 0 0010 11c-2.25 0-4.33.78-6.045 2.13A9.99 9.99 0 003.465 14.493z" />
                </svg>
            ),
        },
        Education: {
            badge: 'bg-emerald-500/10 text-emerald-400',
            border: 'border-emerald-500/30',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            ),
        },
        Volunteer: {
            badge: 'bg-amber-500/10 text-amber-400',
            border: 'border-amber-500/30',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            )
        }
    };

    const styles = typeStyles[type];
    const isRightAligned = alignment === 'right';

    return (
        <div className={`border rounded-lg p-6 bg-slate-800/50 shadow-lg hover:shadow-sky-500/10 transition-shadow duration-300 ${styles.border}`}>
            <div className={`flex justify-between items-start flex-wrap gap-2 ${isRightAligned ? 'md:flex-row-reverse' : ''}`}>
                <div className={isRightAligned ? 'md:text-right' : 'md:text-left'}>
                    <h3 className="text-xl font-bold text-slate-100">{title}</h3>
                    <p className="text-lg font-semibold text-slate-300">{company}</p>
                    <p className="text-sm text-slate-400">{location}</p>
                </div>
                <div className="text-right flex-shrink-0">
                     <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full ${styles.badge}`}>
                        {styles.icon}
                        {type}
                    </span>
                     <p className="text-sm text-slate-400 mt-1">{period}</p>
                </div>
            </div>
            <ul className={`mt-4 list-disc list-inside text-slate-400 space-y-2 ${isRightAligned ? 'md:text-right' : 'md:text-left'}`}>
                {description.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20">
            <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    Education & Experience
                </h2>
            </FadeIn>
            <div className="relative max-w-5xl mx-auto px-4">
                 <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-700" aria-hidden="true" />
                <div className="space-y-12">
                    {EXPERIENCE_DATA.map((item, index) => {
                        const isLeft = index % 2 !== 0;
                        const cardContainerClasses = isLeft
                            ? 'md:text-right md:pr-8'
                            : 'md:text-left md:pl-8';

                        return (
                         <div key={index} className="relative md:grid md:grid-cols-2 md:gap-x-8 items-start">
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-900" aria-hidden="true" />
                            
                            {/* Card Content */}
                            <div className={`relative pl-10 md:pl-0 ${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                                <FadeIn delay={index * 100} direction={isLeft ? 'right' : 'left'}>
                                    <ExperienceCard item={item} alignment={isLeft ? 'right' : 'left'} />
                                </FadeIn>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
