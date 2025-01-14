const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  remaining: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true, 
  },
  cards: [CardSchema],
});

module.exports = mongoose.model("Category", CategorySchema);
