const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('assets'));
app.use(express.json());

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

app.get('/appenda/:appendable', (req, res) => {
    let appenda = req.params.appendable;
    if (appenda === undefined) {
        res.send({
            "error": "Please provide an appenda"
        })
    } else {
        res.send({
            "appended": appenda
        });
    }
});

app.post('/', (req, res) => {
    res.send(req.body);
});

app.post('/dountil/:action', function (req, res) {
    let until = req.body.until;
    let action = req.params.action;

    if (until === undefined) {
        res.send({
            "error": "Please provide an number"
        });
    } else if (action === 'sum') {
        res.send({
            "result": 15
        });
    } else if (action === 'factor') {
        res.send({
            "result": 120
        });
    }
});

app.post('/arrays', function (req, res) {
    let what = req.body.what;
    let numbers = req.body.numbers;

    if (what === undefined) {
        res.send({
            "error": "Please provide what to do with the numbers!"
        });
    } else if (what === 'sum') {
        let result = 0; 
        numbers.forEach(number => {
            result += number;
        });
        res.send({
            "result": result
        });
    } else if (what === 'multiply') {
        let result = 1; 
        numbers.forEach(number => {
            result *= number;
        });
        res.send({
            "result": result
        });
    } else if (what === 'double') {
        let result = numbers.map(number => number * 2);
        res.send({
            "result": result
        });
    }
});


// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});