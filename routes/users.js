
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/show', showUser);

function showUser(req, res, next) {
  res.render(
  'users', 
  {
    title: 'Profile' ,
    userName : 'Vinny'
  });
}

module.exports = router;
