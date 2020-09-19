const express = require("express");

const app = express();

PORT = parseInt(process.env.PORT, 10) || 3000;
require("dotenv").config();
const mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Signup = require("./routes/users");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

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
