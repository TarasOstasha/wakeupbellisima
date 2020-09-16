var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const Strategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('./models/users');
const forceDomain = require('forcedomain'); // for redirect to HTTPS
//const user = require('./models/user');

// connect to the database
mongoose.set('useFindAndModify', true);
mongoose.connect('mongodb+srv://user:1111@cluster0-olmgj.mongodb.net/WakeUpBellisima?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());
app.use(bodyParser({ limit: '11111111mb' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../front/dist/front')));
app.use(express.static(path.join(__dirname, 'downloads')));

require('./config/passport.js'); // connect passport
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);

// redirect to HTTPS
app.use(function(req, res, next) {
  if ((req.get('X-Forwarded-Proto') !== 'https')) {
    res.redirect('https://' + req.get('Host') + req.url);
  } else
    next();
});

app.use(forceDomain({
  hostname: 'wakeupbellisima.com',
  protocol: 'https'
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});






module.exports = app;
