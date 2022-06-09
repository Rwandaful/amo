const { ClientController } = require('../../../../controllers');
const joiValidator = require('../../../../middlewares/joiValidator');
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
 *              hostelRoom:
 *                  type: string
 *              regno:
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
router.use('/clientId/account', require('./account'));
router.delete('/:clientId', ClientController.deleteClient);
module.exports = router;

