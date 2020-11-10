import {gql} from 'apollo-angular';

import { articleFragment } from 'src/app/shared/graphql-fragments';

export const editArticleBody = gql`
  mutation editArticleBody($articleId: Int!, $value: String) {
  editArticleBody(articleId: $articleId, value: $value) {
      article {
        ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
