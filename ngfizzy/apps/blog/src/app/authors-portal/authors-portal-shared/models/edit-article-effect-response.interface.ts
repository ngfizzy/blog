import { Article } from '@ngfizzy/entities';

export interface  EditArticleEffectResponse {
  articles: Article[];
  selectedArticle: Article;
  error: string;
}
