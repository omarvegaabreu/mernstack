const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

//@route  POST api/users
//@desc   register user
//@access Public

router.post(
  "/",
  [
    check("name", "Name is requiered")
      .not()
      .isEmpty("password")
      .withMessage("please provide a password"),
    check("email", "Please provide a valid email address").isEmail(),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Needs to be 6 or more characters")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User route");
  }
);

module.exports = router;
