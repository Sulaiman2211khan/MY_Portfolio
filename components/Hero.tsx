
import React, { useState, useEffect } from 'react';
import { PROFILE, GithubIcon, LinkedInIcon } from '../constants';
import FadeIn from './FadeIn';

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

const Hero: React.FC = () => {
  const [typedTitle, setTypedTitle] = useState('');

  useEffect(() => {
    const fullTitle = PROFILE.title;
    const typingDelay = 400;
    const typingSpeed = 80;

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setTypedTitle(fullTitle.slice(0, i + 1));
        i++;
        if (i > fullTitle.length) {
          clearInterval(interval);
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="min-h-[80vh] flex items-center py-20">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="md:col-span-3 text-center md:text-left">
          <FadeIn direction="down">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              {PROFILE.name}
            </h1>
          </FadeIn>
          
          <div className="mt-2 min-h-[40px] md:min-h-[48px]">
            <h2 className="text-2xl md:text-3xl font-semibold text-sky-400">
              {typedTitle}
              <span className="inline-block w-[3px] h-7 md:h-8 bg-sky-400 ml-1 animate-pulse" style={{ animationDuration: '800ms' }}></span>
            </h2>
          </div>

          <FadeIn direction="up" delay={400}>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto md:mx-0">
              {PROFILE.bio}
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={600} className="mt-8 flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-6 h-6" />
              <span className="hidden sm:inline">Email</span>
            </a>
             <span className="text-slate-600">|</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
             <span className="text-slate-600">|</span>
             <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </FadeIn>
        </div>

        {/* Right Side: Image */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
            <FadeIn delay={200} className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-slate-800 animate-glowing-border"></div>
                {PROFILE.imageUrl && (
                    <img
                    src={PROFILE.imageUrl}
                    alt={PROFILE.name}
                    className="relative w-full h-full object-cover rounded-full p-2"
                    />
                )}
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
