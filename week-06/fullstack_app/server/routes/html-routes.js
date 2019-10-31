const path = require('path');
const mysql = require('mysql');

module.exports = (app, conneciton) => {
    // If no matching route is found default to index.html
    app.get('/', (req, res) => {
        conneciton.query("SELECT * FROM fullstack-react-express-mysql;", (err, data) => {
            (err) ? res.send(err) : res.json({users: data});
        });
    });

    // app.get('/chat', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public.chat.html'));
    // });
}