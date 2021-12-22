import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  scent: String,
  description: String,
  price: Number,
  weight: Number,
  inStock: Number,
  type: String,
});

mongoose.models = {};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
