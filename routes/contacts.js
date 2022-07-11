var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

// Connect to our model
let contacts = require('../models/contacts');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}


/* GET list of items */
router.get('/list', contactsController.contactsList);

// Routers for Edit
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

// Routers for Delete
router.get('/delete/:id', requireAuth, contactsController.performDelete);



module.exports = router;