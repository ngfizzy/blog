const { gql } = require('apollo-server');

const articleAndRelatedModels = gql`
  type Audience {
    id: Int
    email: String
    audienceName: String
    deviceUUID: String
  }

  input AudienceInput{
    id: Int
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
    publishedAt: String
    unpublishedAt: String
    tags: [Tag]
    categories: [Category]
  }

  """
  ArticlesResponse
  """
  type ArticlesResponse {
    articles: [Article]
    error: String
  }

  """
  ArticleResponse
  """
  type ArticleResponse {
    article: Article
    error: String
  }
`;

module.exports = articleAndRelatedModels;
