var express = require('express');
var router = express.Router();

let inventoryController = require('../controllers/inventory');

// Connect to our model
let Inventory = require('../models/inventory');


// helper function for guard purposes
// function requireAuth(req, res, next)
// {
//     // check if the user is logged in
//     if(!req.isAuthenticated())
//     {
//         req.session.url = req.originalUrl;
//         return res.redirect('/users/signin');
//     }
//     next();
// }

/* GET list of items */
router.get('/list', inventoryController.inventoryList);

// Routers for Edit
//router.get('/edit/:id', requireAuth, inventoryController.displayEditPage);
router.put('/edit/:id', inventoryController.processEdit);

// Routers for Delete
router.delete('/delete/:id', inventoryController.performDelete);


// /* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', requireAuth, inventoryController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', inventoryController.processAdd);

module.exports = router;