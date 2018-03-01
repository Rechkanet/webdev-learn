const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  name: {
    type: String,
    required: [true]
  }
});

const Product = mongoose.model('note', ProductSchema);

module.exports = Product;