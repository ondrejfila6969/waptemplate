var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors");
const mongoose = require("mongoose");
mongoose
.connect(`mongodb+srv://admin:adminadmin@cluster0.zymn1.mongodb.net/wappripravujeme?retryWrites=true&w=majority&appName=cluster0`)
.then(() => {
  console.log("Database connected")})
.catch((err) => {console.log(err)});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const monkeyRouter = require("./routes/monkeys");

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/monkey", monkeyRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
