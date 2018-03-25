var File = require('./../model/File.js');

// File list -- get
var fileList = function (req, res) {
    var query = {
        is_delete: false,
        is_status: true
    };
    File.find(query).exec(function (err, files) {
        if (err) throw err;
        if (req.body.userId && req.body.userId != '') {
            console.log(files);
            var userId = req.body.userId;
            var updFileList = [];    
            for(var i =0 ; i< files.length ; i++){
                var indexed = files[i].history.length - 1;
                console.log(userId);
                console.log(files[i].history[indexed].assignedTo);
                if(files[i].history[indexed].assignedTo == userId){
                    console.log('aaaaaaa');
                    updFileList.push(files[i]);
                }
            }
            console.log(updFileList);
            res.send(updFileList);
        } else {
            return res.send(files);    
        }

    });

};

// File Detail -- get
var fileDetail = function (req, res) {
    if (req.body.fileId && req.body.fileId != '') {
        var userId = req.body.fileId
    } else {
        return res.send('please input fileId');
    }

    File.find({
        _id: fileId,
        is_status: true,
        is_delete: false
    }).exec(function (err, file) {
        if (err) throw err;
        return res.send(file);
    });
};

// Add File -- Post
var addFile = function (req, res) {
    if (req.body.creatorId && req.body.creatorId != '') {
        var creatorId = req.body.creatorId
    } else {
        return res.send('please input User Id');
    }

    if (req.body.filename && req.body.filename != '') {
        var filename = req.body.filename
    } else {
        return res.send('please input filename');
    }

    if (req.body.fileId && req.body.fileId != '') {
        var fileId = req.body.fileId
    } else {
        return res.send('please input fileId');
    }

    if (req.body.description && req.body.description != '') {
        var description = req.body.description
    } else {
        var description = "";
    }

    if (req.body.history && req.body.history.length > 0) {
        var history = req.body.history;
    } else {
        var history = [];
    }

    var newFile = new File({
        "creatorId": creatorId,
        "filename": filename,
        "fileId": fileId,
        "description": description,
        "history": history
    });

    newFile.save(function (err, saveData) {
        if (err) throw err;

        return res.send(saveData);
    });

};

// Add history to file -- put
var updateFile = function (req, res) {
    if (req.body.fileId && req.body.fileId != '') {
        var fileId = req.body.fileId
    } else {
        return res.send('please input fileId');
    }

    if (req.body.history && req.body.history) {
        var history = req.body.history;
    } else {
        return res.send('please history');
    }

    File.find({
        "fileId": fileId
    }).exec(function (err, fileData) {
        var updHistory = fileData[0].history

        updHistory.push(history);

        File.update({
            "fileId": fileId
        }, {
            $set: {
                'history': updHistory
            }
        }, function (err, data) {
            if (err) throw err;
            return res.send(data);
        });

    })



}

// Delete File --put
var deleteFile = function (req, res) {
    if (req.body._id && req.body._id != '') {
        var fileId = req.body._id;
    } else {
        return res.send('please enter File id')
    }

    File.update({
        _id: fileId
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
var fileCount = function (req, res) {
    File.count({}, function (err, count) {
        if (err) throw err;
        res.send('count is ' + count);
    });
}

// File Status -- put
var fileStatus = function (req, res) {
    if (req.body._id && req.body._id != '') {
        var fileId = req.body._id;
    } else {
        return res.send('please enter file id')
    }

    File.update({
        _id: fileId
    }, {
        $set: {
            is_status: false
        }
    }, function (err, data) {
        if (err) throw err;
        res.send(data);
    });
}



module.exports = {
    "fileList": fileList,
    "fileDetail": fileDetail,
    "addFile": addFile,
    "updateFile": updateFile,
    "deleteFile": deleteFile,
    "fileCount": fileCount,
    "fileStatus": fileStatus
}
