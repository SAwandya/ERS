const express = require("express");
const { Interview, validate } = require("../models/interview"); // Assuming interview model is in a "models" folder
const router = express.Router();

// Create a new interview
router.post("/", async (req, res) => {
  // Validate the input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Create and save the interview
  const interview = new Interview(req.body);
  try {
    await interview.save();
    res.send(interview);
  } catch (err) {
    res.status(500).send("Error creating interview.");
  }
});

// Get all interviews
router.get("/", async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.send(interviews);
  } catch (err) {
    res.status(500).send("Error fetching interviews.");
  }
});

// Get an interview by ID
router.get("/:id", async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) return res.status(404).send("Interview not found.");
    res.send(interview);
  } catch (err) {
    res.status(500).send("Error fetching interview.");
  }
});

// Update an interview by ID
router.put("/:id", async (req, res) => {
  // Validate the input
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const interview = await Interview.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!interview) return res.status(404).send("Interview not found.");
    res.send(interview);
  } catch (err) {
    res.status(500).send("Error updating interview.");
  }
});

// Delete an interview by ID
router.delete("/:id", async (req, res) => {
  try {
    const interview = await Interview.findByIdAndDelete(req.params.id);
    if (!interview) return res.status(404).send("Interview not found.");
    res.send("Interview deleted successfully.");
  } catch (err) {
    res.status(500).send("Error deleting interview.");
  }
});

module.exports = router;
