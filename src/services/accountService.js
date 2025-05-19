const Account = require("../models/Account.model");
const generateAccountNumber = require('../utils/generateAccountNumber');
const bankPrefixes = require('../utils/bankList');

// Optional: Regex validation
  const isValidAccountNumber = (accountNumber, bankName) => {
  const prefix = bankPrefixes[bankName];
  const regex = new RegExp(`^${prefix}\\d{9}$`);
  return regex.test(accountNumber);
};

// Ensure uniqueness of account number
const generateUniqueAccountNumber = async (bankName) => {
  let unique = false;
  let accountNumber;

  while (!unique) {
    accountNumber = generateAccountNumber(bankName);
    const exists = await Account.findOne({ accountNumber });

    if (!exists && isValidAccountNumber(accountNumber, bankName)) {
      unique = true;
    }
  }

  return accountNumber;
};

const createAccountService = async (data) => {
  const { firstName, surname, email, phoneNumber, dateOfBirth, bankName } = data;

  // Check if email already exists
  const existing = await Account.findOne({ email });
  if (existing) {
    throw new Error('Email already exists');
  }

  const accountNumber = await generateUniqueAccountNumber(bankName);

  const newAccount = await Account.create({
    firstName,
    surname,
    email,
    phoneNumber,
    dateOfBirth,
    accountNumber,
     bankName
  });

  return newAccount;
};

module.exports = {
  createAccountService
};
