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

// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});