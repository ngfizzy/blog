import {gql} from 'apollo-angular';


import { categorySummaryPropsFragment } from '../../../authors-portal-shared/graphql-fragments';
import { categoryPropsFragment } from '../../../../shared/graphql-fragments';

export const getCategoriesSummaries = gql`
  query getCategoriesSummaries {
    getCategoriesSummaries {
      categoriesSummaries {
        ...CategorySummaryProperties
      }
      error
    }
  }
  ${categorySummaryPropsFragment}
`;
