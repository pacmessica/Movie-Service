const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./src/schema");
const getResolvers = require("./src/resolvers");
const auth = require("./auth");

var app = express();

app.use(auth)

app.use(
  '/graphql',
  graphqlHTTP(async (request, response, graphQLParams) => ({
    schema: schema,
    rootValue: await getResolvers(request),
    graphiql: true,
  })),
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));