var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        movies: [Movie]
    },
    type Movie {
      title: String
      year: Int
      rating: Int
      actors: [Actor]
    }

    type Actor {
      name: String
      birthday: String
      country: String
      directors: [Director]
    }

    type Director {
      name: String
      birthday: String
      country: String
    }
`);

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
]

var getMovies = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return moviesData.filter(movie => movie.topic === topic);
    } else {
        return moviesData;
    }
}
var root = {
    movies: getMovies
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));