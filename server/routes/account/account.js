const express = require('express');
const router = express.Router();
const account = require('../../controllers/account')

router.post('/login', account.loginController);
router.post('/forget-password', account.forgetPasswordController);
router.post('/create-account', account.createAccountController)

module.exports = router;