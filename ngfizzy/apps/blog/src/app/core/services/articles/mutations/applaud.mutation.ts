import {gql} from 'apollo-angular';

import { audienceActivityProps } from '../../../../shared/graphql-fragments';

export const applaud = gql`

  mutation applaud($applaudPayload: ApplaudPayload) {
    applaud(applaudPayload: $applaudPayload) {
      articleId
      activities {
        ...AudienceActivityProperties
      }
      error
    }
  }
  ${audienceActivityProps}
`;
