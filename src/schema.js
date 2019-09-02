const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        movies: [Movie]
    },
    type Mutation {
        createUser(username: String, password: String): Session
        login(username: String, password: String): Session
    }
    type User {
      id: String
      name: String
    }
    type Session {
      token: String
      user: User
    }

    type Movie {
      title: String
      year: Int
      rating: Int
      actors: [Actor]
      scoutbase_rating: String
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