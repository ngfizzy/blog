import gql from 'graphql-tag';
import { articleFragment } from 'src/app/shared/gql-fragments';

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
