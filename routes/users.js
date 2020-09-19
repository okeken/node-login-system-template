var express = require("express");
var router = express.Router();
const { userRegistration } = require("../controllers/signup");
const { login } = require("../controllers/login");
const { viewAllUsers, deleteAllUsers } = require("../controllers/user");

var bodyParser = require("body-parser");
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET users listing. */
router.post("/signup", userRegistration);
router.post("/login", login);
router.get("/signup", (req, res) => res.send("i workrd"));
router.get("/view", viewAllUsers);

//Delete Operations
router.delete("/delete", deleteAllUsers);

module.exports = router;
