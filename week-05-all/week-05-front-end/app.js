const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let received = req.query.input;
    if (received === undefined) {
        res.send({
            "error": "Please provide an input"
        })
    } else {
        res.send({
            "received": received,
            "result": received * 2
        });
    }
});

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;

    if (name === undefined && title === undefined) {
        res.send({
            "error": "Please provide a name and a title"
        })
    } else if (name === undefined) {
        res.send({
            "error": "Please provide a name"
        })
    } else if (title === undefined) {
        res.send({
            "error": "Please provide a title"
        })
    } else {
        res.send({
            "welcome_message": "Oh, hi there " + name + ", my dear " + title
        });
    }
});

// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});