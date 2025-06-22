const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route POST  api/users/register
// @desc Register new user
// @access public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // registration logic

    // res.send({ name, email, password });

    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    // res.status(201).json({
    //   user: {
    //     _id: user._id,
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //   },
    // });

    // Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // sign and send token with data

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        // send user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

// @route POS /api/users/login
// @desc Authenticate user
// @access  Public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user by email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // sign and send token with data

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        // send user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
