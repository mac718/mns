import mongoose from "mongoose";

const Schema = mongoose.Schema;

const JarSchema = new Schema({
  scent: String,
  description: String,
  price: Number,
  weight: Number,
  stock: Number,
});

mongoose.models = {};

const Jar = mongoose.model("Jar", JarSchema);

module.exports = Jar;
