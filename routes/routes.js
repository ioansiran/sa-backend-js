var entryModel = require('../model/model.js')
var Entry = entryModel.Entry;
const getAllEntries = (req, res)  => {
    Entry.find({}, function(err, users) {
        if(err)
            res.json({error: "persistence"})
        else 
            res.json(users)
    });
}
const postUser =  (req, res) => {
    var entry = new Entry(req.body);
    entry.save((err) => {
        if(err)
            res.json({error: "persistence"})
         else 
            res.json({ status: 'written' })        
    })
}
const updateLocation = (req, res) => {
        Entry.findOneAndUpdate({username: req.body.username, password: req.body.password}, {$push:{data:req.body.data}}, {new: true}, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
        res.json(doc);
    });
}
const getUserData = (req, res) => {
    Entry.find({username: req.params.username, password: req.params.password}, function(err, users) {
        if(err)
            res.json({error: "persistence"})
        else 
            res.json(users)
    });
}
module.exports.getAllEntries = getAllEntries; 
module.exports.postUser = postUser
module.exports.updateLocation = updateLocation;
module.exports.getUserData = getUserData;