const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile(__dirname + '/index.html');
    res.render('home', {
        title: 'Hello World',
    });
});

// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

