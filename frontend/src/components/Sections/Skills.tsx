// src/components/Sections/Skills.tsx
import React from 'react';
import { Skill } from '../../lib/api';
import './Skills.css';

interface SkillsProps {
  skills: Skill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <div key={category} className="skills-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {categorySkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.skill_name}</span>
                  <span className="skill-experience">{skill.skill_commitment_age} years</span>
                </div>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                  <span className="skill-progress-text">{skill.proficiency}%</span>
                </div>
                {skill.skill_certificates && (
                  <div className="skill-certificates">
                    <small>Certifications: {skill.skill_certificates}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};