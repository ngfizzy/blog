import gql from 'graphql-tag';

import { articleFragment } from 'src/app/shared/graphql-fragments';

export const getPublishedArticles = gql`
  query getPublishedArticles {
    getPublishedArticles {
      articles {
        ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;