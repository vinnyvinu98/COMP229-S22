var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render('index', 
  {
    title: 'Home' ,
    userName : 'Vinny'
  });
}

//Get About page
router.get('/about', function(req, res, next) {
  res.render('index', 
  {
    title: 'About' ,
    userName : 'Vinny'
  });
})

//Get Projects page
router.get('/projects', function(req, res, next) {
  res.render('index', 
  {
    title: 'Projects' ,
    userName : 'Vinny'
  });
})

//Get Services page
router.get('/services', function(req, res, next) {
  res.render('index', 
  {
    title: 'Services' ,
    userName : 'Vinny'
  });
})

//Get Contact me page
router.get('/contact', function(req, res, next) {
  res.render('index', 
  {
    title: 'Contact Me' ,
    userName : 'Vinny'
  });
})

module.exports = router;
