//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MethodModel = new Schema({
  method            : {type: String, required: true},
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  date              : {type: Date, default: Date.now}
  });

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Methods', MethodModel);