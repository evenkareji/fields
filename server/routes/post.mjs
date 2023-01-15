import express from 'express';
const router = express.Router();
import Post from '../models/Post.mjs';
import User from '../models/User.mjs';

// 投稿
router.post('/', async (req, res) => {
  try {
    const newPost = await new Post(req.body);

    const result = await newPost.save();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// 全投稿
router.get('/', async (req, res) => {
  try {
    const result = await Post.find();
    console.log(result);

    res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// 投稿編集api
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      res.status(200).json('投稿編集に成功しました');
    } else {
      return res.status(200).json('あなたは他人の投稿に編集できません');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
// 投稿削除api
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json('投稿編集に成功しました');
    } else {
      return res.status(200).json('あなたは他人の投稿を削除できません');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
// 投稿取得
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// いいねを押す
router.put('/:id/like', async (req, res) => {
  try {
    let isLike = false;
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: { likes: req.body.userId },
      });
      isLike = true;
      console.log(isLike);
      return res.status(200).json(isLike);
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      isLike = false;
      console.log(isLike);
      return res.status(200).json(isLike);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// タイムライン未完成の投稿を取得
router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    // User._id ==== Post.userId
    const userPosts = await Post.find({ userId: currentUser._id });
    return res.status(200).json(userPosts);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// プロフィールタイムラインを取得
router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
