
import React from 'react';
import { PROFILE, GithubIcon, LinkedInIcon } from '../constants';

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700 mt-20">
      <div className="container mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Sulaiman. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="Email">
            <MailIcon className="w-6 h-6" />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="GitHub">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
