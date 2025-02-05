const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const cvSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  gender: {
    type: String,
  },
  LandPhoneNo: {
    type: String,
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
});

const Cv = mongoose.model("Cv", cvSchema);

function validateCv(cv) {
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
    gender: Joi.string(),
    location: Joi.string(),
    LandPhoneNo: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/),
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
  });

  const result = schema.validate(cv);

  return result;
}

exports.Cv = Cv;
exports.validate = validateCv;
