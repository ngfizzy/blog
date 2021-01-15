// import { Audience, Nav } from '@ngfizzy/entities';
import { Audience, Nav } from '@ngfizzy/entities';

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
