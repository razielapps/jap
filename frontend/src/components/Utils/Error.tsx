// src/components/Utils/Error.tsx
import React from 'react';
import './Error.css';

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({ message, onRetry }) => (
  <div className="error">
    <div className="error-icon">⚠️</div>
    <h3>Error Loading Data</h3>
    <p>{message}</p>
    {onRetry && (
      <button onClick={onRetry} className="retry-button">
        Try Again
      </button>
    )}
  </div>
);