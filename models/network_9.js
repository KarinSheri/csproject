//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Network_9_Model = new Schema({
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  time_sec          : {type: Number, required: true},
  weight            : {type: Number, required: true},
  node_1            : {type: Number, required: true},
  node_2            : {type: Number, required: true},
  nodes_order       : {type: Array, required: true},
  date              : {type: Date, default: Date.now}
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Network_9', Network_9_Model);