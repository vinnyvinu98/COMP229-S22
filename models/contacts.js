// Import
let mongoose = require('mongoose');

// Create a model class
let ContactModel = mongoose.Schema(
    {
        name: String,
        address: String,
        email : String
    },
    {
        collection: "Contacts"
    }
);

module.exports = mongoose.model("Contacts", ContactModel);