// src/components/Sections/Projects.tsx
import React from 'react';
import { Project } from '../../lib/api';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
  onViewDetail?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewDetail }) => {
  const provableProjects = projects.filter(project => project.provable);
  const otherProjects = projects.filter(project => !project.provable);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        {onViewDetail && (
          <button onClick={onViewDetail} className="view-detail-button">
            View All Projects →
          </button>
        )}
      </div>
      
      <div className="projects-grid">
        {provableProjects.slice(0, 2).map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-name">{project.project_name}</h3>
              {project.provable && (
                <span className="project-provable-badge">✓ Provable</span>
              )}
            </div>
            
            <div className="project-purpose">
              <h4>Purpose</h4>
              <p className="truncate-text">{project.purpose}</p>
            </div>
            
            <div className="project-demonstration">
              <h4>Demonstration</h4>
              <p className="truncate-text">{project.demonstration}</p>
            </div>
            
            <div className="project-technologies">
              <h4>Technologies</h4>
              <div className="tech-tags">
                {project.technologies.split(',').slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech.trim()}</span>
                ))}
                {project.technologies.split(',').length > 3 && (
                  <span className="tech-tag more-tech">+{project.technologies.split(',').length - 3}</span>
                )}
              </div>
            </div>
            
            <div className="project-links">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
              
              {project.github_repo && (
                <a 
                  href={project.github_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  GitHub
                </a>
              )}
              
              {project.live_demo && (
                <a 
                  href={project.live_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link demo-link"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
        
        {otherProjects.slice(0, 1).map((project) => (
          <div key={project.id} className="project-card other-project">
            <div className="project-header">
              <h3 className="project-name">{project.project_name}</h3>
              <span className="project-concept-badge">Concept</span>
            </div>
            
            <div className="project-purpose">
              <h4>Purpose</h4>
              <p className="truncate-text">{project.purpose}</p>
            </div>
            
            <div className="project-links">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {projects.length > 3 && onViewDetail && (
        <div className="section-footer">
          <button onClick={onViewDetail} className="view-more-button">
            View all {projects.length} projects ({provableProjects.length} provable) →
          </button>
        </div>
      )}
    </section>
  );
};