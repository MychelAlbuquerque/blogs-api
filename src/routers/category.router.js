const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/category.controller');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/', tokenValidation, categoryController.addCategory);
// router.get('/', tokenValidation, userController.getAllUsers);
// router.get('/:id', tokenValidation, userController.getUserById);

module.exports = router;