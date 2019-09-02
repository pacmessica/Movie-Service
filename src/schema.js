const { buildSchema } = require('graphql');

const schema = buildSchema(`
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

module.exports = schema;