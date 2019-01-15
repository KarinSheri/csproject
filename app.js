var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var net1Router  = require('./routes/net1');
var net2Router  = require('./routes/net2');
var net3Router  = require('./routes/net3');
var thankYouRouter  = require('./routes/thankyou');

var app = express();

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://csproject:csproject@coalitionformation-weuvq.azure.mongodb.net/CoalitionFormation?retryWrites=true';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Create a SomeModel model just by requiring the module
var StudentModel = require('./models/students')

// Create an instance of model SomeModel
var student_instance = new StudentModel({ age: 25, gender:'Female', department:'CS' });

// Save the new model instance, passing a callback
/*student_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});*/

// Access model field values using dot notation
console.log(student_instance.age); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
// awesome_instance.name="New cool name";
// awesome_instance.save(function (err) {
//   if (err) return handleError(err); // saved!
//   });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/net1', net1Router);
app.use('/net2', net2Router);
app.use('/net3', net3Router);
app.use('/thankyou', thankYouRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
