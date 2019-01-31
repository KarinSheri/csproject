var express = require('express');
var router = express.Router();
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://csproject:csproject@coalitionformation-weuvq.azure.mongodb.net/CoalitionFormation?retryWrites=true';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

var student_id;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var StudentModel = require('../models/students');
var Net1Model = require('../models/network_1');
var Net2Model = require('../models/network_2');
var Net3Model = require('../models/network_3');
var Net4Model = require('../models/network_4');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addname', function(req, res, next){
    // Create an instance of model SomeModel
    ageD = req.body.age
    genderD = req.body.gender
    departmentD = req.body.department
    var student_instance = new StudentModel(req.body);
    student_id = student_instance._id
    student_instance.save(function (err) {if (err) return handleError(err);});
    res.redirect("/experiment/tutorial/")
     
})

/* GET home page. */
router.get('/experiment/tutorial/', function(req, res, next) {
  res.render('explaination');
});

/* GET home page. */
router.get('/experiment/net1/', function(req, res, next) {
  res.render('net1');
});

router.get('/experiment/net2/', function(req, res, next) {
  res.render('net2');
});

router.get('/experiment/net3/', function(req, res, next) {
  res.render('net3');
});

router.get('/experiment/net4/', function(req, res, next) {
  res.render('net4');
});

router.get('/experiment/thankyou/', function(req, res, next){
   res.render('thankyou'); 
});

router.post('/experiment/net1/chosen_nodes/', function(req, res, next) {
    var net1_instance = new Net1Model({ studentID: student_id, 
    time_sec:req.body.time,
    weight:req.body.weight,
    node_1:req.body.node1, 
    node_2:req.body.node2,
    node_3:req.body.node3,
    node_4:req.body.node4, 
    node_5:req.body.node5,
    node_6:req.body.node6});
    net1_instance.save(function (err) {if (err) return handleError(err);});
    console.log(req.body)
   console.log("reach here1");
   res.redirect('/experiment/net2'); 
});
router.post('/experiment/net2/chosen_nodes/', function(req, res, next) {
    var net2_instance = new Net2Model({ studentID: student_id, 
    time_sec:req.body.time,
    weight:req.body.weight,
    node_1:req.body.node1, 
    node_2:req.body.node2,
    node_3:req.body.node3,
    node_4:req.body.node4,
    node_5:req.body.node5,
    node_6:req.body.node6});
    net2_instance.save(function (err) {if (err) return handleError(err);});
    console.log(req.body)
   console.log("reach here2");
   res.redirect('/experiment/net3'); 
});
router.post('/experiment/net3/chosen_nodes/', function(req, res, next) {
    var net3_instance = new Net3Model({ studentID: student_id, 
    time_sec:req.body.time,
    weight:req.body.weight,
    node_1:req.body.node1, 
    node_2:req.body.node2,
    node_3:req.body.node3,
    node_4:req.body.node4,
    node_5:req.body.node5,
    node_6:req.body.node6,
    node_7:req.body.node7});
    net3_instance.save(function (err) {if (err) return handleError(err);});
    console.log(req.body)
   console.log("reach here3");
   res.redirect('/experiment/net4'); 
});

router.post('/experiment/net4/chosen_nodes/', function(req, res, next) {
    var net4_instance = new Net4Model({ studentID: student_id, 
    time_sec:req.body.time,
    weight:req.body.weight,
    node_1:req.body.node1, 
    node_2:req.body.node2,
    node_3:req.body.node3,
    node_4:req.body.node4,
    node_5:req.body.node5,
    node_6:req.body.node6,
    node_7:req.body.node7});
    net4_instance.save(function (err) {if (err) return handleError(err);});
    console.log(req.body)
   console.log("reach here4");
   res.redirect('/experiment/thankyou'); 
});

module.exports = router;
