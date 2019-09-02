const uuid = require('uuid/v4');
const User = require("./models/user");

var usersData = {
};

var sessionsData = {
};

const createNewUser = function({username, password, name}) {
  if (usersData[username]) {
    throw new Error("username already exists")
  }
  let id = uuid()
  var user = new User(id, username, password, name);
  // TODO encrypt password
  usersData[username] = user
  return user
};

const getUserByUsername = function({username}) {
  let user = usersData[username]
  if (!user) {
    throw new Error("user not found")
  }
  return user
};

const createUserSession = function({username}) {
  let user = usersData[username]
  if (!user) {
    throw new Error("user not found")
  }
  let token = uuid() // TODO make more secure
  sessionsData[token] = username
  return token
};

const isValidToken = function({token}) {
  console.log("[isValidToken] called")
  if (!token) {
    return false
  }
  let session = sessionsData[token]

  if (!session) {
    return false
  }
  return true
};

module.exports = {getUserByUsername, createNewUser, createUserSession, isValidToken};