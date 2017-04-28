/**
 * Created by lipeishang on 17-4-28.
 */
const express = require('express');
const path = require('path');
const bodyParser  = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, function () {
    console.log('server started at http://localhost:3000'); // eslint-disable-line no-console
});

module.exports = app;