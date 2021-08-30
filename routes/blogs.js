const express = require('express');
const router = express.Router();
const blog = require('../model/blog');

router.route('/').get(async (req, res) => {
  const blogs = await blog.find({});
  res.json(blogs);
});
router.route('/:id').get(async (req, res) => {
  let { id } = req.params;
  const singleBlog = await blog.findById(id);
  res.json(singleBlog);
});

router.route('/').post(async (req, res) => {
  const singleBlog = await blog.create(req.body);
  res.json(singleBlog);
});
router.route('/:id').delete(async (req, res) => {
  let { id } = req.params;
  await blog.findByIdAndDelete(id);
  res.send(`The blog with id ${id} has been deleted successfully`);
});
router.route('/:id').patch(async (req, res) => {
  let { id } = req.params;
  const updatedBlog = await blog.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.json(updatedBlog);
});
module.exports = router;
