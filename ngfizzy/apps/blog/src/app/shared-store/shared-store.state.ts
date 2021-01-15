import { CoreState } from '../core/state';
import { Article } from '@ngfizzy/entities';

export interface SharedStoreState extends CoreState {
  featuredArticlesState: {
    isLoading: boolean;
    articles: Article[];
    error: string;
  };
}
