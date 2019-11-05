const connectToDB = require('./connectToDB');

function getAllPosts(req, res) {
    let query = "SELECT * FROM posts;";

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                res.status(200).json({ posts: data })
            }
        })
    });
};

function postApost(req, res) {
    let query = `INSERT INTO posts (title, url) VALUES 
    ("${req.body.title}", "${req.body.url}")`;

    let postprocessQuery = `SELECT * FROM posts ORDER BY timestamp DESC LIMIT 1;`;

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                postprocess(postprocessQuery, res);
            }
        })
    });
};

function upvote(req, res) {
    let query = `UPDATE posts SET score = 1 + score WHERE id = ${req.params.id};`;
    let postprocessQuery = `SELECT * FROM posts WHERE id = ${req.params.id};`;

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                postprocess(postprocessQuery, res);
            }
        })
    });

};

function downvote(req, res) {
    let query = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`;
    let postprocessQuery = `SELECT * FROM posts WHERE id = ${req.params.id};`;

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                postprocess(postprocessQuery, res);
            }
        })
    });
};

function postprocess(query, res) {
    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                res.status(201).type('application/json').send(data)
            }
        })
    })
}

module.exports = { getAllPosts, postApost, upvote, downvote };