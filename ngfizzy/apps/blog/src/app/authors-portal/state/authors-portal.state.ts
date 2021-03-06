import { CategorySummary } from './../authors-portal-shared/models/category-summary.interface';

import { CoreState } from '../../core/state/core.state';
import { Article, Category, Message } from '@ngfizzy/entities';
import { ArticleStatisticsCollection } from '../authors-portal-shared/models';

export interface AuthorsPortalState extends CoreState {
  dashboardState: {
    isLoading: boolean;
    articlesStatisticsState: {
      statistics: ArticleStatisticsCollection;
      isLoading: boolean;
      error: string,
    }
    top10ArticlesState: {
      isLoading: boolean;
      articles: Article[];
      error: string;
    };
    last10DraftsState: {
      isLoading: boolean;
      drafts: Article[];
      error: string;
    };
    categoriesSummariesState: {
      isLoading: boolean;
      error: string
      summaries: CategorySummary[];
    };
  };
  categoriesState: {
    isLoading: boolean;
    categories: Category[];
    error: string;
  };
  messagesState: {
    isLoading: boolean;
    messages: Record<string, Message>;
    error: string;
  };
  isLoading: boolean;
  isLoggedIn: boolean;
  authToken: string;
  error: string;
}
