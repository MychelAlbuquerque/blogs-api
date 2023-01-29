const { findUser } = require('../services/login.service');

const dataValidation = require('../middlewares/dataValidation');
const { generateToken } = require('../utils/JWT');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const fieldsValidation = dataValidation(email, password);
  if (fieldsValidation) return res.status(400).json({ message: fieldsValidation });

  const user = await findUser(email, password);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  const payload = { email };
  const token = generateToken(payload);
  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};
