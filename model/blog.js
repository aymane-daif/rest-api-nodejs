const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
});

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;
