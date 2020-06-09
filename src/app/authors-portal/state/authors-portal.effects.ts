import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { map, switchMap, tap, mergeMap, exhaustMap } from 'rxjs/operators';

import { DashboardService } from './../services/dashboard.service';
import * as authorsPortalActions from './authors-portal.actions';

@Injectable()
export class AuthorsPortalEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {}

  @Effect()
  getStatistics$: Observable<Action> = this.actions$.pipe(
    ofType(
      authorsPortalActions.AuthorsPortalActionTypes
        .GetAuthorsDashboardArticlesStatistics,
    ),
    switchMap(() =>
      this.dashboardService
        .getDashboardStatistics()
        .pipe(
          map(
            statistics =>
              new authorsPortalActions.GetAuthorsDashboardArticlesStatisticsSuccess(
                statistics,
              ),
          ),
        ),
    ),
  );

  @Effect()
  getTop10Articles$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.GetTop10Articles),
    switchMap(() =>
      this.dashboardService
        .getTop10Articles()
        .pipe(
          map(
            articles =>
              new authorsPortalActions.GetTop10ArticlesSuccess(articles),
          ),
        ),
    ),
  );

  @Effect()
  getTopLast10Drafts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.GetTop10Articles),
    switchMap(() =>
      this.dashboardService
        .getLast10Drafts()
        .pipe(
          map(
            articles =>
              new authorsPortalActions.GetLast10DraftsSuccess(articles),
          ),
        ),
    ),
  );

  @Effect()
  getCategoriesSummaries$: Observable<Action> = this.actions$.pipe(
    ofType(
      authorsPortalActions.AuthorsPortalActionTypes.GetCategoriesSummaries,
    ),
    switchMap(() =>
      this.dashboardService
        .getCategoriesSummaries()
        .pipe(
          map(
            categories =>
              new authorsPortalActions.GetCategoriesSummariesSuccess(
                categories,
              ),
          ),
        ),
    ),
  );

  @Effect()
  createCategory$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.CreateCategory),
    map(action => (action as authorsPortalActions.CreateCategory).payload),
    exhaustMap(categoryName =>
      this.dashboardService
        .createCategory(categoryName)
        .pipe(
          map(result => new authorsPortalActions.CreateCategorySuccess(result)),
        ),
    ),
  );
}
