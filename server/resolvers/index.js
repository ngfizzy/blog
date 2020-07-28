const dataApi = require('../data');
const authorsArticlesQueries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    ...authorsArticlesQueries,
  },
  Mutation: {
   ...mutations
  }
};

module.exports = resolvers;
