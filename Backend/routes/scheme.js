const express = require("express");
const { Scheme, validate } = require("../models/scheme"); // Adjust the path if needed
const router = express.Router();

// Route: GET all schemes
router.get("/", async (req, res) => {
  try {
    const schemes = await Scheme.find().sort("name");
    res.send(schemes);
  } catch (err) {
    res.status(500).send("Error fetching schemes: " + err.message);
  }
});

// Route: GET a specific scheme by ID
router.get("/:id", async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);
    if (!scheme) return res.status(404).send("Scheme not found.");
    res.send(scheme);
  } catch (err) {
    res.status(500).send("Error fetching the scheme: " + err.message);
  }
});

// Route: POST a new scheme
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const scheme = new Scheme(req.body);
    await scheme.save();
    res.status(201).send(scheme);
  } catch (err) {
    res.status(500).send("Error creating the scheme: " + err.message);
  }
});

// Route: PUT (update) a scheme by ID
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const scheme = await Scheme.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!scheme) return res.status(404).send("Scheme not found.");
    res.send(scheme);
  } catch (err) {
    res.status(500).send("Error updating the scheme: " + err.message);
  }
});

// Route: DELETE a scheme by ID
router.delete("/:id", async (req, res) => {
  try {
    const scheme = await Scheme.findByIdAndRemove(req.params.id);
    if (!scheme) return res.status(404).send("Scheme not found.");
    res.send(scheme);
  } catch (err) {
    res.status(500).send("Error deleting the scheme: " + err.message);
  }
});

module.exports = router;
