const { gql } = require('apollo-server');
const articleAndRelatedModels = require('./shared');
const authorsArticlesTypeDefs = require('./authors-articles-type-defs');
const articlesTypeDefs = require('./articles-type-defs');
const dashboardTypeDefs = require('./dashboard-type-defs');
const audienceActivitiesTypeDefs = require('./audience-activities-type-defs');
const audienceTypeDefs = require('./audience-type-defs');

const root = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const typeDefs = [
  root,
  articlesTypeDefs,
  audienceTypeDefs,
  audienceActivitiesTypeDefs,
  articleAndRelatedModels,
  authorsArticlesTypeDefs,
  dashboardTypeDefs,
];

module.exports = typeDefs;
