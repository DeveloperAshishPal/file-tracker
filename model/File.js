// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var historySchema = new Schema({
    assignedFrom : {
        type: Schema.Types.ObjectId,
        required: true
    },
    assignedTo : {
        type: Schema.Types.ObjectId,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    status : {
        type: String,
        enum: ['processed','processing','recieved','completed','improper'],
        required: true,
        default: 'recieved'
    }
},{ _id : false });

// create a schema
var fileSchema = new Schema({
    creatorId : {
        type: Schema.Types.ObjectId,
        required: true
    },
    description : {
        type: String,
        required: false
    },
    filename : {
        type: String,
        required: true
    },
    history : {
        type: [historySchema],
        required: false
    },
    fileId : {
        type: String,
        required: true,
        unique: true
    },
    is_status:{
        type: Boolean,
        required: true,
        default: true,
    },
    is_delete:{
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// the schema is useless so far
// we need to create a model using it
var File = mongoose.model('File', fileSchema);

// make this available to our users in our Node applications
module.exports = File;
