
// controllers/bankController.js
const bankList = require('../utils/bankList');

exports.getBanks = (req, res) => {
  const banks = Object.keys(bankList);
  res.status(200).json({ banks });
};
