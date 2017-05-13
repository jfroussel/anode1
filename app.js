var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

app.use(expressLayouts);


app.get('/toto', function(req, res) {
  var locals = {
    title: 'Page Title de toto',
    description: 'Page Description',
    header: 'Page Header'
  };
  res.render('contact', locals);
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/contact', (req, res) => {
  res.render('contact');
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