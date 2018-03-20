const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = process.evn.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.evn.OPENSHIFT_NODEJS_IP || process.env.IP;

//app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());


//connect to Mongoose
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
  config.db.mongo.url = connection_string;
}
const configDB = require("./config/database.js");
mongoose.connect(connection_string,function(err){
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