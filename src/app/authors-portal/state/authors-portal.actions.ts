import { Action } from '@ngrx/store';

export const enum AuthorsPortalActionTypes {
  GetDashboard = '[Authors] Get Dashboard',
  GetDashboardSuccess = '[Authors] Get Dashboard Success',
}

export class GetDashboard implements Action {
  readonly type = AuthorsPortalActionTypes.GetDashboard;

  constructor() {}
}

export class GetDashboardSuccess implements Action {
  readonly type = AuthorsPortalActionTypes.GetDashboardSuccess;

  constructor(public payload: any) {}
}


export type AuthorsPortalActions =
| GetDashboard
| GetDashboardSuccess;
