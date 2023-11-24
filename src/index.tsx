import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/Dashboard/index.css';
import App from './pages/Dashboard/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
