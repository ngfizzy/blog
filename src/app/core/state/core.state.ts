import { Audience } from 'src/app/shared/models';

export interface CoreState {
  audienceState: {
    isLoading: boolean;
    audience: Audience;
  };
}
