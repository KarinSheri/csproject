//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Network_4_Model = new Schema({
  studentID         : {type: Schema.Types.ObjectId, ref: 'Students'},
  time_sec          : {type: Number, required: true},
  weight            : {type: Number, required: true},
  node_1            : {type: Number, required: true},
  node_2            : {type: Number, required: true},
  node_3            : {type: Number, required: true},
  node_4            : {type: Number, required: true},
  node_5            : {type: Number, required: true},
  node_6            : {type: Number, required: true},
  node_7            : {type: Number, required: true},
  node_8            : {type: Number, required: true},
  node_9            : {type: Number, required: true},
  node_10           : {type: Number, required: true},
  node_11           : {type: Number, required: true}
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Network_4', Network_4_Model);