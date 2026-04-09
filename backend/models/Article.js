import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Article', articleSchema);
