const { responseMessages } = require('../constants');
const joiValidator =
  (schema, validatePath = 'body') =>
  async (request, response, next) => {
    try {
      const { value, error } = await schema.validate(request[validatePath], {
        abortEarly: false,
      });
      if (error)
        return response.status(400).json({
          errors: error.details.map((err) => ({
            message: err.message,
            path: err.path,
          })),
        });
      request[path] = value;
      return next();
    } catch (error) {
      response.status(500).json({
        message: responseMessages['INTERNAL_SERVER_ERROR'][request.language],
      });
    }
  };

module.exports = joiValidator;

