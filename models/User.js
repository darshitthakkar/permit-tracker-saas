const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  company: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    enum: ['Construction', 'Healthcare', 'Food & Beverage', 'Real Estate', 'Legal', 'Other'],
    required: true
  },
  notificationPreference: {
    type: String,
    enum: ['Email', 'SMS', 'Both'],
    default: 'Email'
  },
  reminderDays: {
    type: Number,
    default: 30
  },
  phone: String,
  subscription: {
    plan: {
      type: String,
      enum: ['Free', 'Basic', 'Pro'],
      default: 'Free'
    },
    startDate: Date,
    endDate: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
