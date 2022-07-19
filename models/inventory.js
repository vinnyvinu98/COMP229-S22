// Import
let mongoose = require('mongoose');

// Create a model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        status: String,
        size: {
            h: Number,
            w: Number,
            uom: String
        },
        Owner:
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        collection: "CollectionItem"
    }
);

module.exports = mongoose.model("Inventory", inventoryModel);