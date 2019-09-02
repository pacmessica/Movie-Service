const uuid = require('uuid/v4');

var moviesData = [
    {
      title: "Edward Scissorhands",
      year: 1993,
      rating: 5,
      actors: [{
          name: "Johnny Depp",
          birthday: "1979-03-06T00:00:00.000Z",
          country: "USA",
          directors: [{
            name: "Mr Director",
            birthday: "1973-11-10T23:00:00.000Z",
            country: "Canada"
        }]
      }]
    }
];

var usersData = {
};

var sessionsData = {
};

const getMovies = function() {
  return moviesData;
};

var createUser = function({username, password, name}) {
  if (!username || !password) {
    throw new Error("missing required field username or password")
  }
  if (usersData[username]) {
    throw new Error("username already exists")
  }
  let user = {username, password, id: uuid(), name: !!name ? name : username}
  usersData[username] = user
  let token = uuid()
  return {token, user}
};

var login = function({username, password}) {
  if (!username || !password) {
    throw new Error("missing required field username or password")
  }
  let user = usersData[username]
  if (!user) {
    throw new Error("user not found")
  }
  if (user.password !== password) {
    throw new Error("incorrect password")
  }
  let token = uuid()
  return {token, user}
};

const resolvers = {
    movies: getMovies,
    createUser: createUser,
    login: login
};

module.exports = resolvers;