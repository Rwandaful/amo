const router = require('express').Router();
const { VERSION } = require('../../../config');
const userRoutes = require('./user');
const clientRoutes = require('./client');
const client = require('../../../database/models/client');
/**
 * @openapi
 *  /:
 *    get:
 *      description: the base docs
 *      responses:
 *        '200':
 *          description: Ok
 */
router.get('/', (request, response) => {
  response.status(200).json({
    message: `API ${VERSION}, languages=[kiny, en]`,
  });
});
router.use('/users', userRoutes);
router.use('/clients', clientRoutes);
module.exports = router;

