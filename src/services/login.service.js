const { User } = require('../models');

const findUser = async (email, password) => {
  const userFound = await User.findOne({ where: { email, password } });
  return userFound;
};

module.exports = {
  findUser,
};