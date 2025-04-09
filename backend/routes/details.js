const express = require('express');
const router = express.Router();
const detailsController = require('../controllers/detailsController');

router.get('/details', detailsController.getAllDetails);
router.get('/user/:userId', detailsController.getUserDetails);

module.exports = router;