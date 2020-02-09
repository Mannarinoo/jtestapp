var express = require('express');
var router = express.Router();
var math = require('./math');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevOps Application!' });
});

router.get('/DevOps', function(req, res, next) {
  res.render('DevOps', { title: 'What is DevOps?' });
});

router.get('/api/add', function(req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(req.query.n2);
  res.json(math.add(n1,n2));

});

module.exports = router;
