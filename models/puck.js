import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PuckSchema = new Schema({
  scent: String,
  description: String,
  price: Number,
  weight: Number,
  stock: Number,
});

mongoose.models = {};

const Puck = mongoose.model("Puck", PuckSchema);

module.exports = Puck;
