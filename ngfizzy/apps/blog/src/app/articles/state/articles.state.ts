import { Article } from '@ngfizzy/entities';
import { CoreState } from '../../core/state';
import { AudienceActivity } from '@ngfizzy/entities';

export interface ArticlesState extends CoreState {
  articles: Article[];
  selectedArticle: {
    article: Article;
    activitiesState: {
      isLoading: boolean;
      error: string;
      activities: AudienceActivity[]
    }
    isLoading: boolean;
  };
  error: string;
  isLoading: boolean;
}
