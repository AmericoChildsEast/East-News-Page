const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./config/keys');

const JWT = require('./controllers/users');

const User = require('./models/users');

/*
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);
        if (!user) {
            return done(null, false);
        }

        done(null, user);
    } catch( err ) {
        done(err, false);
    }
}));
*/

passport.use( 'googleToken', new GoogleStrategy({
    clientID: '726864255809-1eo7pss12cu502n01rvobtq72ns8ah32.apps.googleusercontent.com',
    clientSecret: 'e1haB9ArsXKzcBEMuVbOJiK8',
    callbackURL: "http://tolocalhost.com/util/redirect", //
}, async (request, accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    User.findOne({ googleid: profile.id })
        .then((current) => {
            if( current ){
                console.log('user is: ' + current )
            } else {
                new User({
                    googleid: profile.id,
                    name: profile.displayName
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser );
                })
            }
        });

        const token = await JWT.signIn(profile.id);

        console.log("======== This is: " + token );
    done( null );
}));