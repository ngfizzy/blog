const { gql } = require('apollo-server');

const articlesTypeDefs = gql`


  type PoemsResponse {
    poems: [Article]
    error: String
  }

  extend type Query {
    getPublishedArticles: ArticlesResponse
    getPublishedPoems: PoemsResponse
    getOnePublishedArticle(articleId: Int!): ArticleResponse
  }
`;

module.exports = articlesTypeDefs;
