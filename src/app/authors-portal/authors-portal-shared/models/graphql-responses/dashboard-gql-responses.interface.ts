import {
  ArticlesResponse,
  ArticleStatisticsCollection,
   CategoriesSummariesResponse,
   CategoryCreationResponse
} from './responses';

export interface GetLast10DraftsResponse {
  getLast10Drafts: ArticlesResponse;
}

export interface GetTop10ArticlesResponse {
  getTop10Articles: ArticlesResponse;
}

export interface GetDashboardStatisticsResponse {
  getDashboardStatistics: ArticleStatisticsCollection;
}

export interface GetCategoriesSummariesResponse {
  getCategoriesSummaries: CategoriesSummariesResponse;
}

export interface CreateCategoryResponse {
  createCategory: CategoryCreationResponse;
}
