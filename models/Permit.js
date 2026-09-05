const mongoose = require('mongoose');

const permitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  permitName: {
    type: String,
    required: true
  },
  permitType: {
    type: String,
    enum: ['Building Permit', 'Business License', 'Health Certificate', 'Professional License', 'Other'],
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  renewalDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['Active', 'Expiring Soon', 'Expired', 'Renewed'],
    default: 'Active'
  },
  daysUntilExpiry: {
    type: Number,
    default: 0
  },
  notificationSent: {
    type: Boolean,
    default: false
  },
  documents: [{
    name: String,
    url: String
  }],
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to calculate days until expiry and update status
permitSchema.pre('save', function(next) {
  const today = new Date();
  const expiry = new Date(this.expiryDate);
  const timeDiff = expiry - today;
  this.daysUntilExpiry = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  if (this.daysUntilExpiry < 0) {
    this.status = 'Expired';
  } else if (this.daysUntilExpiry <= 30) {
    this.status = 'Expiring Soon';
  } else {
    this.status = 'Active';
  }
  
  next();
});

module.exports = mongoose.model('Permit', permitSchema);
