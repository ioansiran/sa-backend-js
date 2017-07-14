var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/routes.js');
var mongoose = require('mongoose')

var app = express()
app.use(bodyParser())
mongoose.connect('mongodb://localhost/test');

// app.use('static', express.static(__dirname + '/public')); // maybe it  will be usefull sometime

app.get('/entries', routes.getAllEntries)
app.get('/getUserData/:username/:password', routes.getUserData)
app.post('/newUser',routes.postUser)
app.post('/updateLocation', routes.updateLocation)

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000/")
});
