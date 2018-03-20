// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var chatSchema = new Schema({
    userId : {
        type: Schema.Types.ObjectId,
        required: true
    },
    fileId : {
        type: Schema.Types.ObjectId,
        required: true
    },
    officerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comment:{
      type: String,
      required: true
    },
    reply:{
      type: String,
      required: true
    },
    is_status:{
        type: Boolean,
        required: true,
        default: false
    },
    is_delete:{
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
        type: Date,
        required: true,
        default: true
    },
    updated_at: {
        type: Date,
        required: true,
        default: true
    }
});

// the schema is useless so far
// we need to create a model using it
var Chat = mongoose.model('Chat', chatSchema);

// make this available to our users in our Node applications
module.exports = Chat;