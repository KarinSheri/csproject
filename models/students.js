//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StudentModel = new Schema({
  age               : {type: Number, required: true},
  gender            : {type: String, enum: ['Male', 'Female'], required: true},
  email             : {type: String, required: true},
  education         : {type: String, enum: ["Less than high school","High school","Bachelor","Master","Doctorate"], required: true},
  industry          : {type: String, required: true},
  date              : {type: Date, default: Date.now}
  });

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Students', StudentModel );