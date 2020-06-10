import { Audience, Nav } from 'src/app/shared/models';

export interface CoreState {
  title: string;
  navState: {
    isLoading: boolean;
    nav: Nav;
  };
  audienceState: {
    isLoading: boolean;
    audience: Audience;
  };
}
