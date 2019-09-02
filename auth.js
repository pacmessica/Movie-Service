const {isValidToken} = require("./src/storage/user");


module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  console.log("got token", {token})

  if (!token) {
    req.isLoggedIn = false;
    next();
  }

  req.isLoggedIn = isValidToken({token});

  console.log("eq.isLoggedIn", req.isLoggedIn)

  next();
};