const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const passportconf = require('../../passport');
const ArticlesController = require('../../controllers/articles');

router.route('/newarticle')
    .post(ArticlesController.addArticle);

router.route('/delarticle')
    .post(ArticlesController.removeArticle);

router.route('/editarticle')
    .post(ArticlesController.editArticle);

router.route('/approvearticle')
    .post(ArticlesController.editArticle);

module.exports = router;