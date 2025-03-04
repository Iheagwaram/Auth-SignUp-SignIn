const { signInController, signUpController } = require("../../controllers/auth/auth");
const express = require("express");
const router = express.Router();

router.post("/signup", signUpController)
router.post("/signin", signInController)

module.exports = router;