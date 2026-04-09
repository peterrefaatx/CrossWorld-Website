import express from 'express';
import { database } from '../db/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create submission (public - contact form)
router.post('/', async (req, res) => {
  try {
    const submission = database.submissions.create(req.body);
    res.status(201).json({ message: 'Submission received successfully', id: submission.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all submissions (admin only)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const submissions = database.submissions.findAll();
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update submission status
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const submission = database.submissions.update(req.params.id, { status: req.body.status });
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete submission
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deleted = database.submissions.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.json({ message: 'Submission deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
