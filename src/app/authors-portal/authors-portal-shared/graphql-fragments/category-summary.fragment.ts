import {gql} from 'apollo-angular';


export const categorySummaryPropsFragment = gql`
fragment CategorySummaryProperties on CategorySummary {
  categoryId
  articlesCount
  categoryName
}
`;
