import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/graphql-fragments';

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