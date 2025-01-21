const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const interviewSheduleSchema = new mongoose.Schema({
  interview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Interview",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: Boolean, //pass or fail
  },
});

const InterviewShedule = mongoose.model(
  "InterviewShedule",
  interviewSheduleSchema
);

function validateInterviewShedule(interviewShedule) {
  const schema = Joi.object({
    interview: Joi.string().required(),
    user: Joi.array().items(Joi.string()),
    status: Joi.boolean(),
  });

  return schema.validate(interviewShedule);
}

module.exports.InterviewShedule = InterviewShedule;
module.exports.validate = validateInterviewShedule;
