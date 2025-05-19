const express = require('express');
const router = express.Router();
const { createAccount } = require('../controllers/accountController');

// POST /api/accounts
router.post('/accounts', createAccount);

module.exports = router;
