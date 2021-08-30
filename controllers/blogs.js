const blog = require('../model/blog');

const getAllBlogs = async (req, res) => {
  const blogs = await blog.find({});
  res.json(blogs);
};

const getSingleBlog = async (req, res) => {
  let { id } = req.params;
  const singleBlog = await blog.findById(id);
  res.json(singleBlog);
};

const createBlog = async (req, res) => {
  const singleBlog = await blog.create(req.body);
  res.json(singleBlog);
};

const deleteBlog = async (req, res) => {
  let { id } = req.params;
  await blog.findByIdAndDelete(id);
  res.send(`The blog with id ${id} has been deleted successfully`);
};

const updateBlog = async (req, res) => {
  let { id } = req.params;
  const updatedBlog = await blog.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.json(updatedBlog);
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
