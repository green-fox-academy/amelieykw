const connectToDB = require('./connectToDB');

exports.getAllPosts = function (req, res) {
    let query = "SELECT * FROM posts;";

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                res.status(200).json({ posts: data })
            }
        })
    });
};

exports.postApost = function (req, res) {
    let query = `INSERT INTO posts (title, url) VALUES 
    ("${req.body.title}", "${req.body.url}")`;

    connectToDB.mysqldb.query(query, (err, data) => {
        (err) ? res.status(400).send(err) : res.format({
            'application/json': function () {
                postprocess(res);
            }
        })
    });

    function postprocess(res) {
        let postprocessQuery = `SELECT * FROM posts ORDER BY timestamp DESC LIMIT 1;`;

        connectToDB.mysqldb.query(postprocessQuery, (err, data) => {
            (err) ? res.status(400).send(err) : res.format({
                'application/json': function () {
                    res.status(201).type('application/json').send(data)
                }
            })
        })
    }
};