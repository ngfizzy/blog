import { CategorySummary } from './../authors-portal-shared/models/category-summary.interface';

import { CoreState } from './../../core/state/core.state';
import { Article, Category } from 'src/app/shared/models';
import { ArticleStatistics } from '../authors-portal-shared/models';

export interface AuthorsPortalState extends CoreState {
  dashboardState: {
    isLoading: boolean;
    articlesStatistics: ArticleStatistics[];
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
      summaries: CategorySummary[];
    };
  };
  categoriesState: {
    isLoading: boolean;
    categories: Category[];
  };
  isLoading: boolean;
}
