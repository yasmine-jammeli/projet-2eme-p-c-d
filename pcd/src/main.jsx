import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom'

import App from './App.jsx';
import './index.css';
import ContextProvider from './context/Context.jsx'

ReactDOM.render( // Use ReactDOM.render instead of ReactDOM.createRoot
  <>
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById('root')
);
