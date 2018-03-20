var Complaint = require('./../model/Complaint.js');

// File list -- get
var complaintList = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// File Detail -- get
var complaintDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Add File -- Post
var addComplaint = function(req,res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};


// Delete File --put
var deleteComplaint = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// File count -- get
var complaintCount = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}


module.exports = {
    "complaintList" : complaintList,
    "complaintDetail": complaintDetail,
    "addComplaint": addComplaint,
    "deleteComplaint": deleteComplaint,
    "complaintCount": complaintCount
}