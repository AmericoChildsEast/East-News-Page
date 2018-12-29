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
    signUp: async (req, res, next) => {

        // import config for "madison.k12.wi.us domain"
        const domain = require('../config/keys').EMAILDOMAIN; 
        // Passing req (var) as data (var)
        const data = req; 
        
        // User's GoogleID
        const googleId = data.body.googleId 
        // Check if user is using a MMSD email
        if( !(data.body.email.search(domain) == -1) ) {
            // Search database for user with same googleID
            const foundUser = await User.findOne({ googleid: googleId }); 
            // If we found someone just return their JWT token
            if ( foundUser ) {
                const token = signToken(data.body.accessToken);
                res.json({ token: token } );
            } else {
                // If we can't find user, create a new one
                const newUser = new User({
                    googleid: googleId, // Saves googleID
                    name: data.body.name, // Saves user's name
                })
                await newUser.save(); // Save user
                // Once we finish creating the user, return the JWT token
                const token = signToken(data.body.accessToken); 
                res.json({ token: token } );
            }
        } else {
            // If the user isn't using a MMSD email respond with an error
            res.status(403).send({ error: 'You must be within the MMSD school district!'});
        }

    },

    promoteGroup: async (req, res, next) => {
        
        const uid = req.body.uid; // User's id
        const tid = req.body.tid; // Target's id

        const fuser = await User.findOne({ googleid: uid }); // Find user
        const ftarget = await User.findOne({ googleid: tid }); // Find target

        if ( uid == tid ) { res.status(403).send({ error: 'You cannot target yourself' }); }
        // If user exists
        if( fuser ) {
            // If target exists
            if( ftarget ) {
                // If user can promote
                if ( fuser.group > 1 ) {
                    // Ensure target isn't max rank
                    if ( ftarget.group >= 2 ) {
                        res.status(403).send({ error: 'Target already has max rank' });
                    } else {
                        // New rank number
                        const newgroup = ftarget.group + 1;
                        // Do the deed
                        console.log(ftarget.id);

                        await User.findByIdAndUpdate( ftarget.id, { group: newgroup }, ( err, res ) => {
                            console.log(err);
                        });

                        await ftarget.save();

                        res.json({ message: 'promoted ' + ftarget.name });

                    }

                } else {
                    res.status(403).send({ error: 'You do not have perms to promote' });
                }

            } else {
                res.status(404).send({ error: 'User that you are targeting does not exist' });
            }

        } else {
            res.status(404).send({ error: 'Apparently you do not exist...' });
        }


    },

    demoteGroup: async (req, res, next) => {

        const uid = req.body.uid; // User's id
        const tid = req.body.tid; // Target's id

        const fuser = await User.findOne({ googleid: uid }); // Find user
        const ftarget = await User.findOne({ googleid: tid }); // Find target

        //if ( uid == tid ) { res.status(403).send({ error: 'You cannot target yourself' }); }
        // If user exists
        if( fuser ) {
            // If target exists
            if( ftarget ) {
                // If user can demote
                if ( fuser.group > 1 ) {
                    // Ensure target isn't min rank
                    if ( ftarget.group < 1 ) {
                        res.status(403).send({ error: 'Target already has min rank' });
                    } else {
                        // New rank number
                        const newgroup = ftarget.group - 1;
                        // Do the deed
                        console.log(ftarget.id);

                        await User.findByIdAndUpdate( ftarget.id, { group: newgroup }, ( err, res ) => {
                            console.log(err);
                        });

                        await ftarget.save();

                        res.json({ message: 'demoted ' + ftarget.name });

                    }

                } else {
                    res.status(403).send({ error: 'You do not have perms to demote' });
                }

            } else {
                res.status(404).send({ error: 'User that you are targeting does not exist' });
            }

        } else {
            res.status(404).send({ error: 'Apparently you do not exist...' });
        }
        
    },

    getUsers: async (req, res, next) => {

        const users = await User.find();
        
        res.json({ users });

    },
    
}