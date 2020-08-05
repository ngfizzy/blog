const { gql } = require('apollo-server');

const articlesTypeDefs = gql`
  type AudienceResponse {
    audience: Audience
    error: String
  }

  extend type Query {
    findAudience(audience: AudienceInput): AudienceResponse
  }
`;

module.exports = articlesTypeDefs;
