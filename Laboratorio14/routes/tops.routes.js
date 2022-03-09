const express = require('express');
const router = express.Router();

const userController = require('../controllers/tops_controllers');


router.get('/tops', userController.tops);

module.exports = router;