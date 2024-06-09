import React, { useState } from 'react';
import axios from 'axios';
import './TokenForm.css';

const TokenForm = () => {
  const [name, setName] = useState('');
  const [slot, setSlot] = useState('');
  const [count, setCount] = useState(1);
  const [qrCode, setQrCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/api/tokens/generate', { name, slot, count });
    setQrCode(data.qrCode);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <select value={slot} onChange={(e) => setSlot(e.target.value)} required>
          <option value="">Select Slot</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} min="1" required />
        <button type="submit">Generate Token</button>
      </form>
      {qrCode && <div className="qr-code" dangerouslySetInnerHTML={{ __html: qrCode }} />}
    </div>
  );
};

export default TokenForm;
