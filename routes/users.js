var express = require("express");
var router = express.Router();
const { userRegistration } = require("../controllers/signup");
const { viewAllUsers, deleteAllUsers } = require("../controllers/user");

/* GET users listing. */
router.post("/signup", userRegistration);
router.get("/signup", (req, res) => res.send("i workrd"));
router.get("/view", viewAllUsers);

//Delete Operations
router.delete("/delete", deleteAllUsers);

module.exports = router;
