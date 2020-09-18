const bcrypt = require("bcryptjs");
const User = require("../models/user");
const saltRouds = 12;

exports.viewAllUsers = async (req, res) => {
  let results = await User.find();
  console.log(results);

  try {
    if (!results) {
      return res.status(423).json({
        status: false,
        message: "No users yet",
      });
    }
    res.send(results);
  } catch {
    res.send("An error occurred");
  }
};
