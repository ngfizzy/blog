import { CategorySummary } from './../authors-portal-shared/models/category-summary.interface';

import { CoreState } from './../../core/state/core.state';
import { Article } from 'src/app/shared/models';
import { ArticleStatistics } from '../authors-portal-shared/models';

export interface AuthorsPortalState extends CoreState {
  dashboardState: {
    isLoading: boolean;
    articlesStatistics: ArticleStatistics[];
    top10ArticlesState: {
      isLoading: boolean;
      articles: Article[];
    };
    last10DraftsState: {
      isLoading: boolean;
      drafts: Article[];
    };
    categoriesSummariesState: {
      isLoading: boolean;
      summaries: CategorySummary[];
    };
  };
  isLoading: boolean;
}
