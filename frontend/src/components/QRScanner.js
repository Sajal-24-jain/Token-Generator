import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import axios from 'axios';
import './QRScanner.css';

const QRScanner = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data) {
      console.log('Scanned data:', data); // Log scanned data for debugging
      try {
        const response = await axios.post('http://localhost:5000/api/tokens/verify', { qrCode: data.text });
        setResult(response.data.message || 'Token verified successfully');
      } catch (error) {
        console.error('Error verifying QR code', error);
        setResult('Error verifying QR code');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error scanning QR code');
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="container qr-scanner">
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={previewStyle}
      />
      <p>{result || error || 'Scan a QR code'}</p>
    </div>
  );
};

export default QRScanner;
