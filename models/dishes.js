const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commenSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const dishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Currency,
      required: true,
      min: 0,
    },
    label: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    comments: [commenSchema],
  },
  {
    timestamps: true,
  }
);

var dishModel = mongoose.model('Dish', dishSchema);

module.exports = dishModel;
