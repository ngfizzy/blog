const { gql } = require('apollo-server');

const articlesTypeDefs = gql`

  extend type Query {
    getPublishedArticles: ArticlesResponse
  }
`;

module.exports = articlesTypeDefs;
