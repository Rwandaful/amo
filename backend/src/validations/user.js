const joi = require("joi");
const user = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});
module.exports = user;
