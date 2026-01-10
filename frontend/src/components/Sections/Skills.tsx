// src/components/Sections/Skills.tsx
import React from 'react';
import { Skill } from '../../lib/api';
import './Skills.css';

interface SkillsProps {
  skills: Skill[];
  onViewDetail?: () => void;
}

export const Skills: React.FC<SkillsProps> = ({ skills, onViewDetail }) => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Define category order for consistent display
  const categoryOrder = ['Security', 'Backend', 'Technical', 'Soft'];
  const orderedCategories = categoryOrder.filter(cat => skillsByCategory[cat]);

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        {onViewDetail && (
          <button onClick={onViewDetail} className="view-detail-button">
            View All Skills →
          </button>
        )}
      </div>
      
      {orderedCategories.slice(0, 2).map((category) => (
        <div key={category} className="skills-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category]
              .sort((a, b) => b.proficiency - a.proficiency)
              .slice(0, 4)
              .map((skill) => (
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
                    <small className="truncate-text">Certifications: {skill.skill_certificates}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {orderedCategories.length > 2 && onViewDetail && (
        <div className="category-preview">
          <h3 className="category-title">More Categories</h3>
          <div className="categories-list">
            {orderedCategories.slice(2).map((category) => (
              <div key={category} className="category-preview-item">
                <span className="category-name">{category}</span>
                <span className="category-count">{skillsByCategory[category].length} skills</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {skills.length > 8 && onViewDetail && (
        <div className="section-footer">
          <button onClick={onViewDetail} className="view-more-button">
            View all {skills.length} skills across {orderedCategories.length} categories →
          </button>
        </div>
      )}
    </section>
  );
};