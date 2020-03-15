import { Article } from '../../shared/models/article.interface';

export interface ArticlesState {
  articles: Article[];
  selectedArticle: {
    article: Article;
    isLoading: boolean;
  };
  isLoading: boolean;
}
