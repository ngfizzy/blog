import gql from 'graphql-tag';

import { articleFragment } from '../../../../shared/gql-fragments';

export const createArticle = gql`
  mutation createArticle($title: String!, $body: String!) {
    createArticle(title: $title, body: $body) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
