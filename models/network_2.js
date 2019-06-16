//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Network_2_Model = new Schema({
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  time_sec          : {type: Number, required: true},
  weight            : {type: Number, required: true},
  node_1            : {type: Number, required: true},
  node_2            : {type: Number, required: true},
  node_3            : {type: Number, required: true},
  node_4            : {type: Number, required: true},
  node_5            : {type: Number, required: true},
  node_6            : {type: Number, required: true},
  nodes_order       : {type: Array, required: true},
  date              : {type: Date, default: Date.now}
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Network_2', Network_2_Model);