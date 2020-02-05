const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { hashPassword, checkHashed } = require("../lib/hashing");

router.get("/register", (req, res) => {
      res.render("auth/register");
});

module.exports = router;
