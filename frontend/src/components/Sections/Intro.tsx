// src/components/Sections/Intro.tsx
import React from 'react';
import { ME } from '../../lib/api';
import './Intro.css';

interface IntroProps {
  data: Pick<ME, 'name' | 'bio'>;
}

export const Intro: React.FC<IntroProps> = ({ data }) => (
  <section className="intro-section" id="intro">
    <div className="intro-content">
      <h1 className="intro-name">{data.name}</h1>
      <div className="intro-bio">
        {data.bio.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);