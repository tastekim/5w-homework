const {Comments} = require('../models');

class CommentRepository {
    createComment = async (postId, userId, comment) => {
        const commentData = await Comments.create({postId, userId, comment});
        return commentData;
    };

    getComments = async (postId) => {
        const postComments = await Comments.findAll({
            where: {postId},
            order: [['createdAt', 'DESC']],
        });
        return postComments;
    };

    getComment = async (commentId) => {
        const commentResult = await Comments.findByPk(commentId);
        return commentResult;
    };

    updateComment = async (commentId, comment) => {
        const commentData = await Comments.update({
                comment
            },
            {
                where: {commentId},
            });
        return commentData;
    };

    deleteComment = async (commentId, userId) => {
        const commentData = await Comments.findByPk(commentId);

        if (commentData.userId !== userId) {
            return false;
        }

        const commentResult = await Comments.destroy({
            where: {commentId},
        });
        return commentResult;
    };
}

module.exports = CommentRepository;