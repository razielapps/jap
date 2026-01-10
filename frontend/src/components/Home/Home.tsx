// src/components/Home/Home.tsx - UPDATED
import React from 'react';
import { ME } from '../../lib/api';
import { Navigation } from '../Navigation';
import { Intro } from '../Sections/Intro';
import { Specializations } from '../Sections/Specializations';
import { Skills } from '../Sections/Skills';
import { Certifications } from '../Sections/Certifications';
import { Interests } from '../Sections/Interests';
import { Learning } from '../Sections/Learning';
import { BlogSection } from '../Sections/Blog';
import { Traits } from '../Sections/Traits';
import { Projects } from '../Sections/Projects';
import { ContactSection } from '../Sections/Contact';
import './Home.css';

interface HomeProps {
  portfolio: ME;
  onSectionClick: (section: string) => void;
}

export const Home: React.FC<HomeProps> = ({ portfolio, onSectionClick }) => {
  const sections = [
    { id: 'intro', name: 'Intro' },
    { id: 'specializations', name: 'Specializations' },
    { id: 'skills', name: 'Skills' },
    { id: 'certifications', name: 'Certifications' },
    { id: 'interests', name: 'Interests' },
    { id: 'learning', name: 'Learning' },
    { id: 'blog', name: 'Blog' },
    { id: 'traits', name: 'Traits' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];

  return (
    <div className="portfolio-app">
      {/* Navigation is OUTSIDE the content container */}
      <Navigation sections={sections} onSectionClick={onSectionClick} />
      
      {/* Content container with padding */}
      <div className="portfolio-container">
        <main className="portfolio-content">
          <Intro 
            data={{ name: portfolio.name, bio: portfolio.bio }} 
            onViewDetail={() => onSectionClick('intro')} 
          />
          <Specializations 
            specializations={portfolio.specializations} 
            onViewDetail={() => onSectionClick('specializations')} 
          />
          <Skills 
            skills={portfolio.skills} 
            onViewDetail={() => onSectionClick('skills')} 
          />
          <Certifications 
            certifications={portfolio.certifications} 
            onViewDetail={() => onSectionClick('certifications')} 
          />
          <Interests 
            interests={portfolio.interests} 
            onViewDetail={() => onSectionClick('interests')} 
          />
          <Learning 
            learnings={portfolio.learnings} 
            onViewDetail={() => onSectionClick('learning')} 
          />
          <BlogSection 
            blogs={portfolio.blogs} 
            onViewDetail={() => onSectionClick('blog')} 
          />
          <Traits 
            traits={portfolio.traits} 
            onViewDetail={() => onSectionClick('traits')} 
          />
          <Projects 
            projects={portfolio.projects} 
            onViewDetail={() => onSectionClick('projects')} 
          />
          <ContactSection 
            contacts={portfolio.contacts} 
            onViewDetail={() => onSectionClick('contact')} 
          />
        </main>

        <footer className="portfolio-footer">
          <p>JAP Portfolio • {portfolio.name} • {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};