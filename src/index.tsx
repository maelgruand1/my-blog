// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Utilisation de react-dom/client pour React 18
import './index.css'; // Si tu as des styles globaux
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Création du root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
