// Express hello world app

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.json({ message: 'Hello World!' });
});

app.get('/abc', function (req, res) {
    res.json({ message: 'ABC!' });
});

app.listen(5480, function () {
    console.log('Example app listening on port 5480!');
});