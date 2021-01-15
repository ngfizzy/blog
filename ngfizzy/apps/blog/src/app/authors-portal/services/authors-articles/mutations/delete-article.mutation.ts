import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

export const deleteArticle = gql`
  mutation deleteArticle($articleId: Int!) {
    deleteArticle(articleId: $articleId) {
      articles {
        ...ArticleProperties
      },
      error
    }
  }
  ${articleFragment}
`;
