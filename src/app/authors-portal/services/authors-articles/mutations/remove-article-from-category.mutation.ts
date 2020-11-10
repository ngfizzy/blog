import {gql} from 'apollo-angular';

import { articleFragment } from 'src/app/shared/graphql-fragments';

export const removeArticleFromCategory = gql`
  mutation removeArticleFromCategory($articleId: Int!, $categoryId: Int!) {
    removeArticleFromCategory(articleId: $articleId, categoryId: $categoryId) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
