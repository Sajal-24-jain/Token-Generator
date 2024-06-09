const express = require('express');
const router = express.Router();
const { generateToken, verifyToken } = require('../controllers/tokenController');

// Route for generating token
router.post('/generate', generateToken);

// Route for verifying token
router.post('/verify', verifyToken);

module.exports = router;

