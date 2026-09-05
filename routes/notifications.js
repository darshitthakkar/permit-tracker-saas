const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Permit = require('../models/Permit');
const User = require('../models/User');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Send expiry reminder emails
router.post('/send-reminders', async (req, res) => {
  try {
    const permits = await Permit.find({
      status: { $in: ['Expiring Soon', 'Expired'] },
      notificationSent: false
    }).populate('userId');

    for (let permit of permits) {
      const user = permit.userId;
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: `⚠️ ${permit.permitName} Expires in ${permit.daysUntilExpiry} Days`,
        html: `
          <h2>Permit Expiry Reminder</h2>
          <p>Hi ${user.name},</p>
          <p>Your <strong>${permit.permitName}</strong> (${permit.permitType}) will expire on <strong>${new Date(permit.expiryDate).toDateString()}</strong>.</p>
          <p>Days remaining: <strong>${permit.daysUntilExpiry}</strong></p>
          <p>Please renew your permit on time to avoid penalties.</p>
          <p>Best regards,<br>Permit Tracker Team</p>
        `
      };

      await transporter.sendMail(mailOptions);
      permit.notificationSent = true;
      await permit.save();
    }

    res.json({ message: `Sent ${permits.length} reminder emails` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get notification status
router.get('/status/:permitId', async (req, res) => {
  try {
    const permit = await Permit.findById(req.params.permitId);
    res.json({
      permitName: permit.permitName,
      notificationSent: permit.notificationSent,
      daysUntilExpiry: permit.daysUntilExpiry
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
