const express = require("express");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const router = express.Router();

// CREATE a new user
router.post("/", async (req, res) => {
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) return res.status(400).send("User already registered.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send("Error creating the user: " + err.message);
  }
});

router.post("/register", async (req, res) => {
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) return res.status(400).send("User already registered.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User(req.body);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send("Error creating the user: " + err.message);
  }
});

// GET all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("Error fetching users: " + err.message);
  }
});

// GET a single user by ID
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid user ID.");

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found.");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Error fetching the user: " + err.message);
  }
});

// UPDATE a user by ID
router.put("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid user ID.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!user) return res.status(404).send("User not found.");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Error updating the user: " + err.message);
  }
});

// DELETE a user by ID
router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid user ID.");

  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send("User not found.");
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Error deleting the user: " + err.message);
  }
});

module.exports = router;
