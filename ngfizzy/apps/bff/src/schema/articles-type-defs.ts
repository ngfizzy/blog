import { gql } from 'apollo-server';

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

export default articlesTypeDefs;
