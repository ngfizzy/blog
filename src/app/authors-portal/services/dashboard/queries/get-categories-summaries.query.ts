import gql from 'graphql-tag';

export const getCategoriesSummaries = gql`
  query getCategoriesSummaries {
    getCategoriesSummaries {
      categoriesSummaries {
        categoryId
        articlesCount
        categoryName
      }
      error
    }
  }
`;
