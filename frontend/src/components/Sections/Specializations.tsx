// src/components/Sections/Specializations.tsx
import React from 'react';
import { Specialization } from '../../lib/api';
import './Specializations.css';

interface SpecializationsProps {
  specializations: Specialization[];
}

export const Specializations: React.FC<SpecializationsProps> = ({ specializations }) => (
  <section className="specializations-section" id="specializations">
    <h2 className="section-title">Specializations</h2>
    <div className="specializations-grid">
      {specializations.map((spec) => (
        <div key={spec.id} className="specialization-card">
          <h3 className="specialization-title">
            {spec.name} <span className="experience">({spec.specialization_commitment_age} years)</span>
          </h3>
          
          <div className="specialization-detail">
            <h4>Skills</h4>
            <ul className="skills-list">
              {spec.specialization_skills.split(',').map((skill, idx) => (
                <li key={idx} className="skill-item">{skill.trim()}</li>
              ))}
            </ul>
          </div>
          
          <div className="specialization-detail">
            <h4>Projects</h4>
            <p>{spec.specialization_projects}</p>
          </div>
          
          <div className="specialization-detail">
            <h4>Research</h4>
            <p>{spec.specialization_research}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);