const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const {ExtendedError} = require('../public/models/ExtendedError');
const {UNAUTHORIZED} = StatusCodes;

module.exports = function (req, res, next) {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    throw new ExtendedError(UNAUTHORIZED, 'Not authenticated.');
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new ExtendedError(UNAUTHORIZED, 'Invalid token');
  }

  if (!decodedToken) {
    throw new ExtendedError(UNAUTHORIZED, 'Not authenticated');
  }
  console.log(decodedToken.user.id, 'AIDI');
  req.userId = Number(decodedToken.user.id);
  next();
}