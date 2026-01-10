// src/components/Sections/Certifications.tsx
import React from 'react';
import { Certification } from '../../lib/api';
import './Certifications.css';

interface CertificationsProps {
  certifications: Certification[];
  onViewDetail?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications, onViewDetail }) => (
  <section className="certifications-section" id="certifications">
    <div className="section-header">
      <h2 className="section-title">Education & Certifications</h2>
      {onViewDetail && (
        <button onClick={onViewDetail} className="view-detail-button">
          View All Certifications →
        </button>
      )}
    </div>
    
    <div className="certifications-list">
      {certifications.slice(0, 2).map((cert) => (
        <div key={cert.id} className="certification-item">
          <div className="certification-header">
            <h3 className="certification-name">{cert.certification_name}</h3>
            <div className="certification-dates">
              <span className="date-earned">Earned: {cert.month_year_earned}</span>
              {cert.month_year_started !== cert.month_year_earned && (
                <span className="date-started">Started: {cert.month_year_started}</span>
              )}
            </div>
          </div>
          
          <div className="certification-content">
            <div className="certification-detail">
              <h4>Skills Acquired</h4>
              <p className="truncate-text">{cert.skills_acquired}</p>
            </div>
            
            {cert.projects_done && (
              <div className="certification-detail">
                <h4>Projects</h4>
                <p className="truncate-text">{cert.projects_done}</p>
              </div>
            )}
            
            {cert.comment && (
              <div className="certification-detail">
                <h4>Comment</h4>
                <p className="truncate-text">{cert.comment}</p>
              </div>
            )}
            
            {cert.credential_id && (
              <div className="certification-credential">
                <small>Credential ID: {cert.credential_id}</small>
              </div>
            )}
            
            {cert.credential_url && (
              <a 
                href={cert.credential_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="credential-link"
              >
                Verify Credential
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
    
    {certifications.length > 2 && onViewDetail && (
      <div className="section-footer">
        <button onClick={onViewDetail} className="view-more-button">
          View all {certifications.length} certifications →
        </button>
      </div>
    )}
  </section>
);