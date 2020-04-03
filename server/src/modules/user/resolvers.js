const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users: () => {
      return prisma.user.findMany();
    },
  },

  Mutation: {
    addUser: (parent, user) => {
      console.log('PARENT', parent);
      console.log('USER', user);
    },
  },
};

module.exports = resolvers;
