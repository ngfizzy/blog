import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

export const toggleArticlePublishedState = gql`
  mutation toggleArticlePublishedState($articleId: Int!) {
    toggleArticlePublishedState(articleId: $articleId) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
