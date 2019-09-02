const moviesData = [
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

const getMovies = function() {
  return moviesData;
};

const resolvers = {
    movies: getMovies
};

module.exports = resolvers;