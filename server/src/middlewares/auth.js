const jwt = require('jsonwebtoken');

const { MESSAGE_INVALID_TOKEN, JWT_SECRET } = require('../database');

const auth = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(400).json(MESSAGE_INVALID_TOKEN);

  try {
    const { data } = jwt.verify(token, JWT_SECRET);
    req.user = data;
    return next();
  } catch (_e) {
    return res.status(400).json(MESSAGE_INVALID_TOKEN);
  }
};

module.exports = {
  auth,
};