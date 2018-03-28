const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config/config.json')
const reset = require('./controller/resetPassword.js')

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

const configDB = require("./config/database.js");
mongoose.connect(configDB.url,function(err){
    if (err) {
        console.log(err);
        process.exit();
    };
});
const db = mongoose.connection;

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