import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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
