const Joi = require("joi");
const { default: mongoose } = require("mongoose");

const interviewSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    schema: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: Boolean,       //pass of fail

    }
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
        status: Joi.boolean(),
    });

    return schema.validate(interview);
}

module.exports.Interview = Interview;
module.exports.validate = validateInterview;