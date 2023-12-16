import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
