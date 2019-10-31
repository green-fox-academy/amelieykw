var express = require('express');
const path = require('path');
const mysql = require('mysql');
var router = express.Router();

/* GET home page. */
module.exports = router.get('/', function (req, res) {
  conneciton.query("SELECT * FROM users;", (err, data) => {
    (err) ? res.send(err) : res.json({ users: data });
  });
});

