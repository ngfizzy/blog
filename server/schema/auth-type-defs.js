const { gql } = require('apollo-server');


const authTypeDefs = gql`
  type TokenResponse {
    token: String
    error: String
  }

  type LogoutResponse {
    success: String
    error: String
  }

  extend type Mutation {
    """
      Login with username and password
    """
    login(username: String!, password: String!): TokenResponse
    logout(authToken: String): LogoutResponse
  }
`;

module.exports = authTypeDefs;
