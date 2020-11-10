import { Article } from 'src/app/shared/models';
import { BaseResponse } from './base-response.interface';

export interface ArticlesResponse extends BaseResponse {
  articles: Article[];
}

export interface ArticleResponse extends BaseResponse {
  article: Article;
}
