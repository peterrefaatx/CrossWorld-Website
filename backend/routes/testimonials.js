import express from 'express';
import { database } from '../db/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all testimonials (public)
router.get('/', async (req, res) => {
  try {
    const testimonials = database.testimonials.findPublished();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all testimonials (admin)
router.get('/admin', authenticateToken, async (req, res) => {
  try {
    const testimonials = database.testimonials.findAll();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create testimonial
router.post('/', authenticateToken, async (req, res) => {
  try {
    const testimonial = database.testimonials.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update testimonial
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const testimonial = database.testimonials.update(req.params.id, req.body);
    if (!testimonial) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete testimonial
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deleted = database.testimonials.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }
    res.json({ message: 'Testimonial deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
