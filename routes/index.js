var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', home);

function home(req, res, next) {
  res.render('index', 
  {
    title: 'Express' ,
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

module.exports = router;
