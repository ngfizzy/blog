import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as fromCore from '../core/state';

type State = fromCore.CoreState;

export const reducers: ActionReducerMap<State> = {
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
