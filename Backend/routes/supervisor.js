const express = require("express");
const { Supervisor, validate } = require("./path-to-model");
const router = express.Router();

// Create a new supervisor
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const supervisor = new Supervisor(req.body);
    await supervisor.save();
    res.status(201).send(supervisor);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

// Get all supervisors
router.get("/", async (req, res) => {
  try {
    const supervisors = await Supervisor.find();
    res.status(200).send(supervisors);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

// Get a supervisor by ID
router.get("/:id", async (req, res) => {
  try {
    const supervisor = await Supervisor.findById(req.params.id);
    if (!supervisor) return res.status(404).send("Supervisor not found");
    res.status(200).send(supervisor);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

// Update a supervisor
router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const supervisor = await Supervisor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!supervisor) return res.status(404).send("Supervisor not found");
    res.status(200).send(supervisor);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

// Delete a supervisor
router.delete("/:id", async (req, res) => {
  try {
    const supervisor = await Supervisor.findByIdAndDelete(req.params.id);
    if (!supervisor) return res.status(404).send("Supervisor not found");
    res.status(200).send(supervisor);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
