import gql from 'graphql-tag';

export const getMessages = gql`
  query getMessages {
    getMessages {
      messages {
        id
        read
        message
        audienceId
        email
        name
        createdAt
      },
      error
    }
  }
`;
