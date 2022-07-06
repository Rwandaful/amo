const { ClientController } = require('../../../../../controllers');

const router = require('express').Router();
/**
 * @openapi
 * components:
 *  schemas:
 *      deposit:
 *          type: object
 *          properties:
 *              amount:
 *              type: number
 *          description:
 *              type: string
 * */
/**
 * @openapi
 * clients/{clientId}/account:
 *   get:
 *     description: Get the user account details
 *       tags:
 *         - clients, account balances
 *       parameters:
 *         - in: path
 *           name: clientId
 *       responses:
 *              200:
 *                description: the account has been successful fetched
 */
router.get('/', ClientController.getClientById);
/**
 * @openapi
 * components:
 *  schemas:
 *      deposit:
 *      type: object
 *      properties:
 *          amount:
 *              type: number
 *          description:
 *              type: string
 * /clients/{clientId}/account/deposit:
 *      post:
 *          description: allows to deposit to client account
 *          tags:
 *              - clients, account balances
 */
router.post('/deposit', ClientController.depositToBalance);
module.exports = router;

