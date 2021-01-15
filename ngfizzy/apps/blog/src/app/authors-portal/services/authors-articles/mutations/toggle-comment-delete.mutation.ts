import {gql} from 'apollo-angular';

import { audienceActivityProps } from '../../../../shared/graphql-fragments';

export const toggleCommentDelete = gql`
  mutation toggleCommentDelete($commentId: Int!) {
    toggleCommentDelete(commentId: $commentId) {
      activities {
        ...AudienceActivityProperties
      }
      articleId
      error
    }
  }

  ${audienceActivityProps}
`;
