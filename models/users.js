//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UsersModel = new Schema({
  ip                : {type: String, required: true},
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  left_networks     : {type: Array, default: [1,2,3,4,5,6,7,8,9,10]},
  date              : {type: Date, default: Date.now}
  });

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Users', UsersModel );