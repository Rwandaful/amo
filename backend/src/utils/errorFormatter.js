const { JsonWebTokenError } = require('jsonwebtoken');
const { responseMessages } = require('../constants');
const Logger = require('./Logger');
/**
 *
 * @param {*} error
 * @
 */
const errorFormatter = (error) => {
  Logger;
  if (error.constructor) {
    const { stack } = error;
    switch (error.constructor) {
      case ReferenceError:
      case TypeError:
      case SyntaxError:
        return {
          status: 500,
          message: responseMessages['INTERNAL_SERVER_ERROR'],
          error: {
            stack,
          },
        };
      default:
        if (error instanceof JsonWebTokenError) {
          return {
            status: 401,
            message: TOKEN_ERROR,
            error: {
              stack,
            },
          };
        }
        return {
          status: 500,
          message: error.name,
          error: {
            stack,
          },
        };
    }
  } else {
    return {
      status: 501,
      message: 'Not implemented',
      stack: {
        error: 'You designed the systems so check this error',
        stack: error?.stack,
      },
    };
  }
};
module.exports = errorFormatter;

