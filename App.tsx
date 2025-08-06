
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
