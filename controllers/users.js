const JWT = require('jsonwebtoken');
const User = require('../models/users');
const { JWT_SECRET } = require('../config/keys')

signToken = (user) => {
    return JWT.sign({
        iss: 'MadisonEast',
        sub: user.id,
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signup() called');

        const { email, fn, ln, g } = req.value.body;

        const foundUser = await User.findOne({ email });

        if( foundUser ) { 
            return res.status(403).send({ error:'Email already in use'});
        }

        const newUser = new User({
            email: email,
            firstname: fn,
            lastname: ln,
            group: g
        })

        await newUser.save();

        const token = signToken(newUser);

        res.json({ token: token} );
    },
    signIn: async (req, res, next) => {
        console.log('UsersController.signin() called');
    },
    apanel: async (req, res, next) => {
        console.log('UsersController.apanel() called');
    }
}