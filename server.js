const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

//const port = process.evn.PORT || 3000;

//app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


//connect to Mongoose
const configDB = require("./config/database.js");
mongoose.connect(configDB.url,function(err){
    if (err) {
        console.log(err);
        process.exit();
    };
});
const db = mongoose.connection;

//  Connect all our routes to our application
app.use('/', routes);

app.listen(3000);
console.log("server started on port " + 3000);

// logger to implement
// session management to implement
// config setting mode production/development