const { ClientController } = require('../../../../controllers');
const { joiValidator } = require('../../../../middlewares');
const { multerUploader } = require('../../../../utils/imageUploader');
const { clientValidationSchema } = require('../../../../validations/client');
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
 *                  default: John Doe
 *              college:
 *                  type: string
 *                  default: CST
 *              email:
 *                  type: string
 *                  default: john@gmail.com
 *              phone:
 *                  type: string
 *                  default: 0788400400
 *              department:
 *                  type: string
 *                  default: Computer engineering
 *              hostelBlock:
 *                  type: string
 *                  default: Block1
 *              hostelName:
 *                  type: string
 *                  default: Miseleore
 *              hostelRoom:
 *                  type: string
 *                  default: M08
 *              regno:
 *                  type: string
 *                  default: 221000001
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
 *      tags:
 *        - clients
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: "#/components/schemas/client"
 *      responses:
 *          '201':
 *              description: The resources created
 *          '400':
 *              description: The user has made some errors
 *          '501':
 *              description: The server have encounted an error
 *  get:
 *     description: get all the clients
 *     tags:
 *        - clients
 *     responses:
 *      '200':
 *        description: The resources found
 */
router.post(
  '/',
  multerUploader.single('profilePicture'),
  joiValidator(clientValidationSchema),
  ClientController.createClient
);

/**
 * @openapi
 * /clients/{clientId}:
 *  put:
 *      description: allows to create a client
 *      tags:
 *        - clients
 *      parameters:
 *          - in: path
 *            name: clientId
 *            schema:
 *              type: string
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: "#/components/schemas/client"
 *      responses:
 *          '201':
 *              description: The resources created
 *          '400':
 *              description: The user has made some errors
 *          '501':
 *              description: The server have encounted an error
 *  get:
 *      description: get the client by id
 *      tags:
 *        - clients
 *      parameters:
 *          - in: path
 *            name: clientId
 *            schema:
 *              type: string
 *      responses:
 *          '201':
 *              description: The resources created
 *          '400':
 *              description: The user has made some errors
 *          '501':
 *              description: The server have encounted an error
 *  delete:
 *      description: delete the client by id
 *      tags:
 *        - clients
 *      parameters:
 *          - in: path
 *            name: clientId
 *            schema:
 *              type: string
 *      responses:
 *          '201':
 *              description: The resources created
 *          '400':
 *              description: The user has made some errors
 *          '501':
 *              description: The server have encounted an error
 */
router.put(
  '/:clientId',
  multerUploader.single('profilePicture'),
  joiValidator(clientValidationSchema),
  ClientController.updateClient
);
router.get('/', ClientController.getAllClients);
router.get('/:clientId', ClientController.getClientById);
router.use('/:clientId/account', require('./account'));
router.delete('/:clientId', ClientController.deleteClient);
module.exports = router;

