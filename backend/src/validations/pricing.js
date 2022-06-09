const Joi = require('joi');
const pricingSchema = Joi.object({
  name: Joi.string().required(),
  about: Joi.string().required(),
  price: Joi.number().required(),
});
module.exports = { pricingSchema };

