import { Article } from 'src/app/shared/models';

export interface ArticlesResponse {
  articles: Article[];
  error: string;
}

export interface ArticleResponse {
  article: Article;
  error: string;
}
