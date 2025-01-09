const express = require("express");
const { Scheme, validate } = require("../models/scheme"); // Adjust the path if needed
const Joi = require("joi");
const { default: mongoose } = require("mongoose");
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

// Get supervisors of a scheme
router.get("/:id/supervisors", async (req, res) => {
  const schemeId = req.params.id;

  // Validate the scheme ID
  if (!mongoose.Types.ObjectId.isValid(schemeId)) {
    return res.status(400).send("Invalid scheme ID.");
  }

  try {
    // Find the scheme and populate the supervisors
    const scheme = await Scheme.findById(schemeId).populate(
      "supervisors.supervisor", // Populate the 'supervisor' field
      "name email" // Select specific fields from the Supervisor model (adjust as needed)
    );

    if (!scheme) {
      return res.status(404).send("Scheme not found.");
    }

    // Return the supervisors
    res.send(scheme.supervisors);
  } catch (err) {
    res.status(500).send("An error occurred while retrieving supervisors.");
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

// Update supervisors in a scheme
router.put("/:id/supervisors", async (req, res) => {
  // Validate input
  const schema = Joi.object({
    supervisors: Joi.array()
      .items(
        Joi.object({
          supervisor: Joi.string().required(),
          allocation: Joi.string().required(),
        })
      )
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if the scheme exists
  const schemeId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(schemeId)) {
    return res.status(400).send("Invalid scheme ID.");
  }

  let scheme = await Scheme.findById(schemeId);
  if (!scheme) return res.status(404).send("Scheme not found.");

  // Update supervisors
  scheme.supervisors = req.body.supervisors;

  try {
    scheme = await scheme.save();
    res.send(scheme);
  } catch (err) {
    res.status(500).send("An error occurred while updating the scheme.");
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
