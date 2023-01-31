const { BlogPost, User, Category } = require('../models');

const getAllBlogPosts = async (req, res) => {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  return res.status(200).json(allBlogPosts);
};

module.exports = {
  getAllBlogPosts,
};