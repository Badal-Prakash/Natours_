const mongoose = require('mongoose');

const tourSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have Name'],
    unique: true
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have group size']
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have difficulty']
  },

  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'a tour must have Price']
  },
  discount: {
    type: Number
  },
  summary: {
    type: String,
    trim: true, // only works for string //it removes all white spaces
    required: [true, 'a tour must have summary description']
  },
  description: {
    type: String,
    trim: true // only works for string //it removes all white spaces
  },
  imageCover: {
    type: String,
    required: [true, 'a tour must have image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchemas);

module.exports = Tour;
