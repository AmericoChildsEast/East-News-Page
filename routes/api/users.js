const express = require('express');
const router = express.Router();

// Item Model
const User = require('../../models/users');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
})

router.post('/', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        admin: req.body.admin
    });

    newUser.save()
        .then( users => res.json(users) );
})

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then( users => users.remove().then( () => res.json({success: true}) ))
        .catch(err => res.status(404).json({success: false}))
})

module.exports = router;