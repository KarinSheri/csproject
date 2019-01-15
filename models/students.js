//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StudentModel = new Schema({
  age               : {type: Number, min: 16, max: 100, required: true},
  gender            : {type: String, enum: ['Male', 'Female'], required: true},
  department        : {type: String, max: 100, required: true}
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Students', StudentModel );