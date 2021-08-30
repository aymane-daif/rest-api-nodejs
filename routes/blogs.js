const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogs');

router.route('/').get(getAllBlogs).post(createBlog);
router.route('/:id').get(getSingleBlog).delete(deleteBlog).patch(updateBlog);

module.exports = router;
