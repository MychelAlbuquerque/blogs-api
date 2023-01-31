const categoryService = require('../services/category.service');
const { Category } = require('../models');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });

  const newCategory = await categoryService.addCategory(name);
  return res.status(201).json(newCategory);
};

const getAllcategories = async (req, res) => {
  const allcategories = await Category.findAll();
  return res.status(200).json(allcategories);
};

module.exports = {
  addCategory,
  getAllcategories,
};
