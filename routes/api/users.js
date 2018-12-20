const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/users');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
})

module.exports = router;