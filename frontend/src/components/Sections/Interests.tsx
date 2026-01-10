// src/components/Sections/Interests.tsx
import React from 'react';
import { Interest } from '../../lib/api';
import './Interests.css';

interface InterestsProps {
  interests: Interest[];
}

export const Interests: React.FC<InterestsProps> = ({ interests }) => (
  <section className="interests-section" id="interests">
    <h2 className="section-title">Interests</h2>
    <div className="interests-grid">
      {interests.map((interest) => (
        <div key={interest.id} className="interest-card">
          <h3 className="interest-name">{interest.interest_name}</h3>
          <div className="interest-meta">
            <span className="interest-since">Since: {interest.since_interested}</span>
          </div>
          {interest.description && (
            <p className="interest-description">{interest.description}</p>
          )}
        </div>
      ))}
    </div>
  </section>
);