const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowcaseSchema = new Schema( {

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

module.exports = ShowcaseSchema = mongoose.model('showcase', ShowcaseSchema);