import React, { useState } from 'react';

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
      setError(null);
    } catch (error) {
      setError(error.message);
      setPrediction(null);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>URL Checker</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
        style={{ margin: '10px' }}
      />
      <br />
      <button onClick={handlePredict}>Check URL</button>
      <br />
      {prediction !== null && <p>Prediction: {prediction}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UrlChecker;
