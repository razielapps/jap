// src/components/Sections/Traits.tsx
import React from 'react';
import { ProfessionalTrait } from '../../lib/api';
import './Traits.css';

interface TraitsProps {
  traits: ProfessionalTrait[];
  onViewDetail?: () => void;
}

export const Traits: React.FC<TraitsProps> = ({ traits, onViewDetail }) => (
  <section className="traits-section" id="traits">
    <div className="section-header">
      <h2 className="section-title">Professional Traits</h2>
      {onViewDetail && (
        <button onClick={onViewDetail} className="view-detail-button">
          View All Traits →
        </button>
      )}
    </div>
    
    <div className="traits-grid">
      {traits.slice(0, 4).map((trait) => (
        <div key={trait.id} className="trait-card">
          <div className="trait-header">
            {trait.icon && <span className="trait-icon">{trait.icon}</span>}
            <h3 className="trait-name">{trait.trait_name}</h3>
          </div>
          <p className="trait-comment truncate-text">{trait.comment}</p>
        </div>
      ))}
    </div>
    
    {traits.length > 4 && onViewDetail && (
      <div className="section-footer">
        <div className="traits-preview">
          <h4>Additional Traits</h4>
          <div className="additional-traits">
            {traits.slice(4).map((trait) => (
              <div key={trait.id} className="additional-trait">
                {trait.icon && <span className="trait-icon-small">{trait.icon}</span>}
                <span className="trait-name-small">{trait.trait_name}</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onViewDetail} className="view-more-button">
          View all {traits.length} professional traits →
        </button>
      </div>
    )}
  </section>
);