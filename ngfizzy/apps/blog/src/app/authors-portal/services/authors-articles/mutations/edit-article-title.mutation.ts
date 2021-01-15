import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

export const editArticleTitle = gql`
  mutation editArticleTitle($articleId: Int!, $value: String) {
    editArticleTitle(articleId: $articleId, value: $value) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
