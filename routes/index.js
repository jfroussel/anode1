var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var router = express.Router();


router.get('/', function (req, res) {
   res.render('home',{ user : req.user });
});

router.get('/contact', function (req, res) {
    res.render('contact',{ user : req.user });
});

router.get('/documentation', function (req, res) {
    res.render('documentation',{ user : req.user });
});

router.get('/profil', function (req, res) {
    res.render('profil', {user : req.user});
});

router.get('/about', function (req, res) {
    res.render('about',{ user : req.user });
});

router.get('/register', function(req, res) {
    res.render('register',{user : res.user});
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            console.log(err);
            return res.render('register', { account : account });
        }
        passport.authenticate('local')(req, res, function () {
            console.log(res);
            res.redirect('/');
        });
    });
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;