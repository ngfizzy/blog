import { ArticlesResponse } from './articles-response.interface';
import { ArticleStatisticsCollection } from './article-statistics-collection.interface';

export interface GetLast10DraftsResponse {
  getLast10Drafts: ArticlesResponse;
}

export interface GetTop10ArticlesResponse {
  getTop10Articles: ArticlesResponse;
}

export interface GetDashboardStatisticsResponse {
  getDashboardStatistics: ArticleStatisticsCollection;
}
