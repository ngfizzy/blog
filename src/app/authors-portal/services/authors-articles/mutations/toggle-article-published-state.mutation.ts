import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

export const toggleArticlePublishedState = gql`
  mutation toggleArticlePublishedState($articleId: Int!) {
    toggleArticlePublishedState(articleId: $articleId) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
