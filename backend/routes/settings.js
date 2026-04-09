import express from 'express';
import { database } from '../db/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get settings (public)
router.get('/', (req, res) => {
  try {
    const settings = database.settings.get();
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update settings (admin only)
router.put('/', authenticateToken, (req, res) => {
  try {
    const settings = database.settings.update(req.body);
    res.json(settings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
