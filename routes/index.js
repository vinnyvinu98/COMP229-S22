var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render('index', 
  {
    title: 'Home' ,
    userName: req.user ? req.user.username : ''
  });
}



//Get About page
router.get('/about', function(req, res, next) {
  res.render('about', 
  {
    title: 'About' ,
    userName: req.user ? req.user.username : ''
  });
})

//Get Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', 
  {
    title: 'Projects' ,
    userName: req.user ? req.user.username : ''
  });
})

//Get Services page
router.get('/services', function(req, res, next) {
  res.render('services', 
  {
    title: 'Services' ,
    userName: req.user ? req.user.username : ''
  });
})

router.get('/resume',function(req,res,next){
  res.send("hello")
})

//Get Contact me page
router.get('/contact', function(req, res, next) {
  res.render('contact', 
  {
    title: 'Contact Me' ,
    userName: req.user ? req.user.username : ''
  });
})




module.exports = router;
