const express = require('express');

const router = require('express').Router();

//controller files
const userRoutes = require('./user-routes')
const commentRoutes = require('./comment-routes')
const articleRoutes = require('./article-routes')
const signupRoutes = require('./signup')

//routes for api
router.get('/user', userRoutes)
router.get('/comment', commentRoutes)
router.get('/article', articleRoutes)
router.get('/signup', signupRoutes)

//export routes
module.exports = router;