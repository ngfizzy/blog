import { Article } from './../../shared/models/article.interface';
import { ArticleStatistics } from './../authors-portal-shared/models/article-statistics.interface';
import { CoreState } from './../../core/state/core.state';

export interface AuthorsPortalState extends CoreState {
  dashboardState: {
    isLoading: boolean;
    articlesStatistics: ArticleStatistics[];
    top10ArticlesState: {
      isLoading: boolean;
      articles: Article[];
    };
  };
  isLoading: boolean;
}
