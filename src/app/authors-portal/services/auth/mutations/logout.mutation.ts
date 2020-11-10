import {gql} from 'apollo-angular';


export const logout = gql`
  mutation logout($authToken: String) {
    logout(authToken: $authToken) {
      success
      error
    }
  }
`;
