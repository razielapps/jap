// src/components/Sections/Interests.tsx
import React from 'react';
import { Interest } from '../../lib/api';
import './Interests.css';

interface InterestsProps {
  interests: Interest[];
  onViewDetail?: () => void;
}

export const Interests: React.FC<InterestsProps> = ({ interests, onViewDetail }) => (
  <section className="interests-section" id="interests">
    <div className="section-header">
      <h2 className="section-title">Interests</h2>
      {onViewDetail && (
        <button onClick={onViewDetail} className="view-detail-button">
          View All Interests →
        </button>
      )}
    </div>
    <div className="interests-grid">
      {interests.slice(0, 4).map((interest) => (
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
    
    {interests.length > 4 && onViewDetail && (
      <div className="section-footer">
        <button onClick={onViewDetail} className="view-more-button">
          View all {interests.length} interests →
        </button>
      </div>
    )}
  </section>
);