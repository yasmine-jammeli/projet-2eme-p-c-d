import React, { useState } from 'react';
import axios from 'axios';
import '../css/url.css'; // Import your CSS file

const URLChecker = () => {
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request to server...');
      // Update Axios request to include CORS headers
      const response = await axios.post('http://localhost:5000/predict', { url }, { headers: { 'Access-Control-Allow-Origin': '*' } });
      console.log('Response received:', response.data);
      const data = response.data;
      if (data.prediction) {
        const isSpam = data.prediction[0] === 1;
        setPrediction(isSpam);
        setError('');
      } else {
        setError('Failed to get prediction');
      }
    } catch (error) {
      console.error('Error predicting URL:', error);
      setError('Error predicting URL');
    }
  };

  return (
    <div className='custom-url-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" className="custom-url-input" />
        <button className='custom-url-button' type="submit">Check URL</button>
      </form>
      <div className={prediction ? 'error' : 'success'}>
        {prediction ? (
          <div className="validation">
            <p>Validation message 1</p>
            <p className="custom-prediction">{`Prediction: Spam`}</p>
          </div>
        ) : (
          <div className="success">
            <p>Successful operation message</p>
            <p className="custom-prediction">{`Prediction: Not Spam`}</p>
          </div>
        )}
      </div>
      {error && (
        <div className="error">
          <p className="custom-error">{error}</p>
        </div>
      )}
    </div>
  );
};

export default URLChecker;
