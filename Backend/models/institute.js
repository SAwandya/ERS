const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  contactPersonName: {
    type: String,
    required: true,
  },
  contactPersonNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactPersonEmail: {
    type: String,
    required: true,
  }
 
});

const Institute = mongoose.model("Institute", instituteSchema);

function validateInstitute(institute) {
  const schema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().required(),
    faculty: Joi.string().required(),
    contactPersonName: Joi.string().required(),
    contactPersonNumber: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    contactPersonEmail: Joi.string().required(),
  });

  return schema.validate(institute);
}

module.exports.Institute = Institute;
module.exports.validate = validateInstitute;
