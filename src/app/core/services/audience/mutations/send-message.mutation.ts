import gql from 'graphql-tag';

export const sendMessage = gql`
  mutation sendMessage($audience: AudienceInput!, $message: String!) {
    sendMessage(audience: $audience, message: $message) {
      success
      error
    }
  }
`;
