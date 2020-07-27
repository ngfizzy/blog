import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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