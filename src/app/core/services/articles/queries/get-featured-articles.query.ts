import { gql } from 'apollo-angular';
import { articleFragment } from 'src/app/shared/graphql-fragments';

export const getFeaturedArticles = gql`
  query getFeaturedArticles {
    getFeaturedArticles {
      articles {
        ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
