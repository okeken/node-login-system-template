const bcrypt = require("bcryptjs");
const User = require("../models/user");
const saltRouds = 12;

exports.viewAllUsers = async (req, res) => {
  let results = await User.find();

  try {
    if (!results.length) {
      return res.status(423).json({
        status: false,
        message: "No users yet",
      });
    }
    res.status(200).json({
      status: true,
      message: "users returned successfully",
      data: results,
    });
  } catch {
    res.send("An error occurred");
  }
};

exports.deleteAllUsers = async (req, res) => {
  let results = await User.deleteMany();
  try {
    if (!results.deletedCount)
      return res.status(404).json({
        status: false,
        message: "No users to delete",
      });
    res.status(200).json({
      status: true,
      message: "Users deleted successfully",
    });
  } catch (e) {
    res
      .status(500)
      .json("Something happened, our engineers have been notified");
  }
};
