import {gql} from 'apollo-angular';


export const login = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      error
    }
  }
`;
