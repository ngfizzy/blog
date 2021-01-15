// import { Audience, Nav } from '../../shared/models';
import { Audience, Nav } from '../../shared/models';

export interface CoreState {
  title: string;
  navState: {
    isLoading: boolean;
    nav: Nav;
  };
  audienceState: {
    isLoading: boolean;
    audience: Audience;
    contacted?: boolean;
  };
}
