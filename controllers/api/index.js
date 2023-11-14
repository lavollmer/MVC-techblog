const express = require('express');

const router = require('express').Router();

//controller files
const userRoutes = require('./user-routes')
const commentRoutes = require('./comment-routes')
const articleRoutes = require('./article-routes')

//routes for api
router.get('/user', userRoutes)
router.get('/comment', commentRoutes)
router.get('/article', articleRoutes)

//export routes
module.exports = router;