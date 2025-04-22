const express = require('express');
const router = express.Router();
const {listarCount} = require('../controllers/count_controler.js');

router.get('/', listarCount);

module.exports = router;