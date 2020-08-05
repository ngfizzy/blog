import gql from 'graphql-tag';

export const findAudience = gql`
  query findAudience($audience: Int) {
    findAudience(audience: $audience) {
      id
      email
      audience
      deviceUUID
    }
  }
`;
