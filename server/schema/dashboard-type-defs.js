const { gql } = require('apollo-server');

const dashboardTypeDefs = gql`
  """
  Article Statistics contains brief facts about an article
  """
  type ArticleStatistics {
    articleId: Int
    statisticsTitle: String
    articleTitle: String
    countLabel: String
    count: Int
  }

  """
  Contains summary of a category
  """
  type CategorySummary {
    categoryId: Int!
    articlesCount: Int!
    categoryName: String!
  }

  type CategoriesSummariesResponse {
    categoriesSummaries: [CategorySummary]
    error: String
  }

  type DashboardStatisticsResponse {
    mostPopularArticle: ArticleStatistics
    articleWithMostComments: ArticleStatistics
    mostLikedArticle: ArticleStatistics
    error: String
  }

  extend type Query {
    getLast10Drafts: ArticlesResponse
    getTop10Articles: ArticlesResponse
    getDashboardStatistics: DashboardStatisticsResponse
    getCategoriesSummaries: CategoriesSummariesResponse
  }
`;

module.exports = dashboardTypeDefs;
