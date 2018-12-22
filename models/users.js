const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema( {

    // Save Email
    email: {
        type:       String,
        required:   true,
        unique:     true,
        lowercase:  true,
    },
    firstname: {
        type:       String,
        default:    '',
    },
    lastname: {
        type:       String,
        default:    '',
    },
    group: {
        type:       Number,
        default:    0,
    }

})

module.exports = User = mongoose.model('user', UserSchema);