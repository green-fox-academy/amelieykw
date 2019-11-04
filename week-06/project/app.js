// var createError = require('http-errors');
var express = require('express');
const mysql = require('mysql');
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const cors = require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

// connect mysql
const mysqldb = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3308,
  database: 'reddit'
});

mysqldb.connect(function (err) {
  if (err) {
    console.log(err);
  }
  console.log('connection successully');

  let createTablePosts = `CREATE TABLE IF NOT EXISTS posts(
      id int primary key auto_increment,
      title TEXT not null,
      url TEXT not null,
      timestamp TIMESTAMP not null,
      score int not null default 0,
      owner TEXT default null,
      vote int default 0
    )`;

  let createTableComments = `CREATE TABLE IF NOT EXISTS comments(
        id int primary key auto_increment,
        postId int not null,
        text TEXT not null,
        score int not null default 0,
        owner TEXT default null
      )`;

  [createTablePosts, createTableComments].forEach(query => executeSQLquery(query));

  let insertInitialPosts = `INSERT INTO posts (id, title, url, score, owner, vote) VALUES 
    (25, "Dear JavaScript", "http://9gag.com", 791, null, 1),
    (74, "Crockford", "http://9gag.com", 567, "kristof4", -1)
  `;

  let insertInitialComments = `INSERT INTO comments (id, postId, text, score, owner) VALUES 
    (17, 25, "Yes it is!", 12, "someone"),
    (22, 25, "No it's not!", 9, "someoneelse"),
    (11, 25, "That's a good post", 8, "someone");
    `;

  let checkIfEmptyPosts = `SELECT * FROM posts`;
  let checkIfEmptyComments = `SELECT * FROM comments`;

  [
    { "condition": checkIfEmptyPosts, "action": insertInitialPosts },
    { "condition": checkIfEmptyComments, "action": insertInitialComments }
  ].forEach(querySet => checkBeforeExecuteSQLquery(querySet));

});

function checkBeforeExecuteSQLquery(querySet) {
  if (typeof querySet !== "object") {
    console.log("Wrong input querySet!");
    return;
  }
  mysqldb.query(querySet.condition, function (err, results, fields) {
    if (err) {
      console.log(query.condition + " => " + err.message);
    }
    if (results.length === 0) {
      executeSQLquery(querySet.action);
    }
  });
}


function executeSQLquery(query) {
  mysqldb.query(query, function (err, results, fields) {
    if (err) {
      console.log(query + " => " + err.message);
    }
  });
}


app.get('/', (req, res) => {
  mysqldb.query("SELECT * FROM posts;", (err, data) => {
    (err) ? res.send(err) : res.json({ posts: data });
  });
});




module.exports = app;
