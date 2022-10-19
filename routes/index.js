const express = require('express');
const router = express.Router();
const CommentsRouter = require('./comments.route');
const PostsRouter = require('./posts');
const UserRouter = require('./users.route');

router.use('/comments', CommentsRouter);
router.use('/posts', PostsRouter);
router.use('/users', UserRouter);

module.exports = router;