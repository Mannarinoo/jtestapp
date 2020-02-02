var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Application!' });
});

router.get('/DevOps', function(req, res, next) {
  res.render('DevOps', { title: 'What is DevOps?' });
});

module.exports = router;
