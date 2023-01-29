const dataValidation = (email, password) => {
  if (!email || !password) {
    return 'Some required fields are missing';
  }
  return null;
};

module.exports = dataValidation;
