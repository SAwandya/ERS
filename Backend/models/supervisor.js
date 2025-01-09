const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const supervisorSchema = new mongoose.Schema({
  supId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Supervisor = mongoose.model("Supervisor", supervisorSchema);

function validateSupervisor(supervisor) {
  const schema = Joi.object({
    supId: Joi.string().required(),
    name: Joi.string().required(),
    email: Joi.string().required(),
  });

  return schema.validate(supervisor);
}

module.exports.Supervisor = Supervisor;
module.exports.validate = validateSupervisor;
