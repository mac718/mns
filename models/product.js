import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  scent: String,
  description: String,
  price: Number,
  weight: Number,
  inStock: Number,
  type: String,
  notificationList: Array,
  archived: Boolean,
});

mongoose.models = {};

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

module.exports = Product;
