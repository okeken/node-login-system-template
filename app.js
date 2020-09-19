const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

PORT = parseInt(process.env.PORT, 10) || 3000;
require("dotenv").config();

//Routes Defined
const Signup = require("./routes/users");
const Login = require("./routes/users");

//Home
app.get("/", (req, res) => {
  res.send("Hello World! > ");
});
app.use("/", Signup);
app.use("/", Login);

//Database Configuration
const mongoose = require("mongoose");

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
