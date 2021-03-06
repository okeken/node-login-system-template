const bcrypt = require("bcryptjs");
const User = require("../models/user");
const saltRouds = 12;

exports.userRegistration = async (req, res) => {
  const { password, username, email } = req.body;

  try {
    if (!username || !password || !email)
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });

    User.findOne({ username }).then((user) => {
      if (user) {
        return res.status(423).json({
          status: false,
          message: "username taken, please choose another one",
        });
      }
    });

    bcrypt
      .hash(password, saltRouds)
      .then((password) => {
        let newUser = new User({
          username,
          password,
          email,
        });
        return newUser.save();
      })
      .then(() => {
        res.status(200).json({
          status: true,
          message: "Registration succeessful, login to proceed",
        });
      });
  } catch (err) {
    console.log("Error occured");
  }
};
