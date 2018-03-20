var Chat = require('./../model/Chat.js');

// File list -- get
var chatList = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// File Detail -- get
var chatDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Add File -- Post
var addChat = function(req,res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Delete File --put
var deleteChat = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}

var replyChat = function(req,res){
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
}


module.exports = {
    "chatList" : chatList,
    "chatDetail": chatDetail,
    "addChat": addChat,
    "deleteChat": deleteChat,
    "replyChat": replyChat
}