import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokenForm from './components/TokenForm';
import QRScanner from './components/QRScanner';

function App() {
  return (
    <Router>
      <div>
        <h1>Token Generation System</h1>
        <Routes>
          <Route path="/" element={<TokenForm />} />
          <Route path="/scan" element={<QRScanner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
