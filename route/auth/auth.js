const { signInController, signUpController } = require("../../controllers/auth/auth");
const express = require("express");
const router = express.Router();

router.post("/sign_up", signUpController)
router.post("/sign_in", signInController)

module.exports = router;