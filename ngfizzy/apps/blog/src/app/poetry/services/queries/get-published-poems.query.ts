import {gql} from 'apollo-angular';

import { articleFragment } from '../../../shared/graphql-fragments';

export const getPublishedPoems = gql`
  query getPublishedPoems {
    getPublishedPoems {
      poems {
        ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
