var mongoose = require('mongoose')
var dataSchema = new mongoose.Schema({
        date: String,
        lat: String,
        long: String
    })
var entrySchema = new mongoose.Schema({
        username: { type : String , unique : true, required : true, dropDups: true },
        password: { type : String , unique : false, required : true, dropDups: true },
        data: [dataSchema]        
    })
var Entry = mongoose.model("Entry", entrySchema);
module.exports.Entry = Entry;