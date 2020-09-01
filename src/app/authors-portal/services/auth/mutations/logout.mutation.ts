import gql from 'graphql-tag';

export const logout = gql`
  mutation logout($authToken: String) {
    logout(authToken: $authToken) {
      success
      error
    }
  }
`;
