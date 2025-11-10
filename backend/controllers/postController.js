const Post = require('../models/Post');

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({
      title,
      content,
      author: req.user._id,
    });

    const populatedPost = await Post.findById(post._id)
      .populate('author', 'username')
      .populate('comments.author', 'username');

    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate('author', 'username')
      .populate('comments.author', 'username')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Add comment to post
// @route   POST /api/posts/:id/comments
// @access  Private
const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const post = await Post.findById(req.params.id);

    if (post) {
      const comment = {
        content,
        author: req.user._id,
      };

      post.comments.push(comment);
      await post.save();

      const updatedPost = await Post.findById(post._id)
        .populate('author', 'username')
        .populate('comments.author', 'username');

      res.status(201).json(updatedPost);
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createPost, getPosts, addComment };