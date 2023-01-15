const router = require('express').Router();
const multer = require('multer');

router.get('/', (req, res) => {
  console.log('h');
  res.send('upload');
});

// POSTMANが使えないからhttpでできる方法探すかやらずに動画どうり実行するか

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
// 画像アップロードAPI

router.post('/', upload.single('file'), (req, res) => {
  try {
    console.log('成功');
    return res.status(200).json('画像アップロードに成功しました');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
