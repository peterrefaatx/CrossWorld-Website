import express from 'express';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { authenticateToken } from '../middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const uploadsDir = join(__dirname, '../uploads');

// Create uploads directory if it doesn't exist
if (!existsSync(uploadsDir)) {
  mkdirSync(uploadsDir, { recursive: true });
}

const router = express.Router();

// Upload image
router.post('/image', authenticateToken, async (req, res) => {
  try {
    const { image, filename } = req.body;
    
    if (!image || !filename) {
      return res.status(400).json({ message: 'Image and filename required' });
    }

    // Extract base64 data
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Generate unique filename
    const timestamp = Date.now();
    const ext = filename.split('.').pop();
    const uniqueFilename = `${timestamp}-${Math.random().toString(36).substring(7)}.${ext}`;
    
    // Save file
    const filepath = join(uploadsDir, uniqueFilename);
    writeFileSync(filepath, buffer);
    
    // Return URL
    const url = `/uploads/${uniqueFilename}`;
    res.json({ url });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
