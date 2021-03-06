const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idvalidator = require('mongoose-id-validator');

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true]
  }
});

ProductSchema.plugin(idvalidator);

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;