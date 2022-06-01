const Joi = require("joi");
const client = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string(),
  email: Joi.string(),
  college: Joi.string(),
  regno: Joi.string(),
  class: Joi.string(),
  hostelName: Joi.string(),
  hostelBlock: Joi.string(),
  hostelRoom: Joi.string(),
});
module.exports = { client };
