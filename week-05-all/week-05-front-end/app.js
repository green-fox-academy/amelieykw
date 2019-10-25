const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// start express app on port 3000
let server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});