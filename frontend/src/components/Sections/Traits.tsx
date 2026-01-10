// src/components/Sections/Traits.tsx
import React from 'react';
import { ProfessionalTrait } from '../../lib/api';
import './Traits.css';

interface TraitsProps {
  traits: ProfessionalTrait[];
}

export const Traits: React.FC<TraitsProps> = ({ traits }) => (
  <section className="traits-section" id="traits">
    <h2 className="section-title">Professional Traits</h2>
    <div className="traits-grid">
      {traits.map((trait) => (
        <div key={trait.id} className="trait-card">
          <div className="trait-header">
            {trait.icon && <span className="trait-icon">{trait.icon}</span>}
            <h3 className="trait-name">{trait.trait_name}</h3>
          </div>
          <p className="trait-comment">{trait.comment}</p>
        </div>
      ))}
    </div>
  </section>
);