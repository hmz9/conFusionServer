const mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  price: {
    type: Currency,
    required: true,
    min: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
});

var promotionModel = mongoose.model("Promotion", promotionSchema);

module.exports = promotionModel;
