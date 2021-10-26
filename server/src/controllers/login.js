const Login = require('../services/login');

const login = async (req, res) => {
  const { status, data, message } = await Login.login(req.body);
  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  login,
};