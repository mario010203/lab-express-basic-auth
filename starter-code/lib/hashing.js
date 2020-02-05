const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const hashPassword = text => {
  const hash = bcrypt.hashSync(text, salt);
  return hash;
};

const checkHashed = (password, existingUserPass) => bcrypt.compareSync(password, existingUserPass);

module.exports = {
  hashPassword,
  checkHashed
};
