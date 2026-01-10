// src/components/Home/Home.tsx
import React from 'react';
import { usePortfolio } from '../Hooks/usePortfolio';
import { Loading } from '../Utils/Loading';
import { Error } from '../Utils/Error';
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

export const Home: React.FC = () => {
  const { portfolio, loading, error, refetch } = usePortfolio();

  const sections = [
    'Intro',
    'Specializations',
    'Skills',
    'Certifications',
    'Interests',
    'Learning',
    'Blog',
    'Traits',
    'Projects',
    'Contact'
  ];

  if (loading) {
    return <Loading />;
  }

  if (error || !portfolio) {
    return <Error message={error || 'No portfolio data found'} onRetry={refetch} />;
  }

  return (
    <div className="portfolio-container">
      <Navigation sections={sections} />
      
      <main className="portfolio-content">
        <Intro data={{ name: portfolio.name, bio: portfolio.bio }} />
        <Specializations specializations={portfolio.specializations} />
        <Skills skills={portfolio.skills} />
        <Certifications certifications={portfolio.certifications} />
        <Interests interests={portfolio.interests} />
        <Learning learnings={portfolio.learnings} />
        <BlogSection blogs={portfolio.blogs} />
        <Traits traits={portfolio.traits} />
        <Projects projects={portfolio.projects} />
        <ContactSection contacts={portfolio.contacts} />
      </main>

      <footer className="portfolio-footer">
        <p>JAP Portfolio • {portfolio.name} • {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};