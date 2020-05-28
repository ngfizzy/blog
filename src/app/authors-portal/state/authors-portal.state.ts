import { ArticleStatistics } from './../authors-portal-shared/models/article-statistics.interface';
import { CoreState } from './../../core/state/core.state';

export interface AuthorsPortalState extends CoreState {
  dashboardState: {
    isLoading: boolean;
    articlesStatistics: ArticleStatistics[];
  };
  isLoading: boolean;
}
