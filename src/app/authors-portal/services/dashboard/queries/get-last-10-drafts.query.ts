import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/graphql-fragments';

export const getLast10Drafts = gql`
  query getLast10Drafts {
    getLast10Drafts {
      articles {
      ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
