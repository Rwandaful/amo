const { PricingController } = require('../../../../controllers');
const joiValidator = require('../../../../middlewares/joiValidator');
const { pricingSchema } = require('../../../../validations/pricing');

const router = require('express').Router();
/**
 * @openapi
 * components:
 *  schemas:
 *      pricing:
 *        type: object
 *        properties:
 *          name:
 *           type: string
 *          about:
 *           type: string
 *          price:
 *           type: integer
 *
 */

/**
 * @openapi
 * /pricings:
 *  post:
 *     description: allows to create a pricing
 *     tags:
 *      - pricings
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  $ref: "#/components/schemas/pricing"
 *     responses:
 *      '201':
 *          description: The resources created
 *      '400':
 *          description: The user has made some errors
 *  get:
 *      description: allows to get all pricings
 *      tags:
 *          - pricings
 *      responses:
 *          '200':
 *              description: The resources retrieved
 *          '400':
 *              description: The user has made some errors
 *          '500':
 *              description: The server has made some errors
 *
 */

router.post('/', joiValidator(pricingSchema), PricingController.createPricing);
router.get('/', PricingController.getPricing);
/**
 * @openapi
 *
 * /pricings/{pricingId}:
 *  put:
 *      description: allows to update a pricing
 *      tags:
 *          - pricings
 *      parameters:
 *          -   in: path
 *              name: pricingId
 *              schema:
 *                  type: string
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/pricing"
 *      responses:
 *          '200':
 *              description: The resources updated
 *          '400':
 *              description: The user has made some errors
 *          '500':
 *              description: The server have encounted an error
 *          '404':
 *              description: The resources not found
 *  delete:
 *      description: allows to delete a pricing
 *      tags:
 *          - pricings
 *      parameters:
 *          -   in: path
 *              name: pricingId
 *              schema:
 *                  type: string
 *      responses:
 *          '200':
 *              description: The resources deleted
 *          '400':
 *              description: The user has made some errors
 *          '500':
 *              description: The server have encounted an error
 */
router.put(
  '/:pricingId',
  joiValidator(pricingSchema),
  PricingController.updatePricing
);
router.delete('/:pricingId', PricingController.deletePricing);
module.exports = router;

