import { Article } from 'src/app/shared/models';

export interface  CreateArticleEffectResponse {
  article: Article;
  error: string;
}
