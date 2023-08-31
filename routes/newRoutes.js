const express = require('express');
const router = express.Router();

const controller = require('../controllers/newController');

router
    .route('/')
    .get(controller.getRoute);

module.exports = router;