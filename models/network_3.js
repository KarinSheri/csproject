//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Network_3_Model = new Schema({
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  node_1            : {type: Number, required: true}
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Network_3', Network_3_Model);