var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json('this is the index.js route');
});

module.exports = router;
