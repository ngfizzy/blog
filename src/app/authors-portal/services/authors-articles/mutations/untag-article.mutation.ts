import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

export const untagArticle = gql`
  mutation untagArticle($articleId: Int!, $tagId: Int!) {
    untagArticle(articleId: $articleId, tagId: $tagId) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
