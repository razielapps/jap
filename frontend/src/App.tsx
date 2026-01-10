// src/App.tsx
import React, { useState } from 'react';
import { Home } from './components/Home/Home';
import { SectionDetail } from './components/SectionDetail/SectionDetail';
import { usePortfolio } from './components/Hooks/usePortfolio';
import { Loading } from './components/Utils/Loading';
import { Error } from './components/Utils/Error';
import './App.css';

type SectionType = 
  | 'intro' 
  | 'specializations' 
  | 'skills' 
  | 'certifications' 
  | 'interests' 
  | 'learning' 
  | 'blog' 
  | 'traits' 
  | 'projects' 
  | 'contact'
  | null;

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const { portfolio, loading, error, refetch } = usePortfolio();

  if (loading) {
    return <Loading />;
  }

  if (error || !portfolio) {
    return <Error message={error || 'No portfolio data found'} onRetry={refetch} />;
  }

  if (activeSection) {
    return (
      <div className="App">
        <SectionDetail 
          section={activeSection} 
          portfolio={portfolio} 
          onClose={() => setActiveSection(null)} 
        />
      </div>
    );
  }

  return (
    <div className="App">
      <Home 
        portfolio={portfolio} 
        onSectionClick={setActiveSection} 
      />
    </div>
  );
}

export default App;