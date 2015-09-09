var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Animal = new Schema({
  name: String,
  type: String,
  age: Number,
  ability: String,
});

mongoose.model('animals', Animal);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/animals');
