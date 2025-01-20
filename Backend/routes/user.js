const express = require("express");
const { User, validate } = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cloudinary = require("cloudinary").v2;

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dh8aemmkc",
  api_key: 175951413584161,
  api_secret: "H_NzmnwTakj9zjYOhY_672-KmRo",
});

// CREATE a new user
router.post("/", async (req, res) => {
  const user1 = await User.findOne({ email: req.body.email });
  if (user1) return res.status(400).send("User already registered.");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { InternshipRequestLetterLink, cvLink, policeCertificateLink, nicLink } = req.body;

  let newBody = { ...req.body };

  if (InternshipRequestLetterLink) {
    const InternshipRequestLetterLinkResult = await cloudinary.uploader.upload(
      req.body.InternshipRequestLetterLink,
      { folder: "InternshipRequestLetter" }
    );
    newBody.InternshipRequestLetterLink = InternshipRequestLetterLinkResult.secure_url;
  }

  if (cvLink) {
    const cvLinkResult = await cloudinary.uploader.upload(req.body.cvLink, {
      folder: "cv",
    });
    newBody.cvLink = cvLinkResult.secure_url;
  }

  if (policeCertificateLink) {
    const policeCertificateLinkResult = await cloudinary.uploader.upload(
      req.body.policeCertificateLink,
      {
        folder: "policeCertificate",
      }
    );
    newBody.policeCertificateLink = policeCertificateLinkResult.secure_url;
  }

  if (nicLink) {
    const nicLinkResult = await cloudinary.uploader.upload(req.body.nicLink, {
      folder: "nic",
    });
    newBody.nicLink = nicLinkResult.secure_url;
  }

  const user = new User(newBody);

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
