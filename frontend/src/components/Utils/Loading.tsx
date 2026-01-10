// src/components/Utils/Loading.tsx
import React from 'react';
import './Loading.css';

export const Loading: React.FC = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
    <p>Loading portfolio data...</p>
  </div>
);