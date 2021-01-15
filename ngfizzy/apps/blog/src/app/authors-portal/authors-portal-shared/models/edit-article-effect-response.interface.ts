import { Article } from '../../../shared/models';

export interface  EditArticleEffectResponse {
  articles: Article[];
  selectedArticle: Article;
  error: string;
}
