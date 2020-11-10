import {gql} from 'apollo-angular';

import { articleFragment } from 'src/app/shared/graphql-fragments';

export const articlesQuery = gql`
  {
    getAllArticles {
      articles {
      ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
