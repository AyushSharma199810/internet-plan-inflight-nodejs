const express = require('express');
const router = express.Router();
const activationController = require('../controllers/activationController');

router.post('/activate', activationController.activatePlan);

module.exports = router;
