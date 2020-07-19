import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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
