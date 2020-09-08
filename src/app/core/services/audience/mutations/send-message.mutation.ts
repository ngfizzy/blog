import {gql} from 'apollo-angular';


export const sendMessage = gql`
  mutation sendMessage($audience: AudienceInput!, $message: String!) {
    sendMessage(audience: $audience, message: $message) {
      success
      error
    }
  }
`;
