// src/components/Sections/Learning.tsx
import React from 'react';
import { Learning } from '../../lib/api';
import './Learning.css';

interface LearningProps {
  learnings: Learning[];
  onViewDetail?: () => void;
}

export const Learning: React.FC<LearningProps> = ({ learnings, onViewDetail }) => {
  const activeLearnings = learnings.filter(learning => learning.is_active);

  return (
    <section className="learning-section" id="learning">
      <div className="section-header">
        <h2 className="section-title">Currently Learning</h2>
        {onViewDetail && (
          <button onClick={onViewDetail} className="view-detail-button">
            View Learning Journey →
          </button>
        )}
      </div>
      
      <div className="learning-list">
        {activeLearnings.slice(0, 2).map((learning) => (
          <div key={learning.id} className="learning-item">
            <div className="learning-header">
              <h3 className="learning-name">{learning.name}</h3>
              <div className="learning-progress">
                <span className="progress-text">{learning.progress}%</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${learning.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="learning-details">
              <div className="learning-dates">
                <span className="date-item">
                  Started: <strong>{learning.since_when}</strong>
                </span>
                <span className="date-item">
                  Expected Finish: <strong>{learning.expected_finish_time}</strong>
                </span>
              </div>
              
              <div className="learning-why">
                <h4>Why I'm Learning This</h4>
                <p className="truncate-text">{learning.why}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {(activeLearnings.length > 2 || learnings.length > activeLearnings.length) && onViewDetail && (
        <div className="section-footer">
          <button onClick={onViewDetail} className="view-more-button">
            {activeLearnings.length > 2 ? `View all ${activeLearnings.length} active learnings` : 'View completed learnings'} →
          </button>
        </div>
      )}
    </section>
  );
};