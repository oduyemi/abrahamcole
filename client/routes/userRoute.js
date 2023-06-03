const express = require("express");
router = express.Router();
userRoute = require("../../server/controllers/userControllers");

router.get("/", userRoute.userController);

module.exports = router;