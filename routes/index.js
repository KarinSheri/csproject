var express = require('express');
var router = express.Router();
//Import the mongoose module
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId; 
var url = 'mongodb+srv://csproject:csproject@coalitionformation-weuvq.azure.mongodb.net/CoalitionFormation?retryWrites=true';

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://csproject:csproject@coalitionformation-weuvq.azure.mongodb.net/CoalitionFormation?retryWrites=true';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//var student_id;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var StudentModel = require('../models/students');
var Net1Model = require('../models/network_1');
var Net2Model = require('../models/network_2');
var Net3Model = require('../models/network_3');
var Net4Model = require('../models/network_4');
var Net5Model = require('../models/network_5');
var Net6Model = require('../models/network_6');
var Net7Model = require('../models/network_7');
var Net8Model = require('../models/network_8');
var Net9Model = require('../models/network_9');
var Net10Model = require('../models/network_10');
var UsersModel = require('../models/users');
var MethodsModel = require('../models/methods');

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("CoalitionFormation");
  dbo.collection("users").find({ip: "79.179.22.204"}).limit(1).sort({_id:-1}).toArray(function(err, res) {
    if (err) throw err;
    console.log(res[0]["studentID"]);
    db.close();
  });
});*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addname', function(req, res, next){
    var student_id;
    // Create an instance of model SomeModel
    ip_v = req.body.ip
    age_v = req.body.age
    gender_v = req.body.gender
    email_v = req.body.email
    edu_v = req.body.education
    indu_v = req.body.industry

    //var student_instance = new StudentModel(req.body);
    var student_instance = new StudentModel({age:age_v, gender:gender_v, email:email_v, education:edu_v, industry:indu_v});
    student_id = student_instance._id
    student_instance.save(function (err) {if (err) return handleError(err);});

    var user_instance = new UsersModel({ip:ip_v, studentID:student_id});
    user_instance.save(function (err) {if (err) return handleError(err);});

    console.log("***student id: " + student_id)
    console.log("ip: " + ip_v)
    console.log(req.body)

    path_id = "/experiment/tutorial/user/" + String(student_id)
    console.log("First Path to tutorial:" + path_id);
    res.redirect(path_id)   
})

/* GET home page. */
router.get('/experiment/tutorial/user/:userId', function(req, res, next) {
  console.log("***Tutorial req params " , req.params.userId);
  res.render('explaination', { studentId: req.params.userId });
});

/* GET home page. */
router.get('/experiment/net1/user/:userId', function(req, res, next) {
  console.log("***net1 req params " , req.params.userId);
  res.render('net1', { studentId: req.params.userId });
});

router.get('/experiment/net2/user/:userId', function(req, res, next) {
  console.log("***net2 req params " , req.params.userId);
  res.render('net2', { studentId: req.params.userId });
});

router.get('/experiment/net3/user/:userId', function(req, res, next) {
  console.log("***net3 req params " , req.params.userId);
  res.render('net3', { studentId: req.params.userId });
});

router.get('/experiment/net4/user/:userId', function(req, res, next) {
  console.log("***net4 req params " , req.params.userId);
  res.render('net4', { studentId: req.params.userId });
});

router.get('/experiment/net5/user/:userId', function(req, res, next) {
  console.log("***net5 req params " , req.params.userId);
  res.render('net5', { studentId: req.params.userId });
});

router.get('/experiment/net6/user/:userId', function(req, res, next) {
  console.log("***net6 req params " , req.params.userId);
  res.render('net6', { studentId: req.params.userId });
});

router.get('/experiment/net7/user/:userId', function(req, res, next) {
  console.log("***net7 req params " , req.params.userId);
  res.render('net7', { studentId: req.params.userId });
});

router.get('/experiment/net8/user/:userId', function(req, res, next) {
  console.log("***net8 req params " , req.params.userId);
  res.render('net8', { studentId: req.params.userId });
});

router.get('/experiment/net9/user/:userId', function(req, res, next) {
  console.log("***net9 req params " , req.params.userId);
  res.render('net9', { studentId: req.params.userId });
});

router.get('/experiment/net10/user/:userId', function(req, res, next) {
  console.log("***net10 req params " , req.params.userId);
  res.render('net10', { studentId: req.params.userId });
});

router.get('/experiment/method/user/:userId', function(req, res, next) {
  console.log("***method req params " , req.params.userId);
  res.render('method', { studentId: req.params.userId });
});

router.get('/experiment/thankyou/', function(req, res, next){
   res.render('thankyou'); 
});

router.post('/experiment/explanation/randfirst', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id explanation: " + student_id);
  var o_st_id = new ObjectId(student_id);
  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      console.log("resp", resp);
      // student_id = resp[0]["studentID"];
      var left_networks = resp[0]["left_networks"];
      console.log("query response left networks:" + resp[0]["left_networks"]);
      console.log("query response student id:" + resp[0]["studentID"]);
      var random_index = Math.floor(Math.random()*left_networks.length)
      var random_net = left_networks[random_index];
      var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
      console.log("redirect to address:" + redirect_to);
      left_networks.splice(random_index, 1);
      console.log("New Left network #1: " + String(left_networks));
      dbo.collection("users").updateOne(
        { studentID: o_st_id},
        {
          $set: { "left_networks": left_networks}
        }
      )

      console.log(req.body)
      console.log("reach here"); 
      dbb.close();
      res.redirect(redirect_to);
    });
  });
});

router.post('/experiment/net1/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net1: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      // student_id = resp[0]["studentID"];
      // console.log("query response student id #1:" + String(student_id));

      var net1_instance = new Net1Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4, 
        node_5:req.body.node5,
        node_6:req.body.node6,
        nodes_order:req.body.orderednodes});
      net1_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
      console.log("query response left networks #1: " + String(left_networks));
      if (left_networks === undefined || left_networks.length == 0) {
        //redirect_to = '/experiment/thankyou'
        redirect_to = '/experiment/method/user/' + String(student_id)
      } else {
        var random_index = Math.floor(Math.random()*left_networks.length)
        var random_net = left_networks[random_index];
        var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
        left_networks.splice(random_index, 1);
        console.log("New Left network #1: " + String(left_networks));
        dbo.collection("users").updateOne(
          { studentID: o_st_id},
          {
            $set: { "left_networks": left_networks}
          }
        )
      }
      console.log("redirect to address #1:" + redirect_to);
      
      console.log("reach here1"); 
      dbb.close();
      res.redirect(redirect_to);
    });
  });
   
});

router.post('/experiment/net2/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net2: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #2:" + String(student_id));

      var net2_instance = new Net2Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4,
        node_5:req.body.node5,
        node_6:req.body.node6,
        nodes_order:req.body.orderednodes});
      net2_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
      console.log("query response left networks #2: " + String(left_networks));
      if (left_networks === undefined || left_networks.length == 0) {
        //redirect_to = '/experiment/thankyou'
        redirect_to = '/experiment/method/user/' + String(student_id)
      } else {
        var random_index = Math.floor(Math.random()*left_networks.length)
        var random_net = left_networks[random_index];
        var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
        left_networks.splice(random_index, 1);
        console.log("New Left network #2: " + String(left_networks));
        dbo.collection("users").updateOne(
          { studentID: o_st_id},
          {
            $set: { "left_networks": left_networks}
          }
        )
      }
      console.log("redirect to address #2:" + redirect_to);
      
      console.log("reach here2"); 
      dbb.close();
      res.redirect(redirect_to);
    });
  });


});
router.post('/experiment/net3/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net3: " + student_id);
  var o_st_id = new ObjectId(student_id);

  
  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #3:" + String(student_id));

      var net3_instance = new Net3Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4,
        node_5:req.body.node5,
        node_6:req.body.node6,
        node_7:req.body.node7,
        node_8:req.body.node8,
        nodes_order:req.body.orderednodes});
      net3_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body);

      var left_networks = resp[0]["left_networks"];
      console.log("query response left networks #3: " + String(left_networks));
      if (left_networks === undefined || left_networks.length == 0) {
        //redirect_to = '/experiment/thankyou'
        redirect_to = '/experiment/method/user/' + String(student_id)
      } else {
        var random_index = Math.floor(Math.random()*left_networks.length)
        var random_net = left_networks[random_index];
        var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
        left_networks.splice(random_index, 1);
        console.log("New Left network #3: " + String(left_networks));
        dbo.collection("users").updateOne(
          { studentID: o_st_id},
          {
            $set: { "left_networks": left_networks}
          }
        )
      }
      console.log("redirect to address #3:" + redirect_to);
      
      console.log("reach here3"); 
      dbb.close();
      res.redirect(redirect_to);
    });
  });
});

router.post('/experiment/net4/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net4: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #4:" + String(student_id));

      var net4_instance = new Net4Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4,
        node_5:req.body.node5,
        node_6:req.body.node6,
        node_7:req.body.node7,
        node_8:req.body.node8, 
        node_9:req.body.node9,
        node_10:req.body.node10,
        node_11:req.body.node11,
        nodes_order:req.body.orderednodes});
      net4_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #4: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #4: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #4:" + redirect_to);
        
        console.log("reach here4"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net5/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net5: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #5:" + String(student_id));

      var net5_instance = new Net5Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4,
        node_5:req.body.node5,
        node_6:req.body.node6,
        node_7:req.body.node7,
        node_8:req.body.node8, 
        node_9:req.body.node9,
        node_10:req.body.node10,
        nodes_order:req.body.orderednodes});
        net5_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #5: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #5: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #5:" + redirect_to);
        
        console.log("reach here5"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net6/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net6: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #6:" + String(student_id));

      var net6_instance = new Net6Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        node_4:req.body.node4,
        node_5:req.body.node5,
        node_6:req.body.node6,
        node_7:req.body.node7,
        node_8:req.body.node8, 
        node_9:req.body.node9,
        node_10:req.body.node10,
        node_11:req.body.node11, 
        node_12:req.body.node12,
        node_13:req.body.node13,
        nodes_order:req.body.orderednodes});
        net6_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #6: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #6: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #6:" + redirect_to);
        
        console.log("reach here6"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net7/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net7: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #7:" + String(student_id));

      var net7_instance = new Net7Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        nodes_order:req.body.orderednodes});
        net7_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #7: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #7: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #7:" + redirect_to);
        
        console.log("reach here7"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net8/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net8: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #8:" + String(student_id));

      var net8_instance = new Net8Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        nodes_order:req.body.orderednodes});
        net8_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #8: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #8: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #8:" + redirect_to);
        
        console.log("reach here8"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net9/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net9: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #9:" + String(student_id));

      var net9_instance = new Net9Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        nodes_order:req.body.orderednodes});
        net9_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #9: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #9: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #9:" + redirect_to);
        
        console.log("reach here9"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/net10/chosen_nodes/', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id net10: " + student_id);
  var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;
    var dbo = dbb.db("CoalitionFormation");
    dbo.collection("users").find({studentID: o_st_id}).limit(1).sort({_id:-1}).toArray(function(err, resp) {
      if (err) throw err;
      //student_id = resp[0]["studentID"];
      //console.log("query response student id #10:" + String(student_id));

      var net10_instance = new Net10Model({ studentID: student_id, 
        time_sec:req.body.time,
        weight:req.body.weight,
        node_1:req.body.node1, 
        node_2:req.body.node2,
        node_3:req.body.node3,
        nodes_order:req.body.orderednodes});
        net10_instance.save(function (err) {if (err) return handleError(err);});
      console.log(req.body)

      var left_networks = resp[0]["left_networks"];
        console.log("query response left networks #10: " + String(left_networks));
        if (left_networks === undefined || left_networks.length == 0) {
          //redirect_to = '/experiment/thankyou'
          redirect_to = '/experiment/method/user/' + String(student_id)
        } else {
          var random_index = Math.floor(Math.random()*left_networks.length)
          var random_net = left_networks[random_index];
          var redirect_to = '/experiment/net' + String(random_net) + "/user/" + String(student_id)
          left_networks.splice(random_index, 1);
          console.log("New Left network #10: " + String(left_networks));
          dbo.collection("users").updateOne(
            { studentID: o_st_id},
            {
              $set: { "left_networks": left_networks}
            }
          )
        }
        console.log("redirect to address #10:" + redirect_to);
        
        console.log("reach here10"); 
        dbb.close();
        res.redirect(redirect_to);
      });
    });
});

router.post('/experiment/method/add_method', function(req, res, next) {
  var student_id = req.body.student_id
  console.log("***student id method: " + student_id);
  //var o_st_id = new ObjectId(student_id);

  MongoClient.connect(url, function(err, dbb) {
    if (err) throw err;

    var method_instance = new MethodsModel({ 
      studentID: student_id, 
      method:req.body.method});
      method_instance.save(function (err) {if (err) return handleError(err);});
    console.log(req.body)

    redirect_to = '/experiment/thankyou'
    console.log("reach method page"); 
    res.redirect(redirect_to);

    });
  });

module.exports = router;
