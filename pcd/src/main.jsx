import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App.jsx';
import './index.css';
import ContextProvider from './context/Context.jsx';

const root = document.getElementById('root');
const rootElement = (
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>
);

// Use createRoot from react-dom/client
const rootContainer = createRoot(root);
rootContainer.render(rootElement);
