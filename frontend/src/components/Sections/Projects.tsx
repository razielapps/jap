// src/components/Sections/Projects.tsx
import React from 'react';
import { Project } from '../../lib/api';
import './Projects.css';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section className="projects-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-header">
            <h3 className="project-name">{project.project_name}</h3>
            {project.provable && (
              <span className="project-provable-badge">✓ Provable</span>
            )}
          </div>
          
          <div className="project-purpose">
            <h4>Purpose</h4>
            <p>{project.purpose}</p>
          </div>
          
          <div className="project-demonstration">
            <h4>Demonstration</h4>
            <p>{project.demonstration}</p>
          </div>
          
          <div className="project-technologies">
            <h4>Technologies</h4>
            <div className="tech-tags">
              {project.technologies.split(',').map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech.trim()}</span>
              ))}
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
    </div>
  </section>
);