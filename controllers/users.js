const JWT = require('jsonwebtoken');
const User = require('../models/users');
const { JWT_SECRET } = require('../config/keys')

signToken = (user) => {
    return JWT.sign({
        iss: 'MadisonEast',
        sub: user,
    }, JWT_SECRET);
}

module.exports = {
    signUp: async (id, res, next) => {
        console.log('UsersController.signup() called');

        const data = id;
        const domain = require('../config/keys').EMAILDOMAIN;
        
        const googleId = data.body.googleId

        console.log(data.body.email.search("madison.k12.wi.us"));

        if( !(data.body.email.search("madison.k12.wi.us") == -1) ) {
            const foundUser = await User.findOne({ googleid: googleId });
            if ( foundUser ) {
                const token = signToken(id.body.accessToken);
                res.json({ token: token } );
            } else {
                const newUser = new User({
                    googleid: googleId,
                    name: data.body.name,
                })
                await newUser.save();

                const token = signToken(id.body.accessToken);
                res.json({ token: token } );
            }
        } else {
            res.status(403).send({ error: 'You must be within the MMSD school district!'});
        }
            
        /*
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
        */
    },
    signIn: (id) => {
        const token = signToken(id);
        return token;
    },
    apanel: async (req, res, next) => {
        console.log('UsersController.apanel() called');
    }
}