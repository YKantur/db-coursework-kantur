import handleError from '../utils/handleError.js';
import {
  deleteCommentById,
  insertComment,
  selectCommentById,
  selectComments,
} from '../models/commentModel.js';

export const getAllComments = async (req, res) => {
  try {
    const comments = await selectComments();
    return res.status(200).json(comments);
  } catch (error) {
    handleError(res, error);
  }
};

export const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await selectCommentById(id);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    return res.status(200).json(comment);
  } catch (error) {
    handleError(res, error);
  }
};

export const createComment = async (req, res) => {
  try {
    const { content, User_id, Data_id } = req.body;

    if (!content || !User_id || !Data_id) {
      return res.status(400).json({ message: 'Required data missing' });
    }

    const commentId = await insertComment(content, User_id, Data_id);

    return res
      .status(200)
      .json({ message: 'Comment created successfully', commentId: commentId });
  } catch (error) {
    handleError(res, error);
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedComment = await deleteCommentById(id);

    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    return res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    handleError(res, error);
  }
};
