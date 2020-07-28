import { ArticlesResponse } from './responses/articles-response.interface';
import { ArticleStatisticsCollection } from './responses/article-statistics-collection.interface';
import { CategoriesSummariesResponse } from './responses/categories-summaries-response.interface';

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
