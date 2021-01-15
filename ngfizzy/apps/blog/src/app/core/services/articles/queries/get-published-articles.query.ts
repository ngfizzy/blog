import {gql} from 'apollo-angular';


import { articleFragment } from '../../../../shared/graphql-fragments';

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
