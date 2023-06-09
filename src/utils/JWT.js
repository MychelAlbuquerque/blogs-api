const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET);

module.exports = {
  generateToken,
};
