const { ClientController } = require('../../../../../controllers');

const router = require('express').Router();
router.get('/', ClientController.getClientById);
router.post('/deposit', ClientController.depositToBalance);
module.exports = router;

