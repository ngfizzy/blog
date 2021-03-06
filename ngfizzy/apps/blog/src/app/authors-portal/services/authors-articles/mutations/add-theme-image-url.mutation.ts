import {gql} from 'apollo-angular';
import { articleFragment } from '../../../../shared/graphql-fragments';

export const addThemeImage = gql`
  mutation addThemeImage($articleId: Int!, $themeImageUrl: String) {
    addThemeImage(articleId: $articleId, themeImageUrl: $themeImageUrl) {
      article {
        ...ArticleProperties
      }
      error
    }
  }

  ${articleFragment}
`;
