const express = require('express');
const router = express.Router();
const CommentsRouter = require('./comments.route');
const PostsRouter = require('./comments.route');
const UserRouter = require('./users.route');

router.use('/comment', CommentsRouter);
router.use('/post', PostsRouter);
router.use('/', UserRouter);

module.exports = router;