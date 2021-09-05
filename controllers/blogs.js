const blog = require('../model/blog');

const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await blog.find({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

const getSingleBlog = async (req, res) => {
  try {
    let { id } = req.params;
    const singleBlog = await blog.findById(id);
    res.json(singleBlog);
  } catch (error) {
    next(error);
  }
};

const createBlog = async (req, res) => {
  try {
    const singleBlog = await blog.create(req.body);
    res.json(singleBlog);
  } catch (error) {
    next(error);
  }
};

const deleteBlog = async (req, res) => {
  try {
    let { id } = req.params;
    await blog.findByIdAndDelete(id);
    res.send(`The blog with id ${id} has been deleted successfully`);
  } catch (error) {
    next(error);
  }
};

const updateBlog = async (req, res) => {
  try {
    let { id } = req.params;
    const updatedBlog = await blog.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
