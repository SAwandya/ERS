const express = require("express");
const { Assignment, validate } = require("../models/assignment"); // Adjust path as necessary
const { model } = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("manager", "name") // Replace "name" with actual fields in the supervisor schema
      .populate("user", "username email") // Replace with actual fields in the User schema
      .populate("interview", "date time"); // Replace with actual fields in the Interview schema

    res.status(200).send(assignments);
  } catch (error) {
    res.status(500).send({ error: "Error fetching assignments" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id)
      .populate("manager", "name")
      .populate("user", "username email")
      .populate("interview", "date time");

    if (!assignment) return res.status(404).send("Assignment not found");

    res.status(200).send(assignment);
  } catch (error) {
    res.status(500).send({ error: "Error fetching assignment" });
  }
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const assignment = new Assignment({
      manager: req.body.manager,
      internshipPeriod: req.body.internshipPeriod,
      internshipStart: req.body.internshipStart,
      forRequest: req.body.forRequest,
      user: req.body.user,
      interview: req.body.interview,
    });

    await assignment.save();
    res.status(201).send(assignment);
  } catch (error) {
    res.status(500).send({ error: "Error creating assignment" });
  }
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  try {
    const assignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      {
        manager: req.body.manager,
        internshipPeriod: req.body.internshipPeriod,
        internshipStart: req.body.internshipStart,
        forRequest: req.body.forRequest,
        user: req.body.user,
        interview: req.body.interview,
      },
      { new: true }
    );

    if (!assignment) return res.status(404).send("Assignment not found");

    res.status(200).send(assignment);
  } catch (error) {
    res.status(500).send({ error: "Error updating assignment" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);

    if (!assignment) return res.status(404).send("Assignment not found");

    res.status(200).send({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error deleting assignment" });
  }
});

module.exports = router;