const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema( {

   // Save GoogleID
    googleid: {
        type:       String,
        required:   true,
        unique:     true,
    },
    // Saving the name
    name: {
        type:       String,
        default:    '',
    },
    // Saving the group
    group: {
        type:       Number,
        default:    0,
    },
    email: {
        type:       String,
        default:    '',
    }

})

module.exports = User = mongoose.model('user', UserSchema);