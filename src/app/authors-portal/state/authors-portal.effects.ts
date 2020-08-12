import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard/dashboard.service';
import * as authorsPortalActions from './authors-portal.actions';
import { MessagesService } from '../services/messages/messages.service';
import { NextActionService } from 'src/app/core/services/next-action.service';

@Injectable()
export class AuthorsPortalEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private messagesService: MessagesService,
    private nextActionsService: NextActionService
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
          map(response => {
            const nextEffects = {
              ErrorEffect: authorsPortalActions.GetAuthorsDashboardArticlesStatisticsError,
              SuccessEffect: authorsPortalActions.GetAuthorsDashboardArticlesStatisticsSuccess
            };

            return this.emitEffectResult(response, nextEffects);
          }),
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
            result => {
              const nextEffect = {
                ErrorEffect: authorsPortalActions.GetTop10ArticlesError,
                SuccessEffect: authorsPortalActions.GetTop10ArticlesSuccess,
              };

              return this.emitEffectResult(result, nextEffect);
          }),
        ),
    ),
  );

  @Effect()
  getLast10Drafts$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.GetTop10Articles),
    switchMap(() =>
      this.dashboardService
        .getLast10Drafts()
        .pipe(
          map(result => {
            const nextEffects = {
              ErrorEffect: authorsPortalActions.GetLast10DraftsError,
              SuccessEffect: authorsPortalActions.GetLast10DraftsSuccess
            };

            return this.emitEffectResult(result, nextEffects);
          }),
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
            categories => {
              const nextEffects = {
                SuccessEffect: authorsPortalActions.GetCategoriesSummariesSuccess,
                ErrorEffect: authorsPortalActions.GetCategoriesSummariesError,
              };

              return this.emitEffectResult(categories, nextEffects);
            }
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
          map(result => {
            const nextEffects = {
              SuccessEffect: authorsPortalActions.CreateCategorySuccess,
              ErrorEffect: authorsPortalActions.CreateCategoryError,
            };

            return this.emitEffectResult(result, nextEffects);
          }),
        ),
    ),
  );

  @Effect()
  getMessages$: Observable<Action> = this.actions$.pipe(
    ofType(authorsPortalActions.AuthorsPortalActionTypes.GetMessages),
    switchMap(() => this.messagesService.getMessagesAsMap()
      .pipe(
        map(res => {
          const nextActions = {
            SuccessAction: authorsPortalActions.GetMessagesSuccess,
            ErrorAction: authorsPortalActions.GetMessagesError
          };

          return this.nextActionsService.getNextActions(res, nextActions);
        })
      )
    )
  )

  private emitEffectResult(result, { ErrorEffect, SuccessEffect }) {
    if (result.error) {
      return new ErrorEffect(result.error);
    }

    return new SuccessEffect(result);
  }
}
