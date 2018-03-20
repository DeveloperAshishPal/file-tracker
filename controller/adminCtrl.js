var Admin = require('./../model/Admin.js');
var randomToken = require('random-token').create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');

// Display list of all -- get
var list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// Display detail -- get
var detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Add -- Post
var addAdmin = function(req,res) {
    // no token check
    // add file 
    // generate token 
    if (req.body.email && req.body.email != '') {
        var email = req.body.email
    } else {
        return res.send('please input email');
    }
    
    if (req.body.dept_id && req.body.dept_id != '') {
        var dept_id = req.body.dept_id
    } else {
        return res.send('please input department id');
    }
    
    if (req.body.dept_loc && req.body.dept_loc != '') {
        var dept_loc = req.body.dept_loc
    } else {
        return res.send('please input department location');
    }
    
    if (req.body.dept_name && req.body.dept_name != '') {
        var dept_name = req.body.dept_name
    } else {
        return res.send('please input department name');
    }

    if (req.body.adhaar && req.body.adhaar != '') {
        var adhaar = req.body.adhaar
    } else {
        return res.send('please input adhaar no');
    }

    if (req.body.password && req.body.password != '') {
        // have to update here i.e encrypt password before saving
        var password = req.body.password
    } else {
        return res.send('please input password');
    }
    
    if (req.body.is_admin && req.body.is_admin != '') {
        var is_admin = req.body.is_admin
    }

    var name = '';

    if (req.body.name && req.body.name != '') {
        var name = req.body.name
    }

    var token = randomToken(16);

    var newAdmin = new Admin({
        "name": name,
        "email": email,
        "adhaarNo": adhaar,
        "password": password,
        "dept_id":dept_id,
        "dept_loc": dept_loc,
        "dept_name":dept_name,
        "token": token,
        "is_admin":is_admin
    });

    newAdmin.save(function (err, data) {
        if (err) throw err;
        
        res.send(data);
    });
};

// login  --put
var login = function(req,res) {
    if (req.body.email && req.body.email != '') {
        var email = req.body.email
    } else {
        return res.send('please input email');
    }
    if (req.body.password && req.body.password != '') {
        var password = req.body.password
    } else {
        return res.send('please input password');
    }

    Admin.find({
        'email': email,
        'is_status': true,
        'is_delete': false
    }).exec(function (err, data) {
        if (err) {
            return res.send('No admin found with ' + email);
        }
        if (password === data[0].password) {
            return res.send(data);
        } else {
            return res.send('Incorrect password');
        }
    });
}

var forget_password =function (req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// update  -- put
var updateAdmin = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// delete  --put
var deleteOfficer = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// count in database -- get
var count = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// block  --put
var block = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

var upgradeToAdmin = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}



module.exports = {
    "adminList" : list,
    "adminDetail": detail,
    "addAdmin": addAdmin,
    "login": login,
    "forgetPassword": forget_password,
    "updateAdmin": updateAdmin,
    "deleteOfficer": deleteOfficer,
    "adminCount": count,
    "blockOfficer": block,
    "upgrade": upgradeToAdmin
}