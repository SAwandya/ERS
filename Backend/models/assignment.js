const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  managerName: {
    type: String,
    required: true,
  },
  internshipPeriod: {
    type: String,
    required: true,
  },
  internshipStart: {
    type: String,
    required: true,
  },
  forRequest: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

function validateAssignment(assignment) {
  const schema = Joi.object({
    managerName: Joi.string().required(),
    internshipPeriod: Joi.string().required(),
    internshipStart: Joi.string().required(),
    forRequest: Joi.boolean()
  });

  return schema.validate(assignment);
}

module.exports.Institute = Assignment;
module.exports.validate = validateAssignment;
