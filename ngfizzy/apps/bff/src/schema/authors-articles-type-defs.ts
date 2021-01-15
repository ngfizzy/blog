import { gql } from 'apollo-server';

const authorsArticlesTypeDefs = gql`
  type ArticleMutationResponse {
    article: Article
    error: String
  }

  type ArticlesMutationResponse {
    articles: [Article]
    error: String
  }

  extend type Query {
    getOneArticle(id: Int!): ArticleResponse
    getAllArticles: ArticlesResponse
  }

  extend type Mutation {
    createArticle(title: String!, body: String!): ArticleMutationResponse
    deleteArticle(articleId: Int!): ArticlesMutationResponse
    addThemeImage(articleId: Int!, themeImageUrl: String): ArticleMutationResponse
    editArticleBody(articleId: Int!, value: String): ArticleMutationResponse
    editArticleTitle(articleId: Int!, value: String): ArticleMutationResponse
    tagArticle(articleId: Int!, tagName: String!): ArticleMutationResponse
    untagArticle(articleId: Int!, tagId: Int!): ArticleMutationResponse
    categorizeArticle(articleId: Int!, categoryName: String!): ArticleMutationResponse
    removeArticleFromCategory(articleId: Int!, categoryId: Int!): ArticleMutationResponse
    toggleArticlePublishedState(articleId: Int!): ArticleMutationResponse
  }
`;

export default authorsArticlesTypeDefs;
