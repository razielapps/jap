// src/components/Sections/Specializations.tsx
import React from 'react';
import { Specialization } from '../../lib/api';
import './Specializations.css';

interface SpecializationsProps {
  specializations: Specialization[];
  onViewDetail?: () => void;
}

export const Specializations: React.FC<SpecializationsProps> = ({ specializations, onViewDetail }) => (
  <section className="specializations-section" id="specializations">
    <div className="section-header">
      <h2 className="section-title">Specializations</h2>
      {onViewDetail && (
        <button onClick={onViewDetail} className="view-detail-button">
          View All Specializations →
        </button>
      )}
    </div>
    
    <div className="specializations-grid">
      {specializations.slice(0, 2).map((spec) => (
        <div key={spec.id} className="specialization-card">
          <h3 className="specialization-title">
            {spec.name} <span className="experience">({spec.specialization_commitment_age} years)</span>
          </h3>
          
          <div className="specialization-detail">
            <h4>Skills</h4>
            <div className="skills-preview">
              {spec.specialization_skills.split(',').slice(0, 4).map((skill, idx) => (
                <span key={idx} className="skill-preview">{skill.trim()}</span>
              ))}
              {spec.specialization_skills.split(',').length > 4 && (
                <span className="more-skills">+{spec.specialization_skills.split(',').length - 4} more</span>
              )}
            </div>
          </div>
          
          <div className="specialization-detail">
            <h4>Projects</h4>
            <p className="truncate-text">{spec.specialization_projects}</p>
          </div>
          
          {onViewDetail && (
            <button onClick={onViewDetail} className="card-action-button">
              Learn more about {spec.name} →
            </button>
          )}
        </div>
      ))}
    </div>
    
    {specializations.length > 2 && onViewDetail && (
      <div className="section-footer">
        <div className="other-specializations">
          <h4>Other Specializations</h4>
          <div className="other-specs-list">
            {specializations.slice(2).map((spec) => (
              <div key={spec.id} className="other-spec-item">
                <span className="other-spec-name">{spec.name}</span>
                <span className="other-spec-years">{spec.specialization_commitment_age} years</span>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onViewDetail} className="view-more-button">
          View all {specializations.length} specializations →
        </button>
      </div>
    )}
  </section>
);