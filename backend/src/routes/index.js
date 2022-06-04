const express = require('express');
const { VERSION } = require('../config');
const { languageMiddleware } = require('../middlewares');
const { responseMessages } = require('../utils/constants');
const router = express.Router();
router.get('/api', (request, response) => {
  return response.status(200).json({
    message: `Amo API ${VERSION}, languages=[kiny, en]`,
  });
});
const apiVersion = VERSION.split('.')[0];
router.use(
  `/api/v${apiVersion}`,
  languageMiddleware,
  require('./api/v' + apiVersion)
);
router.use('*', languageMiddleware, (request, response) => {
  console.log(responseMessages.NOT_FOUND, request.language);
  response.status(404).json({
    message: responseMessages['NOT_FOUND'][request.language],
  });
});
module.exports = router;

