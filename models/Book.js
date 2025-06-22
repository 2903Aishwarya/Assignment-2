const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number,
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Book', BookSchema);