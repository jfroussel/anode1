var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(express.static(__dirname + '/public'));
app.use(expressLayouts);



app.get('/', (req, res) => {
  res.render('home');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/auth', (req, res) => {
  res.render('auth');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/documentation', (req, res) => {
  res.render('documentation');
});

app.get('/post/:id', (req, res) => {
  res.render('post');
});


var port = 3000;
app.listen(port, function() {
  console.log('Listening on http://localhost:%s/', port);
});