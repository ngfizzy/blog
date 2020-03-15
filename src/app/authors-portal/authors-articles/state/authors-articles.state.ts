import { Article } from 'src/app/shared/models/article.interface';

export interface AuthorsArticlesState {
  isLoading: boolean;
  articles: Article[];

  selectedArticle: {
    article: Article;
    isLoading: boolean;
    status: 'saved' | 'erred' | 'saving';
  };
}
