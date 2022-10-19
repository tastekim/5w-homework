const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comments.controller');
const AuthMiddleware = require('../middlewares/auth-middlewares');

const commentController = new CommentController();

router.post('/:postId',AuthMiddleware, commentController.createComment);
router.put('/:commentId',AuthMiddleware, commentController.updateComment);
router.delete('/:commentId',AuthMiddleware, commentController.deleteComment);


module.exports = router;