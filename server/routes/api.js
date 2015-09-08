var express = require('express');
var router = express.Router();

//get all animals
router.get('/animals', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get single animal
router.get('/animal/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//post all animals
router.post('/animals', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//put single animal
router.put('/animal/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//delete single animal
router.delete('/animal/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
