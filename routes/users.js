var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('I will have so many awsome teas...');
});

module.exports = router;
