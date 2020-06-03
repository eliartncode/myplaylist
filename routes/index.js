const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
const isUserAuth = require('../utils/checkAuth');

router.get('/', isUserAuth, indexController.loadIndex);



module.exports = router;