var express = require('express');
var router = express.Router();
var path    = require("path");


/* GET Home page. */
router.get('/', function(req, res) {
  res.render('index');
});
/* GET About page. */
router.get('/about', function(req, res) {
  res.render('about');

});
/* GET Stock page. */
router.get('/stock', function(req, res) {
  res.render('stock');
});
/* GET Signup page. */
router.get('/signup', function(req, res) {
  res.render('signup');
});

module.exports = router;
