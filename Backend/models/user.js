const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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
  dateOfBirst: {
    type: Date,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  LandPhoneNo: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  ApplyAs: {
    type: String,
    required: true,
  },
  olResults: {
    type: [String],
  },
  categoryOfApply: {
    type: String,
    required: true,
  },
  HigherEducation: {
    type: String,
    required: true,
  },
  OtherEducation: {
    type: String,
    required: true,
  },

  alResults: {
    type: [String],
    required: true,
  },

  emergency: {
    type: {
      contactName1: {
        type: String,
        required: true,
      },
      contactName2: {
        type: String,
        required: true,
      },
      contactNumber1: {
        type: String,
        required: true,
      },
      contactNumber2: {
        type: String,
        required: true,
      },
    },
  },
  previouseTrainingSlt: {
    type: Boolean,
    required: true,
  },
  document: {
    type: {
      cvLink: {
        type: String,
      },
      nicLink: {
        type: String,
      },
      policeCertificateLink: {
        type: String,
      },
      InternshipRequestLetterLink: {
        type: String,
      },
    },
  },
  referedBy: {
    type: String,
  },
  cvApprovel: {
    type: Boolean,
  },
  trueAndCorrect: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    fullName: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    nameWithInitials: Joi.string().required(),
    postalAddress: Joi.string().required(),
    district: Joi.string().required(),
    nic: Joi.string()
      .length(10)
      .regex(/^[0-9]{9}[vV]$/)
      .required(),
    dateOfBirst: Joi.date().required(),
    mobileNo: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/)
      .required(),
    LandPhoneNo: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/)
      .required(),
    email: Joi.string().email().required(),
    institute: Joi.string().required(),
    ApplyAs: Joi.string().required(),
    olResults: Joi.array().items(Joi.string()),
    categoryOfApply: Joi.string().required(),
    HigherEducation: Joi.string().required(),
    OtherEducation: Joi.string().required(),
    alResults: Joi.array().items(Joi.string()).required(),
    emergency: Joi.object({
      contactName1: Joi.string().required(),
      contactName2: Joi.string().required(),
      contactNumber1: Joi.string()
        .length(10)
        .regex(/^[0-9]+$/)
        .required(),
      contactNumber2: Joi.string()
        .length(10)
        .regex(/^[0-9]+$/)
        .required(),
    }).required(),
    previouseTrainingSlt: Joi.boolean().required(),
    document: Joi.object({
      cvLink: Joi.string().uri(),
      nicLink: Joi.string().uri(),
      policeCertificateLink: Joi.string().uri(),
      InternshipRequestLetterLink: Joi.string().uri(),
    }),
    referedBy: Joi.string(),
    cvApprovel: Joi.boolean(),
    trueAndCorrect: Joi.boolean(),
  });

  const result = schema.validate(user);

  return result;
}

exports.User = User;
exports.validate = validateUser;
