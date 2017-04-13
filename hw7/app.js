var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use('/', router);

app.listen(port);