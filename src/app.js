'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');
require('./seed');

app.use('/', express.static('public'));//serving public folder at the root url
app.use(parser.json());

app.use('/api', router);//using api so there is no conflict
//between same name routes

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
