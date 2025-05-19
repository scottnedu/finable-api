const { createAccountService } = require('../services/accountService');

exports.createAccount = async (req, res) => {
  try {
    const newAccount = await createAccountService(req.body);
    res.status(201).json({
      message: 'Account created successfully',
      account: newAccount
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
