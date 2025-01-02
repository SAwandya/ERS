const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  allocation: {
    type: Date,
    required: true,
  },
  onRequest: {
    type: Boolean,
    required: true,
  },
  recurring: {
    type: Boolean,
    required: true,
  },
  rotational: {
    type: Boolean,
    required: true,
  },
  perHeadAllowance: {
    type: {
      allowance: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
        default: "LKR",
      },
    },
  },
  minimumQualification: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Interview = mongoose.model("Interview", interviewSchema);

function validateInterview(interview) {
  const schema = Joi.object({
    label: Joi.string().required(),
    date: Joi.date().required(),
    time: Joi.string().required(),
    schema: Joi.string().required(),
    location: Joi.string().required(),
    notes: Joi.string(),
    user: Joi.objectId(),
  });

  return schema.validate(interview);
}

module.exports.Interview = Interview;
module.exports.validate = validateInterview;
