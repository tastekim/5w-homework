const CommentRepository = require('../repositories/comments.repo');

class CommentService {
    commentRepository = new CommentRepository();

    createComment = async (postId, userId, nickname, comment) => {
        const commentData = await this.commentRepository.createComment(postId, userId, comment);
        return {
            commentId: commentData.null,
            nickname : nickname,
            comment  : commentData.comment,
            createdAt: commentData.createdAt,
            updatedAt: commentData.updatedAt,
        };
    };

    updateComment = async (commentId, comment) => {
        const commentData = await this.commentRepository.updateComment(commentId, comment);

        if (commentData === false) {
            return false;
        }
        const commentResult = await this.commentRepository.getComment(commentId);
        return {
            commentId: commentResult.commentId,
            userId   : commentResult.userId,
            comment  : commentResult.comment,
            createdAt: commentResult.createdAt,
            updatedAt: commentResult.updatedAt,
        };
    };

    deleteComment = async (commentId, userId) => {
        const commentData = await this.commentRepository.deleteComment(commentId, userId);
        return commentData;
    };

}

module.exports = CommentService;