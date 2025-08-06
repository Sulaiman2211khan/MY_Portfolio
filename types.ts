
import React from 'react';

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'Work' | 'Education' | 'Volunteer';
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  link?: string;
  repo?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
