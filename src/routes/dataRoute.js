import express from 'express';
import {
  getAllData,
  getData,
  createData,
  updateData,
  deleteData,
} from '../controllers/dataController.js';

const dataRouter = express.Router();

dataRouter.get('/data', getAllData);
dataRouter.get('/data/:id', getData);
dataRouter.post('/data', createData);
dataRouter.patch('/data/:id', updateData);
dataRouter.delete('/data/:id', deleteData);

export default dataRouter;
