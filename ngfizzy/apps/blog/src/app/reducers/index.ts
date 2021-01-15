import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromCore from '../core/state';
import { coreReducer } from '../core/state/core.reducers';

interface State {
  app: fromCore.CoreState;
}
export const reducers: ActionReducerMap<State> = {
  app: coreReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
