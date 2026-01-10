// src/components/Navigation.tsx
import React from 'react';
import './Navigation.css';

interface NavigationProps {
  sections: Array<{ id: string; name: string }>;
  onSectionClick: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ sections, onSectionClick }) => (
  <nav className="navigation">
    <div className="nav-container">
      <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        JAP
      </span>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section.id}>
            <button 
              onClick={() => onSectionClick(section.id)}
              className="nav-link"
            >
              {section.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);