const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema( {

    // Save Email
    googleid: {
        type:       String,
        required:   true,
        unique:     true,
    },
    name: {
        type:       String,
        default:    '',
    },
    group: {
        type:       Number,
        default:    0,
    }

})

module.exports = Post = mongoose.model('user', PostSchema);