const express = require('express');
const router = express.Router();
const Permit = require('../models/Permit');

// Get all permits for a user
router.get('/:userId', async (req, res) => {
  try {
    const permits = await Permit.find({ userId: req.params.userId }).sort({ expiryDate: 1 });
    res.json(permits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new permit
router.post('/', async (req, res) => {
  const permit = new Permit(req.body);
  try {
    const newPermit = await permit.save();
    res.status(201).json(newPermit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a permit
router.put('/:id', async (req, res) => {
  try {
    const permit = await Permit.findById(req.params.id);
    if (!permit) return res.status(404).json({ message: 'Permit not found' });
    
    Object.assign(permit, req.body);
    const updatedPermit = await permit.save();
    res.json(updatedPermit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a permit
router.delete('/:id', async (req, res) => {
  try {
    const permit = await Permit.findByIdAndDelete(req.params.id);
    if (!permit) return res.status(404).json({ message: 'Permit not found' });
    res.json({ message: 'Permit deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get permits expiring soon
router.get('/:userId/expiring-soon', async (req, res) => {
  try {
    const permits = await Permit.find({
      userId: req.params.userId,
      status: { $in: ['Expiring Soon', 'Expired'] }
    }).sort({ daysUntilExpiry: 1 });
    res.json(permits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
