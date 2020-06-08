import { Audience } from 'src/app/shared/models';

export interface CoreState {
  title: string;
  audienceState: {
    isLoading: boolean;
    audience: Audience;
  };
}
