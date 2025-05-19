const express = require('express');
const router = express.Router();
const { getBanks } = require('../controllers/bankController');

//GET /api/banks
router.get('/banks', getBanks);

module.exports = router;
