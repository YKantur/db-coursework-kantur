import express from 'express';
import dataRouter from './routes/dataRoute.js';
import commentRouter from './routes/commentRoute.js';

const app = express();

app.use(express.json());

app.use('/api', dataRouter);
app.use('/api', commentRouter);

export default app;
