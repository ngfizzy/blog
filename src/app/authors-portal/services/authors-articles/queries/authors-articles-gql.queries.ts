import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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
