const express = require("express");
const { Assignment, validate } = require("../models/assignment"); // Adjust the path as needed
const Joi = require("joi");
const router = express.Router();

// POST route to create assignments for an array of schedule IDs
router.post("/", async (req, res) => {
  const { error } = Joi.object({
    supervisor: Joi.string().required(),
    internshipPeriod: Joi.string().required(),
    internshipStart: Joi.string().required(),
    forRequest: Joi.boolean().required(),
    shedules: Joi.array().items(Joi.string().required()).required(),
  }).validate(req.body);

  if (error) return res.status(400).send({ error: error.details[0].message });

  const {
    supervisor,
    internshipPeriod,
    internshipStart,
    forRequest,
    shedules,
  } = req.body;

  try {
    // Create assignments for each schedule ID
    const assignments = await Promise.all(
      shedules.map(async (shedule) => {
        const assignment = new Assignment({
          supervisor,
          internshipPeriod,
          internshipStart,
          forRequest,
          shedule,
        });
        return await assignment.save();
      })
    );

    res.status(201).send(assignments);
  } catch (err) {
    res.status(500).send({ error: "Error creating assignments" });
  }
});

module.exports = router;
