var express = require('express');
var router = express.Router();
const apiMoviesController = require('../../controller/api/apiMoviesController');

router.get('/', apiMoviesController.listar);
  
module.exports = router;