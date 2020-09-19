import { CoreState } from '../core/state';
import { Article } from '../shared/models/article.interface';

export interface SharedStoreState extends CoreState {
  featuredArticlesState: {
    isLoading: boolean;
    articles: Article[];
    error: string;
  }
}
