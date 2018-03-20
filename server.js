const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = process.evn.OPENSHIFT_NODEJS_PORT || 3000;
const ip = process.evn.OPENSHIFT_NODEJS_IP || 127.0.0.1;

//app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


//connect to Mongoose
const configDB = require("./config/database.js");
mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME,function(err){
    if (err) {
        console.log(err);
        process.exit();
    };
});
const db = mongoose.connection;

//  Connect all our routes to our application
app.use('/', routes);

app.listen(port,ip,function(){
    console.log("server started on port " + 3000);
});


// logger to implement
// session management to implement
// config setting mode production/development