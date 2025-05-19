const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  bankName: { 
    type: String, 
    required: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('Account', accountSchema);
