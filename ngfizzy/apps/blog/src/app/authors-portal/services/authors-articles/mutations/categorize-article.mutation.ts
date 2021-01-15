import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

export const categorizeArticle = gql`
  mutation categorizeArticle($articleId: Int!, $categoryName: String!) {
    categorizeArticle(articleId: $articleId, categoryName: $categoryName) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
