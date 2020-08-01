import { ArticlesResponse, ArticleResponse } from './responses';

export interface GetPublishedArticlesResponse {
  getPublishedArticles: ArticlesResponse;
}
export interface GetOnePublishedArticleResponse {
  getOnePublishedArticle: ArticleResponse;
}
