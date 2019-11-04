const connectToDB = require('./connectToDB');

exports.getAllPosts = function (req, res) {
    connectToDB.mysqldb.query("SELECT * FROM posts;", (err, data) => {
        (err) ? res.send(err) : res.json({ posts: data });
    });
};