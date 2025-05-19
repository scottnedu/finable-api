const bankPrefixes = require('./bankList');
const generateAccountNumber = (bankName) => {
  const prefix = bankPrefixes[bankName];

  if (!prefix) {
    throw new Error('Invalid bank name');
  }

    const remainingDigits = Math.floor(100000000 + Math.random() * 900000000).toString(); // 9 digits
      return prefix + remainingDigits;
};

module.exports = generateAccountNumber;
