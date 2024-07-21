const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  transition: {
    type: [Schema.Types.Mixed], 
    default: [],
  },
  wishlist: {
    type: [Schema.Types.Mixed], 
    default: [],
  },
  cart: {
    type: [Schema.Types.Mixed],
    default: [],
  },
  userimage: {
    type: String,
    default: '',
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
