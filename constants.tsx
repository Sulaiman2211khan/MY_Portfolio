
import React from 'react';
import type { ExperienceItem, Project, SkillCategory } from './types';

// SVG Icons as React Components
const CodeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DatabaseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 8 0 0116 0" />
    </svg>
);

const ToolIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m0-8v-2m0 16V4m6 6h2m-16 0h2m14 0h2M4 12H2m18 0h2m-2 6l-2-2m-12 4l2-2m12-12l2-2M6 6l-2-2" />
    </svg>
);

export const GithubIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

export const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93-.91 0-1.38.61-1.38 1.93V19h-3v-9h3v1.38h.04c.42-.79 1.48-1.38 2.96-1.38 3.18 0 3.96 2.09 3.96 4.74V19z" />
    </svg>
);

export const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);


export const PROFILE = {
  name: 'Muhammad Sulaiman',
  title: 'Computer Software Engineer.',
  bio: 'A passionate and driven software engineering student with a strong foundation in web development, data analysis, and machine learning. Eager to apply my skills to solve real-world problems and contribute to innovative projects.',
  email: 'sulaimanjan288@gmail.com',
  phone: '+92 3116873002',
  github: 'https://github.com/Sulaiman2211khan',
  linkedin: 'https://www.linkedin.com/in/muhammad-sulaiman-khan-a45b81245/',
  cv_url: '/Muhammad_Sulaiman_CV.pdf', // Placeholder for the CV file
  imageUrl: '/image.png',
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    title: 'Web Development Intern',
    company: 'Mawakay',
    period: 'July 2024 – August 2024',
    location: 'Remote - Pakistan',
    type: 'Work',
    description: [
      'Developed and deployed 5 responsive web development projects using HTML, CSS, JavaScript, and Bootstrap.',
      'Created a minimalistic eCommerce website with product listings, cart features, and a clean user interface.',
      'Built modern landing pages for an auto car showroom and a news website with optimized layouts.',
      'Designed a secure and user-friendly signup and login page with form validation.',
    ],
  },
  {
    title: 'Web Development & Data Analysis Intern',
    company: 'CodeAlpha',
    period: 'June 2024 – September 2024',
    location: 'Remote - India',
    type: 'Work',
    description: [
      'Developed multiple responsive websites following modern UI/UX design principles.',
      'Worked on real-world data analysis projects using Python, Pandas, Matplotlib, and Seaborn.',
      'Built interactive dashboards and visualizations to derive insights from datasets.',
      'Gained hands-on experience in full-stack web development and enhanced analytical skills.',
    ],
  },
    {
    title: 'BSc Computer Software Engineering',
    company: 'University of Engineering & Technology, Mardan',
    period: '2021 – 2025',
    location: 'Mardan, Pakistan',
    type: 'Education',
    description: [
        'Pursuing a comprehensive curriculum focused on software development principles, algorithms, and system design.',
        'Relevant Coursework: Software Methodology, Data Analytics, Machine Learning, Web Development, Database Management, Cloud Computing, Deep Learning, Internet Of Things.',
    ],
  },
  {
    title: 'Volunteer - Data Collection & Event Support',
    company: 'Blood Donation Society',
    period: '2023 – 2025',
    location: 'University of Engineering & Technology, Mardan',
    type: 'Volunteer',
    description: [
      'Consistently volunteered at blood donation drives, collecting and managing donor information using Excel.',
      'Recognized with two certificates for dedication and consistent contribution to organizing donation events.',
    ],
  },
    {
    title: 'Volunteer - Tech Expo Support & Coordination',
    company: 'Great Mardan Expo (Dawn Fest 2025)',
    period: 'February 2025',
    location: 'Mardan, KPK',
    type: 'Volunteer',
    description: [
      'Assisted in organizing KPK\'s major tech event, helping manage logistics and guiding attendees.',
      'Worked closely with teams to ensure smooth execution of conference sessions, startup booths, and skill showcases.',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'CLO/PLO Generator',
    description: 'Built a DL model to extract and generate Course Learning Outcomes (CLOs) and Program Learning Outcomes (PLOs) from course outlines using NLP and Bloom\'s Taxonomy.',
    technologies: ['Python', 'NLP', 'Deep Learning'],
    date: 'April 2025',
    repo: 'https://github.com/Sulaiman2211khan/CLO-PLO-Generator',
  },
  {
    title: 'Weather vs Health Trends',
    description: 'Analyzed correlations between weather patterns and health-related Google search trends over time to identify potential public health insights.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    date: 'April 2025',
    repo: 'https://github.com/Sulaiman2211khan/Weather-vs-Health-Analysis',
  },
  {
    title: 'Student Performance EDA',
    description: 'Collected academic data and performed Exploratory Data Analysis (EDA) to uncover patterns in student performance across different schools and demographics.',
    technologies: ['Python', 'Power BI'],
    date: 'March 2024',
    repo: 'https://github.com/Sulaiman2211khan/Student-Performance-EDA',
  },
  {
    title: 'Online Quiz Platform',
    description: 'Developed a responsive quiz application with timed questions, dynamic scoring, and an interactive UI using React for a seamless user experience.',
    technologies: ['React', 'JavaScript', 'HTML/CSS'],
    date: 'February 2023',
    repo: 'https://github.com/Sulaiman2211khan/React-Quiz-App',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "Python", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "JavaScript", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "SQL", icon: <DatabaseIcon className="w-6 h-6 text-sky-400" /> },
            { name: "HTML/CSS", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "C++", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "R", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Dart", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
        ]
    },
    {
        title: "Technologies & Frameworks",
        skills: [
            { name: "React", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "TensorFlow", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Pandas", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "NumPy", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Scikit-learn", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Bootstrap", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "GitHub", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
            { name: "WordPress", icon: <CodeIcon className="w-6 h-6 text-sky-400" /> },
        ]
    },
    {
        title: "Developer Tools",
        skills: [
            { name: "VS Code", icon: <ToolIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Power BI", icon: <ToolIcon className="w-6 h-6 text-sky-400" /> },
            { name: "Android Studio", icon: <ToolIcon className="w-6 h-6 text-sky-400" /> },
            { name: "RStudio", icon: <ToolIcon className="w-6 h-6 text-sky-400" /> },
        ]
    }
];

export const NAV_LINKS = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];
