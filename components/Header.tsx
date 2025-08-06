
import React, { useState, useEffect } from 'react';
import { PROFILE, NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-slate-900/75 backdrop-blur-sm transition-all duration-500 ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#about" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">
          {PROFILE.name}
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href={PROFILE.cv_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors font-semibold shadow-lg"
          >
            Download CV
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-sky-400 transition-colors">
                {link.name}
              </a>
            ))}
            <a
              href={PROFILE.cv_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition-colors font-semibold shadow-lg"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
