import express from 'express';
import { database } from '../db/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all articles (public)
router.get('/', async (req, res) => {
  try {
    const articles = database.articles.findPublished();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all articles (admin - includes unpublished)
router.get('/admin', authenticateToken, async (req, res) => {
  try {
    const articles = database.articles.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single article
router.get('/:id', async (req, res) => {
  try {
    const article = database.articles.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create article
router.post('/', authenticateToken, async (req, res) => {
  try {
    const article = database.articles.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update article
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const article = database.articles.update(req.params.id, req.body);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete article
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const deleted = database.articles.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
