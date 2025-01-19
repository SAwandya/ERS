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
  shedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InterviewShedule",
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

function validateAssignment(assignment) {
  const schema = Joi.object({
    supervisor: Joi.string().required(),
    internshipPeriod: Joi.string().required(),
    internshipStart: Joi.string().required(),
    forRequest: Joi.boolean().required(),
    shedule: Joi.string(),
  });

  return schema.validate(assignment);
}

module.exports.Assignment = Assignment;
module.exports.validate = validateAssignment;
