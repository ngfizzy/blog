import {gql} from 'apollo-angular';

import { audienceActivityProps } from 'src/app/shared/graphql-fragments';

export const addComment = gql`

  mutation addComment($commentPayload: CommentPayload) {
    addComment(commentPayload: $commentPayload) {
      articleId
      activities {
        ...AudienceActivityProperties
      }
      error
    }
  }
  ${audienceActivityProps}
`;
