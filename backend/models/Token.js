const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slot: { type: String, required: true },
  count: { type: Number, required: true },
  qrCode: { type: String, required: true } // Store the QR code data as a string
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
