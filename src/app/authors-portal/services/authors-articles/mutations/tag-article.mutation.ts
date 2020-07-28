import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/graphql-fragments';

export const tagArticle = gql`
  mutation tagArticle($articleId: Int!, $tagName: String!) {
    tagArticle(articleId: $articleId, tagName: $tagName) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
