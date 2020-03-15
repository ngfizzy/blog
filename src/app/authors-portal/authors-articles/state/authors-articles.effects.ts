import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, switchMap } from 'rxjs/operators';

import { AuthorsArticlesService } from '../../authors-articles.service';
import * as authorsArticlesActions from './authors-articles.actions';
import { Article } from 'src/app/shared/models';

@Injectable()
export class AuthorsArticlesEffects {

  constructor(
    private actions$: Actions,
    private articlesService: AuthorsArticlesService
  ) {}

  @Effect()
  getArticles$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.GetArticles),
    mergeMap(() => this.articlesService.getAllArticles().pipe(
      map(articles => new authorsArticlesActions.GetArticlesSuccess(articles))
    ))
  );

  @Effect()
  createArticles$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CreateArticle),
    map(action => (action as authorsArticlesActions.CreateArticle).payload),
    mergeMap((article) => this.articlesService.createArticle(article).pipe(
      map(createdArticle =>
        new  authorsArticlesActions.CreateArticleSuccess(createdArticle),
      )
    )),
  );

  @Effect()
  viewArticle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.ViewArticle),
    map((action) => (action as authorsArticlesActions.ViewArticle).payload),
    mergeMap(articleId => this.articlesService.getOneArticle(articleId)
      .pipe(
        map(article => new authorsArticlesActions.ViewArticleSuccess(article)),
      ),
    ),
  );

  @Effect()
  tagArticle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.TagArticle),
    map(action => (action as authorsArticlesActions.TagArticle).payload),
    mergeMap(({articleId, tag}) => this.articlesService
      .tagArticle(tag, articleId).pipe(
        map((articleTaggingResult: { articles: Article[], selectedArticle: Article }) =>
          new authorsArticlesActions.TagArticleSuccess(articleTaggingResult)
        ),
      ),
    ),
  );

  @Effect()
  untagArticle$: Observable<Action>  =  this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.UntagArticle),
    map(action => (action as authorsArticlesActions.UntagArticle).payload),
    mergeMap(({ articleId, tagId }) => this.articlesService
      .untagArticle(tagId, articleId).pipe(
        map(untaggingResult =>
          new authorsArticlesActions.UntagArticleSuccess(untaggingResult)
        ),
      ),
    ),
  );

  @Effect()
  editArticleTitle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.EditArticleTitle),
    map(action => (action as authorsArticlesActions.EditArticleTitle).payload),
    mergeMap(({ title, articleId}) => this.articlesService
      .editArticleTitle(title, articleId).pipe(
        map((editingResult) =>
          new authorsArticlesActions.EditArticleTitleSuccess(editingResult)
        ),
      )
    )
  );

  @Effect()
  editArticleBody$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.EditArticleBody),
    map(action => (action as authorsArticlesActions.EditArticleBody).payload),
    mergeMap(({ body, articleId }) => this.articlesService
      .editArticleBody(body, articleId).pipe(
        map((articleEdit) => (
          new authorsArticlesActions.EditArticleBodySuccess(articleEdit)
        )),
      ),
    ),
  );

  @Effect()
  categorizeArticle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CategorizeArticle),
    map(action => (action as authorsArticlesActions.CategorizeArticle).payload),
    mergeMap(({articleId, category}) => this.articlesService
      .categorizeArticle(articleId, category).pipe(
        map((categorizationResult) =>
          new authorsArticlesActions.CategorizeArticleSuccess(categorizationResult)
        )
      ),
    ),
  );

  @Effect()
  removeArticleFromCategory$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CategorizeArticle),
    map(action => (action as authorsArticlesActions.RemoveArticleFromCategory).payload),
    mergeMap(({ articleId, categoryId }) => this.articlesService
      .removeArticleFromCategory(articleId, categoryId).pipe(
        map((articleEdit) => (
          new authorsArticlesActions.RemoveArticleFromCategorySuccess(articleEdit)
        )),
      ),
    ),
  );

  @Effect()
  publish$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.TogglePublished),
    map(action => (action as authorsArticlesActions.TogglePublished).payload),
    switchMap(({ articleId }) => this.articlesService
      .toggleArticlePublishedState(articleId).pipe(
        map((articleEdit) => (
          new authorsArticlesActions.TogglePublishedSuccess(articleEdit)
        )),
      ),
    ),
  );
}
