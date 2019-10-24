const express = require('express');
const app = express();
const PORT = 3000;

const { cocktails, alcoholList } = require('./data/data');

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
    res.render('home', {
        cocktails: cocktails,
        alcoholList: alcoholList,
        alcoholType: req.query.alcohol
    });
});


// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
