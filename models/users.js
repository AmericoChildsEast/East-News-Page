const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema( {

    // Save Email
    email: {
        type:       String,
        required:   true,
    },
    name: {
        type:       String,
    },
    admin: {
        type: Boolean,
        default: false,
    }

})

module.exports = User = mongoose.model('user', UserSchema);