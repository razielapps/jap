// src/components/Sections/Learning.tsx
import React from 'react';
import { Learning } from '../../lib/api';
import './Learning.css';

interface LearningProps {
  learnings: Learning[];
}

export const Learning: React.FC<LearningProps> = ({ learnings }) => (
  <section className="learning-section" id="learning">
    <h2 className="section-title">Currently Learning</h2>
    <div className="learning-list">
      {learnings
        .filter(learning => learning.is_active)
        .map((learning) => (
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
                <p>{learning.why}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </section>
);