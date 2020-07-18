import { Article } from 'src/app/shared/models';

export interface  EditArticleEffectResponse {
  articles: Article[];
  selectedArticle: Article;
  error: string;
}
