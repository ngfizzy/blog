import {gql} from 'apollo-angular';


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
