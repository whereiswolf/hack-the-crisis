const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/modules/user/graphqlSchema');
const resolvers = require('./src/modules/user/resolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log('Unicorns at: 3000');
});
