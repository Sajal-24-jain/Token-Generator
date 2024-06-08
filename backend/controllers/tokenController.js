const Token = require('../models/Token');
const qr = require('qr-image');

// Generate a token and return the QR code
const generateToken = async (req, res) => {
  const { name, slot, count } = req.body;

  if (!name || !slot || !count) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const qrCodeData = JSON.stringify({ name, slot, count });
  const qrCode = qr.imageSync(qrCodeData, { type: 'svg' });

  const token = new Token({ name, slot, count, qrCode: qrCodeData });
  await token.save();

  res.status(201).json({ qrCode });
};

// Verify a token by scanning a QR code
const verifyToken = async (req, res) => {
  console.log('Verifying token with data:', req.body.qrCode);
  const { qrCode } = req.body;

  try {
    const token = await Token.findOne({ qrCode });
    if (token) {
      return res.status(200).json({ message: 'Verified', token });
    } else {
      return res.status(404).json({ message: 'Not Verified' });
    }
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { generateToken, verifyToken };
