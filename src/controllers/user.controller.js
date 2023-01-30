const userValidation = require('../middlewares/userValidation');
const { getUserByEmail } = require('../middlewares/getUserByEmail');
const { generateToken } = require('../utils/JWT');
const { createUser } = require('../services/user.service');

const userController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { error } = userValidation({ displayName, email, password, image });
  if (error) return res.status(400).json({ message: error.message });

  const userRegistered = await getUserByEmail(email);
  if (userRegistered) return res.status(409).json({ message: 'User already registered' });

  const newUser = await createUser(displayName, email, password, image);

  const payload = {
    user: newUser.displayName,
  };

  const token = generateToken(payload);
  return res.status(201).json({ token });
};

module.exports = {
  userController,
};
