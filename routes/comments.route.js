const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comments.controller');
// const AuthMiddleware = require('../middlewares/auth-middleware');

const commentController = new CommentController();

router.post('/:postId', commentController.createComment);
router.put('/:commentId', commentController.updateComment);
router.delete('/:commentId', commentController.deleteComment);


module.exports = router;