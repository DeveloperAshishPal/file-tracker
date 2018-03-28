var Chat = require('./../model/Chat.js');

// File list -- get
var chatList = function(req, res) {
    // list of files
    // fileId
    
};

// File Detail -- get
var chatDetail = function(req, res) {
    // list of officer 
    // officerId 
};

// Add File -- Post
var commentChat = function(req,res) {
    // this will be for user
};

var replyChat = function(req,res){
    // this will be for admin
}


module.exports = {
    "chatList" : chatList,
    "chatDetail": chatDetail,
    "addChat": addChat,
    "deleteChat": deleteChat,
    "replyChat": replyChat
}