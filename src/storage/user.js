const uuid = require('uuid/v4');
const User = require("./models/user");
const bcrypt = require("bcrypt");

var usersData = {};
var sessionsData = {};

const createNewUser = function({username, password, name}) {
  if (usersData[username]) {
    throw new Error("username already exists")
  }
  let id = uuid()

  encryptedPassword = bcrypt.hashSync(password, 12);
  var user = new User(id, username, encryptedPassword, name);

  usersData[username] = user
  return user
};

const loginUser = function({username, password}) {
  let user = usersData[username]
  if (!user) {
    throw new Error("user not found")
  }

  let match = bcrypt.compareSync(password, user.password);
  if (!match) {
    throw new Error("incorrect password")
  }

  return user
};

const createUserSession = function({username}) {
  let user = usersData[username]
  if (!user) {
    throw new Error("user not found")
  }
  let token = uuid()
  sessionsData[token] = username
  return token
};

const isValidToken = function({token}) {
  if (!token) {
    return false
  }
  let session = sessionsData[token]

  if (!session) {
    return false
  }
  return true
};

module.exports = {loginUser, createNewUser, createUserSession, isValidToken};