var Complaint = require('./../model/Complaint.js');

// File list -- get
var complaintList = function(req, res) {
     var query = {
        is_delete: false,
        is_status: true
    };
    Complaint.find(query).exec(function (err, complains) {
        if (err) throw err;
        return res.send(complains);
    });

};

// File Detail -- get
var complaintDetail = function(req, res) {
    if (req.body.complainId && req.body.complainId != '') {
        var complainId = req.body.complainId
    } else {
        return res.send('please input complainId');
    }

    Complaint.find({
        _id: complainId,
        is_status: true,
        is_delete: false
    }).exec(function (err, complain) {
        if (err) throw err;
        return res.send(complain);
    });
};

// Add File -- Post
var addComplaint = function(req,res) {
    if(req.body.fileId && req.body.fileId != ''){
        var fileId = req.body.fileId
    }else{
        return res.send('please input fileId')
    }
    
    if(req.body.userId && req.body.userId != ''){
        var userId = req.body.userId
    }else{
        return res.send('please input userId')
    }
    
    if(req.body.description && req.body.description != ''){
        var description = req.body.description
    }else{
        return res.send('please input description')
    }
    
    var newComplain = new Complaint({
       "fileId" : fileId,
        "userId": userId,
        "description": description
    });
    
    newComplain.save(function(err,data){
       if(err) throw err;
        
        res.send(data);
    });
    
};


// Delete File --put
var deleteComplaint = function(req,res){
    if (req.body._id && req.body._id != '') {
        var complainId = req.body._id;
    } else {
        return res.send('please enter complain id')
    }

    Complaint.update({
        _id: complainId
    }, {
        $set: {
            is_delete: true
        }
    }, function (err, data) {
        if (err) throw err;
        res.send(data);
    });
}

// File count -- get
var complaintCount = function(req,res){
    File.count({}, function (err, count) {
        if (err) throw err;
        res.send(count.toString());
    });
}


module.exports = {
    "complaintList" : complaintList,
    "complaintDetail": complaintDetail,
    "addComplaint": addComplaint,
    "deleteComplaint": deleteComplaint,
    "complaintCount": complaintCount
}