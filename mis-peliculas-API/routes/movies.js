var express = require('express');
var router = express.Router();

const moviesController = require('../controller/moviesController');

router.get('/', moviesController.listar);
  
module.exports = router;