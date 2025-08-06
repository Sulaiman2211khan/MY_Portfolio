
import React from 'react';
import { PROFILE } from '../constants';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <a
            href={`mailto:${PROFILE.email}`}
            className="bg-sky-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-sky-600 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Say Hello
          </a>
          <div className="text-slate-400">
            <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-sky-400 hover:underline">{PROFILE.email}</a></p>
            <p>Phone: <span className="text-sky-400">{PROFILE.phone}</span></p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
