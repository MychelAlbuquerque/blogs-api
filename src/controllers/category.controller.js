const categoryService = require('../services/category.service');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });

  const newCategory = await categoryService.addCategory(name);
  return res.status(201).json(newCategory);
};
module.exports = {
  addCategory,
};
