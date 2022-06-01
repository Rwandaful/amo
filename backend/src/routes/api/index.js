const router = require("express").Router();
const { VERSION } = require("../../config");

router.get("/", (request, response) => {
  response.status(200).json({
    message: `API ${VERSION}, languages=[kiny, en]`,
  });
});
router.use("/users", require("./user"));
module.exports = router;
