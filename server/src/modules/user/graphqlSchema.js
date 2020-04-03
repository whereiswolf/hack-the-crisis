const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int
    email: String
    firstName: String
    lastName: String
  }
  type Query {
    users: [User]
  }
  type Mutation {
    addUser(email: String!, firstName: String!, lastName: String!): User
  }
`;

module.exports = typeDefs;
