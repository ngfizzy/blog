const { gql } = require('apollo-server');

const dashboardTypeDefs = gql`
  extend type Query {
    getLast10Drafts: ArticlesResponse
  }
`;

module.exports = dashboardTypeDefs;
