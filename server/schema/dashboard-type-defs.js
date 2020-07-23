const { gql } = require('apollo-server');

const dashboardTypeDefs = gql`
  extend type Query {
    getLast10Drafts: ArticlesResponse,
    getTop10Articles: ArticlesResponse
  }
`;

module.exports = dashboardTypeDefs;
