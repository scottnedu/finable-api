const Account = require("../models/Account.model");
const generateAccountNumber = require('../utils/generateAccountNumber');

const createAccountService = async (data) => {
  const { firstName, surname, email, phoneNumber, dateOfBirth } = data;

  // Check if email already exists
  const existing = await Account.findOne({ email });
  if (existing) {
    throw new Error('Email already exists');
  }

  const accountNumber = generateAccountNumber();

  const newAccount = await Account.create({
    firstName,
    surname,
    email,
    phoneNumber,
    dateOfBirth,
    accountNumber
  });

  return newAccount;
};

module.exports = {
  createAccountService
};
