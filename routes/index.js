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
  res.render('about', 
  {
    title: 'About' ,
    userName : 'Vinny Mariam Vinu'
  });
})

//Get Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', 
  {
    title: 'Projects' ,
    userName : 'Vinny'
  });
})

//Get Services page
router.get('/services', function(req, res, next) {
  res.render('services', 
  {
    title: 'Services' ,
    userName : 'Vinny'
  });
})

//Get Contact me page
router.get('/contact', function(req, res, next) {
  res.render('contact', 
  {
    title: 'Contact Me' ,
    userName : 'Vinny'
  });
})

module.exports = router;
