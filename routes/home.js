const router = require("express").Router();

router.get("/", (req, res) => {
  return res.status(200).json("Welcome to this beautiful online tutorial app");
});

module.exports = router;
