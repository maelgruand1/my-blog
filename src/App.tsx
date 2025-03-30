// src/App.tsx
import React from 'react';
import BlogList from './components/BlogList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Blog de développement</h1>
      <BlogList />
    </div>
  );
};

export default App;
