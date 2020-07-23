const { gql } = require('apollo-server');
const articleAndRelatedModels = require('./shared');
const authorsArticlesTypeDefs = require('./authors-articles-type-defs');
const dashboardTypeDefs = require('./dashboard-type-defs');

const root = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`
const typeDefs = [
  root,
  articleAndRelatedModels,
  authorsArticlesTypeDefs,
  dashboardTypeDefs,
];

module.exports = typeDefs;
