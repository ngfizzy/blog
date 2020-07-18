import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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