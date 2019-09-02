const {getUserByUsername, createNewUser} = require('./storage/user')
const {getAllMovies} = require('./storage/movies')
const uuid = require('uuid/v4');

const createUser = function({username, password, name}) {
  if (!username || !password) {
    throw new Error("missing required field username or password")
  }

  let user = createNewUser({username, password, name})
  let token = uuid()
  // TODO save token
  return {token, user}
};

const login = function({username, password}) {
  if (!username || !password) {
    throw new Error("missing required field username or password")
  }

  let user = getUserByUsername({username, password})
  // TODO save token
  let token = uuid()
  return {token, user}
};

const getMovies = function() {
  let movies = getAllMovies()
  return movies;
};

const resolvers = {
    movies: getMovies,
    createUser: createUser,
    login: login
};

module.exports = resolvers;