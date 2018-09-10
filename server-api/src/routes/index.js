var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.end('Running ServerApi Succesfully');
});

router.use('/user', require('./user-route'));

module.exports = router;