// UrlChecker.jsx
import React, { useState } from 'react';
import './UrlChecker.css'; // Import CSS file for styling

function UrlChecker() {
  const [url, setUrl] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleCheckUrl = () => {
    if (isValidUrl(url)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="url-checker-container">
      <h1 className="title">URL Checker</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleInputChange}
        className="url-input"
      />
      <button onClick={handleCheckUrl} className="check-button">
        Check URL
      </button>
      {isValid !== null && (
        <p className={isValid ? 'valid-message' : 'invalid-message'}>
          {isValid ? 'Valid URL' : 'Invalid URL'}
        </p>
      )}
    </div>
  );
}

export default UrlChecker;

/*/// App.jsx
import React from 'react';
import UrlChecker from './UrlChecker';

function App() {
  return (
    <div>
      <UrlChecker />
    </div>
  );
}

export default App;
*/