const jwt = require('jsonwebtoken');
const Schema = require('../utils/schemas');
const User = require('../models/users');

const { JWT_SECRET, JWT_CONFIG } = require('../database');

const login = async (data) => {
  const { error } = Schema.login.validate(data);
  if (error) return { status: 400, message: 'Invalid entries!' };

  const { email, password } = data;
  const user = await User.findByEmail(email);
  if (!user) return { status: 404, message: 'User not found!' };

  if (!user.password === password) return { status: 400, message: 'Email or password invalid!' };
  const { password: _, ...newUser } = user;

  const token = jwt.sign({ data: newUser }, JWT_SECRET, JWT_CONFIG);
  return { status: 200, data: { token } };
};

module.exports = {
  login,
};