const express = require('express');
const express_graphql = require('express-graphql');
const schema = require("./src/schema");
const resolvers = require("./src/resolvers");

// Create an express server and a GraphQL endpoint
var app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));