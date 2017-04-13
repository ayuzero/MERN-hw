var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 5000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/css',express.static(__dirname + '/css_public'));
app.use('/img',express.static(__dirname + '/img_public'));
app.use('/js',express.static(__dirname + '/js_public'));

app.get('/', function( req , res ){
    res.render('index');
});
app.get('/index', function( req , res ){
    res.render('index');
});
app.get('/about', function( req , res ){
    res.render('about');
});
app.get('/product', function( req , res ){
    res.render('product');
});
app.get('/contact', function( req , res ){
    res.render('contact');
});
app.listen(port);