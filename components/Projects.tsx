
import React from 'react';
import { PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../constants';
import type { Project } from '../types';
import FadeIn from './FadeIn';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col h-full hover:border-sky-500/50 transition-colors duration-300 shadow-lg hover:shadow-sky-500/10 transform hover:-translate-y-1">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
            <div className="flex items-center gap-4 text-slate-400">
              {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="GitHub repository">
                      <GithubIcon className="h-6 w-6" />
                  </a>
              )}
              {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors" aria-label="Live demo">
                      <ExternalLinkIcon className="h-6 w-6" />
                  </a>
              )}
            </div>
        </div>
        <p className="mt-1 text-sm text-slate-500">{project.date}</p>
        <p className="mt-4 text-slate-400">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-sky-500/10 text-sky-400 text-xs font-medium px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <FadeIn key={index} delay={index * 100}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;
