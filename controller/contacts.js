// Create a reference to the model
const { default: mongoose } = require('mongoose');
let ContactModel = require('../models/contacts');

module.exports.contactsList = function(req, res, next){

    ContactModel.find( (err, contactsList)=>{

        if(err){
            return console.error(err);
        }
        
        else{
            res.render(
                'contacts/list', 
                { 
                  title: 'Contact List',
                  ContactsList:contactsList
                }
              );

        }
    }).sort('name') 

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    ContactModel.findById(id, (err, ContactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contacts/editcontacts', {
                title: 'Edit Contact', 
                contact: ContactToEdit
            })
        }
    });
}



module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = ContactModel({
        _id: body.id,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    });
    console.log(id)
    ContactModel.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            console.log( id);
            res.redirect('/contacts/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    ContactModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contacts/list');
        }
    });
}
