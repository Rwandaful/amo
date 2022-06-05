const Joi = require('joi');
const clientValidationSchema = Joi.object({
  name: Joi.string().required().empty(null),
  phone: Joi.string().valid('').empty(null),
  email: Joi.string().valid('').empty(null),
  college: Joi.string().valid('').empty(null),
  regno: Joi.string().valid('').empty(null),
  department: Joi.string().valid('').empty(null),
  hostelName: Joi.string().valid('').empty(null),
  hostelBlock: Joi.string().valid('').empty(null),
  hostelRoom: Joi.string().valid('').empty(null),
});
module.exports = { clientValidationSchema };

