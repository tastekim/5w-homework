const CommentService = require('../services/comment.service');

class CommentController {
    commentService = new CommentService();

    createComment = async (req, res) => {
        const {user} = res.locals;
        const {comment} = req.body;
        const {postId} = req.params;

        const commentData = await this.commentService.createComment(postId, user.userId, user.nickname, comment);
        res.status(200).json(commentData);
    };

    updateComment = async (req, res) => {
        const {comment} = req.body;
        const {commentId} = req.params;

        const commentData = await this.commentService.updateComment(commentId, comment);
        res.status(200).json(commentData);

    };

    deleteComment = async (req, res) => {
        const {user} = res.locals;
        const {commentId} = req.params;

        const commentData = await this.commentService.deleteComment(commentId, user.userId);

        if (commentData === false) {
            return res.status(400).json({message: "작성자 본인만 삭제할 수 있습니다."})
        }
        res.status(200).json({message: "삭제 완료."})
    };
}

module.exports = CommentController;