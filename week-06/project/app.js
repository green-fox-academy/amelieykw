// var createError = require('http-errors');
const express = require('express');
const cors = require('cors');
// const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'));

// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// connect to database
let connectToDB = require('./connectToDB');
connectToDB.connectToDB();

// endpoint services
let service = require('./service.js');

// GET /posts
app.get('/posts', (req, res) => {
  req.accepts('application/json');
  service.getAllPosts(req, res);
});

// POST /posts
app.post('/posts', (req, res) => {
  req.accepts('application/json');
  service.postApost(req, res);
});

// PUT /posts/<id>/upvote
app.put('/posts/:id/upvote', (req, res) => {
  req.accepts('application/json');
  service.upvote(req, res);
});

// PUT /posts/<id>/downvote
app.put('/posts/:id/downvote', (req, res) => {
  req.accepts('application/json');
  service.downvote(req, res);
});