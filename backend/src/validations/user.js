const joi = require('joi');
const user = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});
const deposit = joi.object({
  amount: joi.string().min(0).required(),
});
module.exports = { user, deposit };

