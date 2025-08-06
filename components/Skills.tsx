
import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { SkillCategory } from '../types';
import FadeIn from './FadeIn';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>
      </FadeIn>
      <div className="max-w-4xl mx-auto space-y-12">
        {SKILLS_DATA.map((category: SkillCategory, index: number) => (
          <FadeIn key={index} delay={index * 100}>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg hover:bg-slate-700/50 transition-colors">
                    {skill.icon}
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Skills;
