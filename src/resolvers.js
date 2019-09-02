const {loginUser, createNewUser, createUserSession} = require('./storage/user');
const {getAllMovies} = require('./storage/movies');

const getResolvers = function(request) {

  const createUser = function({username, password, name}) {
    if (!username || !password) {
      throw new Error("missing required field username or password")
    }

    let user = createNewUser({username, password, name})
    let token = createUserSession({username})
    return {token, user}
  };

  const login = function({username, password}) {
    if (!username || !password) {
      throw new Error("missing required field username or password")
    }

    let user = loginUser({username, password})
    let token = createUserSession({username})
    return {token, user}
  };

  const getMovies = function() {
    let movies = getAllMovies()
    if (!request.isLoggedIn) {
      return movies
    }

    // add random value string for scoutbase rating
    return movies.map(function (movie) {
      let moveWithRating = Object.assign({}, movie)
      moveWithRating.scoutbase_rating = (Math.random()*5 + 5).toFixed(1)
      return moveWithRating
    });
  };

  return {
      movies: getMovies,
      createUser: createUser,
      login: login
  };
};

module.exports = getResolvers;