const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

//http://localhost:6030/account
router.get('/login', accountController.loadLoginPage);
router.get('/register', accountController.loadRegisterPage);
router.get('/verify', accountController.loadVerifyPage);

router.post('/registerAction', accountController.registerAction);

module.exports = router;