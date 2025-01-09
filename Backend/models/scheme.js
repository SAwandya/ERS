const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  allocation: {
    type: Number,
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
  allowance: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: "LKR",
  },
  description: {
    type: String,
    required: true,
  },
  supervisors: [
    {
      supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "Supervisor" },
      allocation: { type: String, required: true },
    },
  ],
});

const Scheme = mongoose.model("Scheme", schemeSchema);

function validateScheme(scheme) {
  const schema = Joi.object({
    name: Joi.string().required(),
    allocation: Joi.number().required(),
    onRequest: Joi.boolean().required(),
    recurring: Joi.boolean().required(),
    rotational: Joi.boolean().required(),
    allowance: Joi.number().required(),
    currency: Joi.string().required(),
    description: Joi.string().required(),
    supervisors: Joi.array().items(
      Joi.object({
        supervisor: Joi.string().required(),
        allocation: Joi.number().required(),
      })
    ),
  });

  return schema.validate(scheme);
}

module.exports.Scheme = Scheme;
module.exports.validate = validateScheme;
