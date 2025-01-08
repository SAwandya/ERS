const express = require("express");
const { InterviewShedule, validate } = require("../models/interviewShedule");
const { Interview } = require("../models/interview"); // Assuming there's an Interview model
const { User } = require("../models/user"); // Assuming there's a User model
const { default: mongoose } = require("mongoose");
const router = express.Router();

// Create schedules for an array of user IDs
router.post("/", async (req, res) => {
  const { interview, userIds, status } = req.body;

  // Validate input
  if (!interview || !Array.isArray(userIds) || userIds.length === 0) {
    return res
      .status(400)
      .send("Invalid input. Provide an interview ID and an array of user IDs.");
  }

  const invalidIds = userIds.filter(
    (id) => !mongoose.Types.ObjectId.isValid(id)
  );
  if (invalidIds.length > 0) {
    return res.status(400).send(`Invalid user IDs: ${invalidIds.join(", ")}`);
  }

  try {
    // Check if the interview exists
    const interviewExists = await Interview.findById(interview);
    if (!interviewExists) {
      return res.status(404).send("Interview not found.");
    }

    // Check if all user IDs exist
    const users = await User.find({ _id: { $in: userIds } });
    if (users.length !== userIds.length) {
      const foundUserIds = users.map((user) => user._id.toString());
      const missingIds = userIds.filter((id) => !foundUserIds.includes(id));
      return res.status(404).send(`Users not found: ${missingIds.join(", ")}`);
    }

    // Create schedules
    const schedules = userIds.map((userId) => ({
      interview,
      user: userId,
      status: status || false,
    }));

    const createdSchedules = await InterviewShedule.insertMany(schedules);
    res.status(201).send(createdSchedules);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

// Get all schedules
router.get("/", async (req, res) => {
  try {
    const schedules = await InterviewShedule.find()
      .populate("interview", "name date") // Adjust fields to populate
      .populate("user", "name email"); // Adjust fields to populate
    res.send(schedules);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

// Get schedule by ID
router.get("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid schedule ID.");
  }

  try {
    const schedule = await InterviewShedule.findById(req.params.id)
      .populate("interview", "name date")
      .populate("user", "name email");
    if (!schedule) return res.status(404).send("Schedule not found.");
    res.send(schedule);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

router.get("/interview/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid interview ID.");
  }

  try {
    const schedules = await InterviewShedule.find({ interview: req.params.id })
      .populate("interview")
      .populate("user");
    res.send(schedules);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

router.put("/status", async (req, res) => {
  const { scheduleIdList, status } = req.body;

  if (!Array.isArray(scheduleIdList) || scheduleIdList.length === 0) {
    return res
      .status(400)
      .send("Invalid input. Provide an array of schedule IDs.");
  }

  const invalidIds = scheduleIdList.filter(
    (id) => !mongoose.Types.ObjectId.isValid(id)
  );
  if (invalidIds.length > 0) {
    return res
      .status(400)
      .send(`Invalid schedule IDs: ${invalidIds.join(", ")}`);
  }

  try {
    const updatedSchedules = await InterviewShedule.updateMany(
      { _id: { $in: scheduleIdList } },
      { status }
    );
    res.send(updatedSchedules);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

// Update schedule by ID
router.put("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid schedule ID.");
  }

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const schedule = await InterviewShedule.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!schedule) return res.status(404).send("Schedule not found.");
    res.send(schedule);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

// Delete schedule by ID
router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid schedule ID.");
  }

  try {
    const schedule = await InterviewShedule.findByIdAndRemove(req.params.id);
    if (!schedule) return res.status(404).send("Schedule not found.");
    res.send(schedule);
  } catch (err) {
    res.status(500).send("An error occurred: " + err.message);
  }
});

module.exports = router;
