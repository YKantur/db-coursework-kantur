import express from 'express';
import {
  getAllComments,
  getComment,
  createComment,
  deleteComment,
} from '../controllers/commentController.js';

const commentRouter = express.Router();

commentRouter.get('/comment', getAllComments);
commentRouter.get('/comment/:id', getComment);
commentRouter.post('/comment', createComment);
commentRouter.delete('/comment/:id', deleteComment);

export default commentRouter;
