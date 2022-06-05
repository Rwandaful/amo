const { UserController } = require('../../../../controllers');

const router = require('express').Router();
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
module.exports = router;

