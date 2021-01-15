import { Article } from '../../../../shared/models';
import { BaseResponse } from './base-response.interface';

export interface ArticlesResponse extends BaseResponse {
  articles: Article[];
}

export interface ArticleResponse extends BaseResponse {
  article: Article;
}
