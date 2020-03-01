var express = require('express');
var router = express.Router();
var math = require('./math');
var logger = require('../logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Application!' });
});

router.get('/DevOps', function(req, res, next) {
  res.render('DevOps', { title: 'What is DevOps?' });
});
// api add n1 & n2
router.get('/api/add', function(req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  logger.info('/api/add Used to add ' + n1 + ' and ' + n2);
  res.json(math.add(n1,n2));

});

module.exports = router;
