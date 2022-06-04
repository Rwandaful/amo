const { ClientController } = require('../../../../Controllers');
const joiValidator = require('../../../../middlewares/joiValidator');
const { client } = require('../../../../validations/client');

const router = require('express').Router();
/**
 * @openapi
 * components:
 *  schemas:
 *      client:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              college:
 *                  type: string
 *              email:
 *                  type: string
 *              phone:
 *                  type: string
 *              department:
 *                  type: string
 *              hostelBlock:
 *                  type: string
 *              hostelName:
 *                  type: string
 *              profilePicture:
 *                  type: string
 *                  format: binary
 *          example:
 *              name: john doe
 *              college: ICT
 *              email: johndoe@test.com
 *              phone: 0788888888
 *              department: computer engineering
 *              hostelName: miseleore
 *              hostelBlock: One
 *              hostelRoom: M008
 *
 *
 *
 * /clients:
 *  post:
 *      description: allows to create a client
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: "#/components/schemas/client"
 *      responses:
 *          '201':
 *              description: The resources created
 */
router.post('/', joiValidator(client), ClientController.createClient);
module.exports = router;

