const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// @route   POST /api/auth
// @desc    Create a new user
router.post(
  "/",
  [
    body("name", "Name is required").notEmpty(),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  ],
  async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check for existing user
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      // Create and save new user
      user = new User({ name, email, password });
      await user.save();

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.error("Error saving user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
