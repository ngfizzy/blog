const { gql } = require('apollo-server');

const dashboardTypeDefs = gql`
  type ArticleStatistics {
    articleId: Int
    statisticsTitle: String
    articleTitle: String
    countLabel: String
    count: Int
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
  }
`;

module.exports = dashboardTypeDefs;
