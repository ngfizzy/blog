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

  type Query {
    article(id: Int!): Article
    articles: [Article]
  }

  type Mutation {
    createArticle(title: String, body: String): Article
    editArticleBody(articleId: Int!, value: String): Article
    editArticleTitle(articleId: Int!, value: String): Article
    tagArticle(value: String, articleId: Int!): Article
    untagArticle(value: String, articleId: Int!): Article
    categorizeArticle(articleId: Int!, value: String): Article
    removeArticleFromCategory(articleId: Int!, value: String): Article
    toggleArticlePublishedState(articleId: Int!): Article
  }
`;

module.exports = {
  typeDefs
};


