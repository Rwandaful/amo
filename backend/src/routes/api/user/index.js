const { UserController } = require("../../../Controllers");

const router = require("express").Router();
router.post("/", UserController.createUser);
router.get("/", UserController.getUsers);
router.update("/:id", UserController.updateUser);
router.post("/:id/deductUserAmount", UserController.deductUserAmount);
router.delete("/:id", UserController.deleteUser);
module.exports = router;
