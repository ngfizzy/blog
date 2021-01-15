import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

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
