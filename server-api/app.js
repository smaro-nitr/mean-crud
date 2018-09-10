var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyparser = require('body-parser'); // Not Required on Latest Version
var cors = require('cors');

var indexRouter = require('./src/routes/index');

var app = express();

/* mongoose connection */
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', ()=>{
    console.log('Connected to MongoDb');
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Failed to connect MongoDb');
    }
});

/* middleware */
// view engine setup
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'jade');
// logger
app.use(logger('dev'));
// cors filter
app.use(cors());
// json parser
// app.use(bodyparser.json());
app.use(express.json());
// encoding url
app.use(express.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());
//static content path
app.use(express.static(path.join(__dirname, 'src', 'public')));

/* Routing */
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

/* error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
