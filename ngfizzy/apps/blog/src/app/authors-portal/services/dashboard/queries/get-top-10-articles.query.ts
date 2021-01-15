import {gql} from 'apollo-angular';

import { articleFragment } from '../../../../shared/graphql-fragments';

export const getTop10Articles = gql`
  query getTop10Articles {
    getTop10Articles {
      articles {
      ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
