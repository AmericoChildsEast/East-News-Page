const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const passportconf = require('../../passport');

const { validateBody, schemas } = require('../../helpers/routeHelpers');
const UsersController = require('../../controllers/users');

/*
router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);
*/

/////////////////////////////
////     Google Auth     ////
/////////////////////////////

router.get('/login', passport.authenticate('googleToken', {
    scope: ['profile'] 
}));

router.get('/redirect', passport.authenticate('googleToken'), (req, res) => {
    res.send('you have reached the callback URI');
    console.log('hey');
});

/////////////////////////////

router.route('/apanel')
    .get(passport.authenticate('jwt', {session: false}), UsersController.apanel);



module.exports = router;