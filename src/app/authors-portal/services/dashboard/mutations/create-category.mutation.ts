import {gql} from 'apollo-angular';


import { categoryPropsFragment } from 'src/app/shared/graphql-fragments';
import { categorySummaryPropsFragment } from 'src/app/authors-portal/authors-portal-shared/graphql-fragments';

export const createCategory = gql`
  mutation createCategory($categoryName: String!) {
    createCategory(categoryName: $categoryName) {
      categoriesSummaries {
        ...CategorySummaryProperties
      }
      categories {
        ...CategoryProperties
      }
      createdCategory {
        ...CategoryProperties
      }
      error
    }
  }
  ${categorySummaryPropsFragment}
  ${categoryPropsFragment}
`;
