import { Article } from '@ngfizzy/entities';
import { BaseResponse } from './base-response.interface';

export interface ArticlesResponse extends BaseResponse {
  articles: Article[];
}

export interface ArticleResponse extends BaseResponse {
  article: Article;
}
