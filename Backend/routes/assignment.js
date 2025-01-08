const express = require("express");
const router = express.Router();
const { Assignment, validate } = require("../models/assignment"); // Adjust the path if needed

// Get all assignments
router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.send(assignments);
  } catch (err) {
    res.status(500).send("Error retrieving assignments: " + err.message);
  }
});

// Get a single assignment by ID
router.get("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).send("Assignment not found.");
    res.send(assignment);
  } catch (err) {
    res.status(500).send("Error retrieving the assignment: " + err.message);
  }
});

// Create a new assignment
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const assignment = new Assignment({
    managerName: req.body.managerName,
    internshipPeriod: req.body.internshipPeriod,
    internshipStart: req.body.internshipStart,
    forRequest: req.body.forRequest,
  });

  try {
    const result = await assignment.save();
    res.send(result);
  } catch (err) {
    res.status(500).send("Error saving the assignment: " + err.message);
  }
});

// Update an assignment by ID
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const assignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      {
        managerName: req.body.managerName,
        internshipPeriod: req.body.internshipPeriod,
        internshipStart: req.body.internshipStart,
        forRequest: req.body.forRequest,
      },
      { new: true }
    );

    if (!assignment) return res.status(404).send("Assignment not found.");
    res.send(assignment);
  } catch (err) {
    res.status(500).send("Error updating the assignment: " + err.message);
  }
});

// Delete an assignment by ID
router.delete("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndRemove(req.params.id);
    if (!assignment) return res.status(404).send("Assignment not found.");
    res.send(assignment);
  } catch (err) {
    res.status(500).send("Error deleting the assignment: " + err.message);
  }
});

module.exports = router;
