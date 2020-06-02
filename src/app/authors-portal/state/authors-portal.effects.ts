import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { DashboardService } from './../services/dashboard.service';
import * as authorsPortalActions from './authors-portal.actions';

@Injectable()
export class AuthorsPortalEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
  ) {}

  // @Effect()
  // getArticles$: Observable<Action> = this.actions$.pipe(
  //   ofType(authorsPortalActions.AuthorsPortalActionTypes.GetArticles),
  //   mergeMap(() =>
  //     this.articlesService
  //       .getAllArticles()
  //       .pipe(
  //         map(
  //           (articles) => new authorsPortalActions.GetArticlesSuccess(articles)
  //         )
  //       )
  //   )
  // );

  // @Effect()
  // createArticles$: Observable<Action> = this.actions$.pipe(
  //   ofType(authorsPortalActions.AuthorsPortalActionTypes.CreateArticleSuccess),
  //   mergeMap((article) =>
  //     this.articlesService
  //       .createArticle(article)
  //       .pipe(
  //         map(
  //           (createdArticle) =>
  //             new authorsPortalActions.CreateArticleSuccess(createdArticle)
  //         )
  //       )
  //   )
  // );

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
            authors =>
              new authorsPortalActions.GetTop10ArticlesSuccess(authors),
          ),
        ),
    ),
  );
}
