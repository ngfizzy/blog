import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { mergeMap, map } from 'rxjs/operators';

// import { AuthorsArticlesService } from '../authors-articles.service';
// import * as authorsPortalActions from './authors-portal.actions';


// @Injectable()
// export class AuthorsPortalEffects {

//   constructor(
//     private actions$: Actions,
//     private articlesService: AuthorsArticlesService
//   ) {}

//   @Effect()
//   getArticles$: Observable<Action> = this.actions$.pipe(
//     ofType(authorsPortalActions.AuthorsPortalActionTypes.GetArticles),
//     mergeMap(() => this.articlesService.getAllArticles().pipe(
//       map(articles => new authorsPortalActions.GetArticlesSuccess(articles))
//     ))
//   );

//   @Effect()
//   createArticles$: Observable<Action> = this.actions$.pipe(
//     ofType(authorsPortalActions.AuthorsPortalActionTypes.CreateArticleSuccess),
//     mergeMap((article) => this.articlesService.createArticle(article).pipe(
//       map(createdArticle => new  authorsPortalActions.CreateArticleSuccess(createdArticle))
//     )),
//   );
// }
