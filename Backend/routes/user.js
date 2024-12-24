const express = require("express");
const { User, validate } = require("../models/user"); // Assuming the user model is in a "models" folder
const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
  // Validate user input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check for duplicate email or NIC (if needed)
  let existingUser = await User.findOne({ email: req.body.email });
  if (existingUser)
    return res.status(400).send("User with this email already exists.");

  existingUser = await User.findOne({ nic: req.body.nic });
  if (existingUser)
    return res.status(400).send("User with this NIC already exists.");

  // Create and save new user
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send("Error creating user.");
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send("Error fetching users.");
  }
});

// Get a user by ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found.");
    res.send(user);
  } catch (err) {
    res.status(500).send("Error fetching user.");
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  // Validate user input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).send("User not found.");
    res.send(user);
  } catch (err) {
    res.status(500).send("Error updating user.");
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found.");
    res.send("User deleted successfully.");
  } catch (err) {
    res.status(500).send("Error deleting user.");
  }
});

module.exports = router;
