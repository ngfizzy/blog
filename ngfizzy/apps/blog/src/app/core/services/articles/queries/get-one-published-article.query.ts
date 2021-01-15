import {gql} from 'apollo-angular';


import { articleFragment } from '../../../../shared/graphql-fragments';

export const getOnePublishedArticle = gql`
  query getOnePublishedArticle($articleId: Int!) {
    getOnePublishedArticle(articleId: $articleId) {
      article {
        ...ArticleProperties
      }
      error
    }
  }
  ${articleFragment}
`;
