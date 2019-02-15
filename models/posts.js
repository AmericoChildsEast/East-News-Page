const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema( {

    // Save Date
    date: {
        type:       String,
        required:   true,
    },
    // Save googleID of user
    author: {
        type:       String,
        required:   true,
    },
    title: {
        type:       String,
        required:   true,
    },
    header: {
        type:       String,
        default:    '',
    },
    body: {
        type:       String,
        default:    '',
    },
    approval: {
        type:       Boolean,
        default:    false,
    },
    edit: {
        type:       String,
    }

})

module.exports = Post = mongoose.model('posts', PostSchema);