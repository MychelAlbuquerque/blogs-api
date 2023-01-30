const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');
const tokenValidation = require('../middlewares/tokenValidation');

router.post('/', userController.addNewUser);
router.get('/', tokenValidation, userController.getAllUsers);
router.get('/:id', tokenValidation, userController.getUserById);

module.exports = router;