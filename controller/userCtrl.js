var User = require('./../model/User.js');
var Admin = require('./../model/Admin.js');

// Display list of all users -- get
var user_list = function (req, res) {
    var query = {};
    User.find(query).exec(function(err,users){
                    if (err) throw err;
                    return res.send(users);
    });
    
};

// Display detail page for a specific User -- get
var user_detail = function (req, res) {
    if(req.body.userId && req.body.userId != ''){
        var userId = req.body.userId
    }else{
        return res.send('please input userID');
    }
    
    User.find({
        _id: userId
    }).exec(function(err,user){
        if(err) throw err;
        return res.send(user);
    });
    
};

// register User in Database -- Post
var register_user = function (req, res) {
    if (req.body.email && req.body.email != '') {
        var email = req.body.email
    } else {
        return res.send('please input email');
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

    var name = '';

    if (req.body.name && req.body.name != '') {
        var name = req.body.name
    }

     var newUser = new User({
        "name": name,
        "email": email,
        "adhaar_no": adhaar,
        "password": password,
    });

    newUser.save(function (err, data) {
        if (err) throw err;

        res.send(data);
    });
    
};

// login user --put
var login_user = function (req, res) {
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

    User.find({
        'email': email,
        'is_status': true,
        'is_delete': false
    }).exec(function (err, data) {
        if (err) {
            return res.send('No user found with ' + email);
        }
        if (password === data[0].password) {
            return res.send(data);
        } else {
            return res.send('Incorrect password');
        }

    });
}

var forget_password = function (req, res) {
    if (req.body.email && req.body.email != '') {
        var email = req.body.email
    } else {
        return res.send('please input email');
    }

    User.find({
        'email': email
    }).exec(function (err, data) {
        var randomPassword = randomToken(8);
        
        User.update({
            'password':randomPassword
        }).exec(function(err){
           if(err){
               return res.send('Server Error Please try again');
           } 
            
            // mail code 
            
            return res.send('Please Check your mail for further process');
        });

    })

}

// update user in database -- put
var update_user = function (req, res) {
    var query = {};
    if(req.body.name && req.body.name != ''){
        var query.name = req.body.name
    }
    
    if(req.body.phone && req.body.phone != ''){
        var query.phone = req.body.phone
    }
    
    if(req.body.password && req.body.password != ''){
        var query.password = req.body.password
    }
    
//    var query = {
//        "name": name,
//        "phone": phone,
//        "password":password
//    }
    console.log(query);
//    User.update({
//        
//    },{
//       $set 
//    },function(err,data){
//        
//    });
}

// delete user in database --put
var delete_user = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// user count in database -- get
var user_count = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// block user in database --put
var block_user = function (req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

module.exports = {
    "userList": user_list,
    "userDetail": user_detail,
    "register": register_user,
    "login": login_user,
    "forgetPassword": forget_password,
    "updateUser": update_user,
    "deleteUser": delete_user,
    "userCount": user_count,
    "blockUser": block_user
}
