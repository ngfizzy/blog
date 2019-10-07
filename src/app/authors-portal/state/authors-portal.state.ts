import { CoreState } from 'src/app/core/state';

export interface AuthorsPortalState extends CoreState {
  dashboard: any;
  isLoading: boolean;
}
