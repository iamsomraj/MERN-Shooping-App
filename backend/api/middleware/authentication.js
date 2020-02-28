const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token, process.env.JWT_ENV || 'jwt123');
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message
    });
  }
};
