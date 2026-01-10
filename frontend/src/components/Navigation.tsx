// src/components/Navigation.tsx
import React from 'react';
import './Navigation.css';

interface NavigationProps {
  sections: string[];
}

export const Navigation: React.FC<NavigationProps> = ({ sections }) => (
  <nav className="navigation">
    <div className="nav-container">
      <a href="#intro" className="nav-logo">JAP</a>
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section}>
            <a href={`#${section.toLowerCase()}`} className="nav-link">
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);