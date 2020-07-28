import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/graphql-fragments';

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
