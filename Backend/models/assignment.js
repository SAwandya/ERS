const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "supervisor",
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Interview",
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

function validateAssignment(assignment) {
  const schema = Joi.object({
    supervisor: Joi.string().required(),
    internshipPeriod: Joi.string().required(),
    internshipStart: Joi.string().required(),
    forRequest: Joi.boolean(),
    user: Joi.string(),
    interview: Joi.string(),
  });

  return schema.validate(assignment);
}

module.exports.Assignment = Assignment;
module.exports.validate = validateAssignment;
