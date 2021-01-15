import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

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
