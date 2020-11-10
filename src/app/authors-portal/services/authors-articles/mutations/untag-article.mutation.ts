import {gql} from 'apollo-angular';

import { articleFragment } from 'src/app/shared/graphql-fragments';

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
