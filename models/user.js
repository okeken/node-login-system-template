const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const persSchema = new Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//Exporting the schema
module.exports = mongoose.model("User", persSchema);
