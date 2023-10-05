import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  isAmin: Boolean,
});

mongoose.models = {};

const User = mongoose.model("User", UserSchema);

module.exports = User;
