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

var usersData = [];

var sessionsData = {
};

const getMovies = function() {
  return moviesData;
};

var createUser = function({username, password, name}) {
  name = !!name ? name : username
  let user = {username, password, id: uuid(), name}
  usersData.push(user)
  let token = uuid()
  return {token, user}
};

const resolvers = {
    movies: getMovies,
    createUser: createUser
};

module.exports = resolvers;