const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://aakashjothi20:aakashjothi20@cluster0.dca9sjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const db = mongoose.connection;

module.exports = db;
