const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/routers");  // Ensure this path is correct

const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(express.Router());  // Use the router correctly
app.use(router)
app.get("/status", (req, res) => {
  res.json({ status: "online" });
});

app.get("/", (req, res) => {
  res.send("server is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

module.exports = router;
