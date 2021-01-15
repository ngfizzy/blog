import { gql } from 'apollo-server';

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

  type CategoryCreationResponse {
    categories: [Category]
    categoriesSummaries: [CategorySummary]
    createdCategory: Category
    error: String
  }

  type DashboardStatisticsResponse {
    mostPopularArticle: ArticleStatistics
    articleWithMostComments: ArticleStatistics
    mostLikedArticle: ArticleStatistics
    error: String
  }

  type MessagesResponse {
    messages: [Message]
    error: String
  }

  extend type Query {
    getLast10Drafts: ArticlesResponse
    getTop10Articles: ArticlesResponse
    getFeaturedArticles: ArticlesResponse
    getDashboardStatistics: DashboardStatisticsResponse
    getCategoriesSummaries: CategoriesSummariesResponse
    getMessages: MessagesResponse
  }

  extend type Mutation {
    createCategory(categoryName: String!): CategoryCreationResponse
  }
`;

export default dashboardTypeDefs;
