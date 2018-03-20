var User = require('./../model/File.js');

// File list -- get
var fileList = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// File Detail -- get
var fileDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Add File -- Post
var addFile = function(req,res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Add history to file -- put
var updateFile = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// Delete File --put
var deleteFile = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// File count -- get
var fileCount = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

// File Status -- put
var fileStatus = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}



module.exports = {
    "fileList" : fileList,
    "fileDetail": fileDetail,
    "addFile": addFile,
    "updateFile": updateFile,
    "deleteFile": deleteFile,
    "fileCount": fileCount,
    "fileStatus": fileStatus
}