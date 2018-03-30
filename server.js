const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config/config.json')
const reset = require('./controller/resetPassword.js')

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

// const configDB = require("./config/database.js");
// mongoose.connect(configDB.url,function(err){
//     if (err) {
//         console.log(err);
//         process.exit();
//     };
// });
// const db = mongoose.connection;
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  if (mongoURL == null) return;

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};

app.set('views', './views')
app.set('view engine', 'ejs')

//  Connect all our routes to our application
app.use('/', routes);

app.get('/reset/admin/:code',reset.renderAdmin);
app.get('/reset/user/:code',reset.renderUser);
app.post('/reset/admin/update',reset.changeAdmin);
app.post('/reset/user/update',reset.changeUser);

app.listen(config.port);
console.log("server started on port " + config.port);

// logger to implement
// session management to implement
// config setting mode production/development
