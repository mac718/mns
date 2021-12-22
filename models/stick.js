import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StickSchema = new Schema({
  scent: String,
  description: String,
  price: Number,
  weight: Number,
  stock: Number,
});

mongoose.models = {};

const Stick = mongoose.model("Stick", StickSchema);

module.exports = Stick;
