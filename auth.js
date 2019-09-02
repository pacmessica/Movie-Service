const {isValidToken} = require("./src/storage/user");

module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    req.isLoggedIn = false;
    next();
  }

  req.isLoggedIn = isValidToken({token});

  next();
};