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
  gender: {
    type: String,
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
  LandPhoneNo: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
  },
  ApplyAs: {
    type: String,
  },
  olsubject1: {
    type: String,
  },
  olsubject2: {
    type: String,
  },
  olsubject3: {
    type: String,
  },
  olsubject4: {
    type: String,
  },
  olsubject5: {
    type: String,
  },
  olsubject6: {
    type: String,
  },
  olsubject7: {
    type: String,
  },
  olsubject8: {
    type: String,
  },
  olsubject9: {
    type: String,
  },
  generalInfo: {
    type: String,
  },
  location: {
    type: String,
  },
  categoryOfApply: {
    type: String,
  },
  HigherEducation: {
    type: String,
  },
  OtherEducation: {
    type: String,
  },
  otherQualification: {
    type: String,
  },

  alsubject1: {
    type: String,
  },
  alsubject2: {
    type: String,
  },
  alsubject3: {
    type: String,
  },
  alsubject4: {
    type: String,
  },

  contactName1: {
    type: String,
  },
  contactName2: {
    type: String,
  },
  contactNumber1: {
    type: String,
  },
  contactNumber2: {
    type: String,
  },

  previouseTrainingSlt: {
    type: Boolean,
  },

  cvLink: {
    type: String,
  },
  policeCertificateLink: {
    type: String,
  },
  InternshipRequestLetterLink: {
    type: String,
  },

  referedBy: {
    type: String,
  },
  cvApprovel: {
    type: Boolean,
    default: false,
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
    username: Joi.string().min(3),
    gender: Joi.string(),
    fullName: Joi.string().min(3),
    password: Joi.string().min(6),
    nameWithInitials: Joi.string(),
    location: Joi.string(),
    postalAddress: Joi.string(),
    district: Joi.string(),
    nic: Joi.string().regex(/^[0-9]{9}[vVxX]|[0-9]{12}$/),
    dateOfBirth: Joi.date(),
    mobileNo: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
    LandPhoneNo: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
    email: Joi.string().email(),
    institute: Joi.string(),
    ApplyAs: Joi.string(),
    olsubject1: Joi.string(),
    olsubject2: Joi.string(),
    olsubject3: Joi.string(),
    olsubject4: Joi.string(),
    olsubject5: Joi.string(),
    olsubject6: Joi.string(),
    olsubject7: Joi.string(),
    olsubject8: Joi.string(),
    olsubject9: Joi.string(),
    alsubject1: Joi.string(),
    alsubject2: Joi.string(),
    alsubject3: Joi.string(),
    alsubject4: Joi.string(),
    generalInfo: Joi.string(),
    otherQualification: Joi.string(),
    categoryOfApply: Joi.string(),
    HigherEducation: Joi.string(),
    OtherEducation: Joi.string(),
    alResults: Joi.array().items(Joi.string()),
    contactName1: Joi.string(),
    contactName2: Joi.string(),
    contactNumber1: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
    contactNumber2: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
    previouseTrainingSlt: Joi.boolean(),
    cvLink: Joi.string(),
    nicLink: Joi.string(),
    policeCertificateLink: Joi.string(),
    InternshipRequestLetterLink: Joi.string(),
    referedBy: Joi.string(),
    cvApprovel: Joi.boolean(),
    trueAndCorrect: Joi.boolean(),
    role: Joi.string(),
  });

  const result = schema.validate(user);

  return result;
}

exports.User = User;
exports.validate = validateUser;
