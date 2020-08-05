const { gql } = require('apollo-server');

const articlesTypeDefs = gql`

  input ApplaudPayload {
    applauds: Int
    articleId: Int
    audience: AudienceInput
  }

  input CommentPayload {
    articleId: Int
    comment: String
    audience: AudienceInput
  }

  type AudienceActivitiesResponse {
    articleId: Int
    activities: [AudienceActivity]
    error: String
  }

  extend type Mutation {
    applaud(applaudPayload: ApplaudPayload): AudienceActivitiesResponse
    addComment(commentPayload: CommentPayload): AudienceActivitiesResponse
  }
`;

module.exports = articlesTypeDefs;
