const { gql } = require('apollo-server');

const articlesTypeDefs = gql`

  extend type Query {
    getPublishedArticles: ArticlesResponse
    getOnePublishedArticle(articleId: Int!): ArticleResponse
  }
`;

module.exports = articlesTypeDefs;
