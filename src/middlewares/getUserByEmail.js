const { User } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = {
  getUserByEmail,
};
