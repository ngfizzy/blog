const { gql } = require('apollo-server');

const typeDefs = gql`
  type Audience {
    id: Int!
    email: String
    audienceName: String
    deviceUUID: String!
  }


  """
  Audience Comment
  """
  type Comment {
    id: Int!
    articleId: Int!
    audienceId: Int!
    comment: String
    createdAt: String
  }


  """
  AudienceApplauds and Comments
  """
  type AudienceActivity {
    id: Int!
    articleId: Int!
    audience: Audience!
    applauds: Int
    createdAt: String
    comments: [Comment]
  }


  """
  Category
  """
  type Category {
    id: Int!
    name: String!
    createdAt: String
    updatedAt: String
  }

  """
  Tags
  """
  type Tag {
    id: Int!
    name: String!
    createdAt: String
    updatedAt: String
  }


  """
  Article
  """
  type Article {
    id: Int!
    authorId: Int!
    themeImage: String
    audienceActivities: [AudienceActivity]
    createdAt: String
    updatedAt: String
    title: String
    body: String
    deletedAt: String
    published: Boolean
    tags: [Tag]
    categories: [Category]
  }

  type ArticleMutationResponse {
    article: Article
    error: String
  }

  type ArticlesMutationResponse {
    articles: [Article]
    error: String
  }

  type Query {
    article(id: Int!): Article
    articles: [Article]
  }

  type Mutation {
    createArticle(title: String!, body: String!): ArticleMutationResponse
    deleteArticle(articleId: Int!): ArticlesMutationResponse
    editArticleBody(articleId: Int!, value: String): ArticleMutationResponse
    editArticleTitle(articleId: Int!, value: String): ArticleMutationResponse
    tagArticle(articleId: Int!, tagName: String!): ArticleMutationResponse
    untagArticle(articleId: Int!, tagId: Int!): ArticleMutationResponse
    categorizeArticle(articleId: Int!, categoryName: String!): ArticleMutationResponse
    removeArticleFromCategory(articleId: Int!, categoryId: Int!): ArticleMutationResponse
    toggleArticlePublishedState(articleId: Int!): ArticleMutationResponse
  }
`;

module.exports = {
  typeDefs
};


