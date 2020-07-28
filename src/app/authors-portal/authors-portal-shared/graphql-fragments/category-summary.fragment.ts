import gql from 'graphql-tag';

export const categorySummaryPropsFragment = gql`
fragment CategorySummaryProperties on CategorySummary {
  categoryId
  articlesCount
  categoryName
}
`;
