let atlasDB = "mongodb+srv://vinnyvinu:ckUZoivOTHyV8kqw@cluster0.07ott.mongodb.net/Inventory?retryWrites=true&w=majority";
// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}