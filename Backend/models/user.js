const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },

  fullName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
  },
  nameWithInitials: {
    type: String,
    required: true,
  },
  postalAddress: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  nic: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  trueAndCorrect: {
    type: Boolean,
  },

  role: {
    type: String,
    default: "individual",
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    password: Joi.string(),
    username: Joi.string(),
    fullName: Joi.string().required(),
    nameWithInitials: Joi.string().required(),
    postalAddress: Joi.string().required(),
    district: Joi.string().required(),
    nic: Joi.string().required(),
    dateOfBirth: Joi.date().required(),
    mobileNo: Joi.string().required(),
    email: Joi.string().required(),
    trueAndCorrect: Joi.boolean(),
    role: Joi.string(),
  });

  const result = schema.validate(user);

  return result;
}

exports.User = User;
exports.validate = validateUser;
