import { Injectable } from '@angular/core';
import * as fromArticle from './';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, mergeMap, map, switchMap, tap } from 'rxjs/operators';

import * as articlesActions from './articles.actions';
import { ArticlesService } from '../../core/services/articles/articles.service';
import { NextActionService } from 'src/app/core/services/next-action.service';

@Injectable()
export class ArticleEffects {
  constructor(
    private store: Store<fromArticle.ArticleState>,
    private actions$: Actions,
    private articlesService: ArticlesService,
    private nextAction: NextActionService,
  ) {}

  @Effect()
  getAllArticles$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.GetAllArticles),
    mergeMap(() =>
      this.articlesService.getAll().pipe(
        map((response) => {
          const nextActions = {
            ErrorAction: articlesActions.GetAllArticlesFailure,
            SuccessAction: articlesActions.GetAllArticlesSuccess
          };

          return this.nextAction.getNextActions(response, nextActions);
        })
      )
    )
  );

  @Effect()
  getOneArticle$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.GetOneArticle),
    map((action) => (action as articlesActions.GetOneArticle).payload),
    mergeMap((articleId) =>
      this.articlesService.getOne(articleId).pipe(
        map((article) => new articlesActions.GetOneArticleSuccess(article)),
        catchError((error) =>
          of(new articlesActions.GetOneArticleFailure(error.message))
        )
      )
    )
  );

  @Effect()
  applaud$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.Applaud),
    map((action) => (action as articlesActions.Applaud).payload),
    switchMap((payload) =>
      this.articlesService
        .applaud(payload)
        .pipe(
          map((activities) => {
            const nextActions = {
              SuccessAction: articlesActions.ApplaudSuccess,
              ErrorAction: articlesActions.ApplaudFailure
            };

            return this.nextAction.getNextActions(activities, nextActions);
          })
        )
    )
  );

  @Effect()
  addComment$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.AddComment),
    map((action) => (action as articlesActions.AddComment).payload),
    switchMap((payload) =>
      this.articlesService
        .addComment(payload)
        .pipe(
          map((activities) => {
            const nextActions = {
              ErrorAction: articlesActions.AddCommentFailure,
              SuccessAction: articlesActions.AddCommentSuccess
            };

            return this.nextAction.getNextActions(activities, nextActions)
          })
        )
    )
  );
}
