import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, throwError, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthorsArticlesService } from '../../services/authors-articles/authors-articles.service';
import * as authorsArticlesActions from './authors-articles.actions';
import { GQLError } from '../../../shared/models/gql-error.interface';
import { EditArticleEffectResponse } from '../../authors-portal-shared/models/edit-article-effect-response.interface';

@Injectable()
export class AuthorsArticlesEffects {

  constructor(
    private actions$: Actions,
    private articlesService: AuthorsArticlesService
  ) {}

  @Effect()
  getArticles$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.GetArticles),
    mergeMap(() => this.performGetAllArticles()),
    catchError((error: GQLError) =>
    of(new authorsArticlesActions.GetArticlesError(this.getErrorMessage(error)))
  )
  );

  @Effect()
  createArticles$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CreateArticle),
    map(action => (action as authorsArticlesActions.CreateArticle).payload),
    switchMap(({title, body}) => this.articlesService
      .createArticle(title, body).pipe(
        map(result => {
          if (!result.error) {
            return new authorsArticlesActions.CreateArticleSuccess(result);
          }

          return new authorsArticlesActions.CreateArticleError(result.error);
        })
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
        map((articleTaggingResults: EditArticleEffectResponse) => {
          const { error } = articleTaggingResults;

          if (!error) {
            return new authorsArticlesActions.TagArticleSuccess(articleTaggingResults);
          } else {
            return new authorsArticlesActions.TagArticleError(error);
          }
        }),
      ),
    ),
  );

  @Effect()
  untagArticle$: Observable<Action>  =  this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.UntagArticle),
    map(action => (action as authorsArticlesActions.UntagArticle).payload),
    mergeMap(({ articleId, tagId }) => this.articlesService
      .untagArticle(tagId, articleId).pipe(
        map(untaggingResult => {
          const { error } = untaggingResult;

          if (!error) {
            return new authorsArticlesActions.UntagArticleSuccess(untaggingResult);
          }

          return new authorsArticlesActions.UntagArticleError(error);
        }),
      ),
    ),
  );

  @Effect()
  editArticleTitle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.EditArticleTitle),
    map(action => (action as authorsArticlesActions.EditArticleTitle).payload),
    switchMap(({ title, articleId}) => this.articlesService
      .editArticleTitle(title, articleId).pipe(
        map((editingResult) => {
          if (editingResult.error) {
            return new authorsArticlesActions.EditArticleTitleError(editingResult.error);
         }
          return new authorsArticlesActions.
          EditArticleTitleSuccess(editingResult);
        }),
      )
    )
  );

  @Effect()
  editArticleBody$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.EditArticleBody),
    map(action => (action as authorsArticlesActions.EditArticleBody).payload),
    switchMap(({ body, articleId }) => this.articlesService
      .editArticleBody(body, articleId).pipe(
        map((articleEdit) => {
          if (articleEdit.error) {
            return new authorsArticlesActions.EditArticleBodyError(articleEdit.error);
          }

          return new authorsArticlesActions.EditArticleBodySuccess(articleEdit);
        }),
      ),
    ),
  );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$.pipe(
    ofType(authorsArticlesActions.AuthorsArticlesActionTypes.DeleteArticle),
    map(action => (action as authorsArticlesActions.DeleteArticle).payload),
    mergeMap(articleId => this.articlesService.deleteArticle(articleId).pipe(
      map(result => {
        if (result.error) {
          return new authorsArticlesActions.DeleteArticleError(result.error);
        }

        return new authorsArticlesActions.DeleteArticleSuccess(result);
      })
    ))
  );

  // @Effect()
  // categorizeArticle$: Observable<Action> = this.actions$.pipe(
  //   ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CategorizeArticle),
  //   map(action => (action as authorsArticlesActions.CategorizeArticle).payload),
  //   mergeMap(({articleId, category}) => this.articlesService
  //     .categorizeArticle(articleId, category).pipe(
  //       map((categorizationResult) =>
  //         new authorsArticlesActions.CategorizeArticleSuccess(categorizationResult)
  //       )
  //     ),
  //   ),
  // );

  // @Effect()
  // removeArticleFromCategory$: Observable<Action> = this.actions$.pipe(
  //   ofType(authorsArticlesActions.AuthorsArticlesActionTypes.CategorizeArticle),
  //   map(action => (action as authorsArticlesActions.RemoveArticleFromCategory).payload),
  //   mergeMap(({ articleId, categoryId }) => this.articlesService
  //     .removeArticleFromCategory(articleId, categoryId).pipe(
  //       map((articleEdit) => (
  //         new authorsArticlesActions.RemoveArticleFromCategorySuccess(articleEdit)
  //       )),
  //     ),
  //   ),
  // );

  // @Effect()
  // publish$: Observable<Action> = this.actions$.pipe(
  //   ofType(authorsArticlesActions.AuthorsArticlesActionTypes.TogglePublished),
  //   map(action => (action as authorsArticlesActions.TogglePublished).payload),
  //   switchMap(({ articleId }) => this.articlesService
  //     .toggleArticlePublishedState(articleId).pipe(
  //       map((articleEdit) => (
  //         new authorsArticlesActions.TogglePublishedSuccess(articleEdit)
  //       )),
  //     ),
  //   ),
  // );


  private performGetAllArticles() {
    return this.articlesService.getAllArticles().pipe(
      map(articlesResponse => {
        if (!articlesResponse.error) {
          return new authorsArticlesActions
            .GetArticlesSuccess(articlesResponse.articles);
        }

        throw new Error(articlesResponse.error);
      }),
    );
  }

  private getErrorMessage(error: GQLError): string {
    return error.error ? (error.error || { message: ''}).message : (error.error as string);
  }
}
