import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  published: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Testimonial', testimonialSchema);
