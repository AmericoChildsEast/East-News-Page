const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const passportconf = require('../../passport');

const { validateBody, schemas } = require('../../helpers/routeHelpers');
const UsersController = require('../../controllers/users');

///////////////////
///   Utility   ///
///////////////////

// Login
router.route('/login')
    .post(UsersController.signUp);

// Promote User
router.route('/promote')
    .post(UsersController.promoteGroup);

// Demote User
router.route('/demote')
    .post(UsersController.demoteGroup);

///////////////////
///   Returns   ///
///////////////////

// Return JSON object of users
router.route('/getusers')
    .post(UsersController.getUsers);


module.exports = router;