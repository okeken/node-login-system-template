const express = require("express");
var bodyParser = require("body-parser");
const app = express();

PORT = process.env.PORT || 3000;
require("dotenv").config();
const mongoose = require("mongoose");
const Signup = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Hello World! > ");
});

app.use("/", Signup);

mongoose.connect("mongodb://localhost/testdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connection successfull");
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
