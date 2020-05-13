import { Article } from '../../shared/models/article.interface';
import { CoreState } from 'src/app/core/state';
import { AudienceActivity } from 'src/app/shared/models';

export interface ArticlesState extends CoreState {
  articles: Article[];
  selectedArticle: {
    article: Article;
    activitiesState: {
      isLoading: boolean;
      activities: AudienceActivity[]
    }
    isLoading: boolean;
  };
  isLoading: boolean;
}
