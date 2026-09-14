import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { initUTMTracking } from './utils/tracking';

// Initialize UTM & Campaign parameter capture immediately on load
initUTMTracking();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
