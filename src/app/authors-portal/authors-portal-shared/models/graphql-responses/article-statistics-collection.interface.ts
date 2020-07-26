import { ArticleStatistics } from '../article-statistics.interface';

export interface ArticleStatisticsCollection {
  mostPopularArticle: ArticleStatistics,
  articleWithMostComments: ArticleStatistics
  mostLikedArticle: ArticleStatistics
  error?: string
}
