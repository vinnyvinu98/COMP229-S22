// Create a reference to the model
const { default: mongoose } = require('mongoose');
let ContactModel = require('../models/contacts');

module.exports.contactsList = function (req, res, next) {

    ContactModel.find((err, contactsList) => {

        if (err) {
            return console.error(err);
        }

        else {
            res.render(
                'contacts/list',
                {
                    title: 'Contact List',
                    ContactsList: contactsList
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
    let updatedContact = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email
    };
    ContactModel.updateOne({_id:mongoose.Types.ObjectId(id)},updatedContact,(err,result)=>{
        if(err){
            console.log(err)
        }else if(result){
            console.log(result)
            res.redirect('/contacts/list')
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    ContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts/list');
        }
    });
}
