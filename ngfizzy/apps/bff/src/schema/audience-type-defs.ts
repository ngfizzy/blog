import { gql } from 'apollo-server';

const articlesTypeDefs = gql`
  type AudienceResponse {
    audience: Audience
    error: String
  }

  extend type Query {
    findAudience(audience: AudienceInput): AudienceResponse
  }
`;

export default articlesTypeDefs;
