import { Article } from '../../shared/models/article.interface';
import { CoreState } from 'src/app/core/state';

export interface ArticlesState extends CoreState {
  articles: Article[];
  selectedArticle: {
    article: Article;
    isLoading: boolean;
  };
  isLoading: boolean;
}
