import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import authRouter from './routes/auth.mjs';
import userRouter from './routes/users.mjs';
import postRouter from './routes/post.mjs';
import uploadRouter from './routes/upload.js';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
env.config();
const app = express();
const post = process.env.PORT || 8000;

// データベース接続
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DBと接続中');
  })
  .catch((err) => {
    console.log(err);
  });
// ミドルウェア
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/', express.static('build'));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/upload', uploadRouter);

app.get('*', function (req, res) {
  const indexHtml = path.resolve('build', 'index.html');
  res.sendFile(indexHtml);
});

app.listen(post, () => console.log(`Server is running ... localhost:${post}`));
