import { Injectable } from '@angular/core';
import * as fromArticle from './';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { catchError, mergeMap, map, switchMap } from 'rxjs/operators';

import * as articlesActions from './articles.actions';
import { ArticlesService } from '../../core/articles.service';


@Injectable()
export class ArticleEffects {
  constructor(
    private store: Store<fromArticle.ArticleState>,
    private actions$: Actions,
    private articlesService: ArticlesService) {}

  @Effect()
  getAllArticles$: Observable<Action>  = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.GetAllArticles),
    mergeMap(() => this.articlesService.getAll().pipe(
        map(articles => new articlesActions.GetAllArticlesSuccess(articles)),
        catchError(error => of(new articlesActions.GetAllArticlesFailure(error.message)))
    )),
  );

  @Effect()
  getOneArticle$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.GetOneArticle),
    map(action => (action as articlesActions.GetOneArticle).payload),
    mergeMap((articleId) => this.articlesService.getOne(articleId)
      .pipe(
        map((article) => new articlesActions.GetOneArticleSuccess(article)),
        catchError((error) => of(new articlesActions.GetOneArticleFailure(error.message)))
      ),
    ),
  );

  @Effect()
  applaud$: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.Applaud),
    map(action => (action as articlesActions.Applaud).payload),
    switchMap(payload => this.articlesService.applaud(payload)
      .pipe(
        map((activities) => new articlesActions.ApplaudSuccess(activities))
      ))
  );
}
