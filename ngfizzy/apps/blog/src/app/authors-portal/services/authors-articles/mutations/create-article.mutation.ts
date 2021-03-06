import {gql} from 'apollo-angular';


import { articleFragment } from '../../../../shared/graphql-fragments';

export const createArticle = gql`
  mutation createArticle($title: String!, $body: String!) {
    createArticle(title: $title, body: $body) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
