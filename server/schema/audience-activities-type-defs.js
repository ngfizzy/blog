const { gql } = require('apollo-server');

const articlesTypeDefs = gql`

  input ApplaudPayload {
    applauds: Int
    articleId: Int
    audience: AudiencePayload
  }

  type AudienceActivitiesResponse {
    articleId: Int
    activities: [AudienceActivity]
    error: String
  }

  extend type Mutation {
    applaud(applaudPayload: ApplaudPayload): AudienceActivitiesResponse
  }
`;

module.exports = articlesTypeDefs;
