var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Animal = mongoose.model('animals');

//get all animals
router.get('/animals', function(req, res, next) {
  Animal.find(function(err, animals){
    res.json(animals);
  });
});

//get single animal
router.get('/animal/:id', function(req, res, next) {
  var query = {'_id': req.params.id};
  Animal.findOne(query, function(err, animal){
    res.json(animal);
  });
});


//post all animals
router.post('/animals', function(req, res, next) {
  new Animal(req.body)
  .save(function(err, animal){
    console.log(animal);
    res.json({animal: animal, message: 'Animal Added!!'});
  });
});

//put single animal
router.put('/animal/edit/:id', function(req, res, next) {
  console.log(req.body);
  var query = {'_id': req.params.id};
  var update = req.body;
  var options = {new:true};
  Animal.findOneAndUpdate(query, update, options, function(err , animal){
    res.json(animal);
  });
});

//delete single animal
router.delete('/animal/:id', function(req, res, next) {
res.render('index', { title: 'Animals' });
});

module.exports = router;
