const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogs = require('./routes/blogs');
require('dotenv').config();
app.use(express.json());
app.use('/api/v1/blogs', blogs);

const PORT = process.env.PORT || 8000;
const con = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    app.listen(PORT, () => console.log('listening...'));
  } catch (error) {
    console.log(error);
  }
};
con();
