const express = require('express');
const { createPost, getPosts, addComment } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, createPost)
  .get(getPosts);

router.post('/:id/comments', protect, addComment);

module.exports = router;