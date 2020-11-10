import { Article } from 'src/app/shared/models/article.interface';
import { AuthorsPortalState } from '../../state';

export interface AuthorsArticlesState extends AuthorsPortalState {
  isLoading: boolean;
  isArticlesListLoading: boolean;
  articles: Article[];
  error: string;
  selectedArticle: {
    article: Article;
    isLoading: boolean;
    status: 'saved' | 'erred' | 'saving';
  };
}
