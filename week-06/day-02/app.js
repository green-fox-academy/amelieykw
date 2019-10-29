const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3000;

// const { getAllBooks } = require('./routes/index');

// set the app to listen on the port
app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password, database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3308,
    database: "bookstore"
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
// db.end();


// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder


// routes for the app
app.get('/', (req, res) => {
    let query = "SELECT * FROM book_mast;"; // query database to get all the books' titles

    // execute query 
    db.query(query, function (err, rows) {
        if (err) {
            console.log(err.toString());
            res.status(500).send('Database error');
            return;
        }
        res.render('index.ejs', {
            title: 'All Books in BookStore',
            books: rows
        });
    });
});